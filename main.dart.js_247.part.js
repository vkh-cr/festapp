((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_247",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,C,B={
cMp(d){var x=J.a1(d)
return new B.jg(x.h(d,"x"),x.h(d,"y"),x.h(d,"id"),x.h(d,"group"),x.h(d,"order_product_ticket"),x.h(d,"type"),x.h(d,"state"),x.h(d,"title"),null,x.h(d,"product"),null)},
jg:function jg(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b5k:function b5k(d){this.a=d},
b5l:function b5l(d){this.a=d},
b5m:function b5m(d){this.a=d},
b5n:function b5n(){},
b5o:function b5o(d){this.a=d},
b5p:function b5p(d){this.a=d},
b5j:function b5j(d){this.a=d},
b5q:function b5q(){},
b5r:function b5r(d){this.a=d},
bCl(d){var x=null
switch(d){case"ordered":case"expired":return A.p("Ordered",x)
case"paid":return A.p("Paid",x)
case"sent":return A.p("Sent",x)
case"used":return A.p("Used",x)
case"storno":return A.p("Storno",x)
default:return"???"}},
dqK(d){return d+";"+B.bCl(d)},
d_i(d,e,f,g,h,i,j,k,l,m,n){return new B.hD(h,d,n,l,m,f,j,k,g,e,i)},
d_j(d){var x=null,w="created_at",v="updated_at",u="data",t=J.a1(d),s=t.h(d,"id"),r=t.h(d,w)!=null?A.ek(t.h(d,w)):x,q=t.h(d,v)!=null?A.ek(t.h(d,v)):x,p=t.h(d,"price")!=null?A.lg(J.ap(t.h(d,"price"))):x,o=t.h(d,"currency_code"),n=t.h(d,"state"),m=t.h(d,u)!=null?J.v(t.h(d,u),"form"):x,l=t.h(d,u),k=t.h(d,"occasion"),j=t.h(d,"payment_info")
return B.d_i(r,o,l,m,s,t.h(d,"note_hidden"),k,j,p,n,q)},
hD:function hD(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bCm:function bCm(){},
d1V(d,e,f,g,h,i,j,k){return new B.hF(e,d,j,i,f,g)},
d1W(d){var x="created_at",w="updated_at",v=J.a1(d),u=v.h(d,"id"),t=v.h(d,x)!=null?A.ek(v.h(d,x)):null,s=v.h(d,w)!=null?A.ek(v.h(d,w)):null,r=v.h(d,"ticket_symbol"),q=v.h(d,"state"),p=v.h(d,"occasion")
return B.d1V(t,u,v.h(d,"note"),v.h(d,"note_hidden"),p,q,r,s)},
hF:function hF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bSE:function bSE(){},
cX9(d){var x,w,v,u,t,s,r,q=y.w,p=A.I(q,y.q)
for(x=y.E,w=0;w<3;++w)p.m(0,D.mZ[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.M)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.h(0,E.b.p(D.mZ,u)?u:E.b.gZ(D.mZ)).push(v)}t=A.I(q,y.d)
for(w=0;w<3;++w){s=D.mZ[w]
if(p.h(0,s).length!==0){q=p.h(0,s)
q.toString
r=new A.J(q,new B.bja(),A.T(q).i("J<1,l>")).bv(0," | ")}else r=""
t.m(0,s,new A.hd(new A.ht(),r))}return t},
bja:function bja(){},
bcX(d){return B.djk(d)},
djk(d){var x=0,w=A.k(y.v),v,u
var $async$bcX=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.d($.Cr().cJ("delete_order",A.y(["order_id",d.a],y.w,v),v),$async$bcX)
case 2:u=f
v=J.a1(u)
if(!J.q(v.h(u,"code"),200))throw A.o(A.cB("Deleting order failed: "+A.n(v.h(u,"code"))+": "+A.n(v.h(u,"message"))))
return A.i(null,w)}})
return A.j($async$bcX,w)},
bde(d,e){return B.djr(d,e)},
djr(d,e){var x=0,w=A.k(y.v),v,u,t
var $async$bde=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.Cr().cJ("update_order_note_hidden",A.y(["order_id",d,"new_note_hidden",e],y.w,v),v),$async$bde)
case 2:if(!u.q(t.v(g,"code"),200))throw A.o(A.cB("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$bde,w)},
bdy(d,e){return B.djF(d,e)},
djF(d,e){var x=0,w=A.k(y.v),v,u,t
var $async$bdy=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.OD().cJ("update_ticket_note_hidden",A.y(["ticket_id",d,"new_note_hidden",e],y.w,v),v),$async$bdy)
case 2:if(!u.q(t.v(g,"code"),200))throw A.o(A.cB("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$bdy,w)}},D,F
J=c[1]
A=c[0]
E=c[2]
C=c[99]
B=a.updateHolder(c[77],B)
D=c[300]
F=c[133]
B.jg.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.n(x)+", Sedadlo "+A.n(this.w)},
b6(){var x,w,v=this,u=A.I(y.w,y.b)
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
bDk(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.cD(k,new B.b5k(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.cD(k,new B.b5l(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.T(k)
t=u.i("d8<1,m?>")
k=A.B(new A.d8(new A.a9(k,new B.b5m(w),u.i("a9<1>")),new B.b5n(),t),t.i("w.E"))
v=k}}if(v==null)s=l
else{k=A.T(v)
u=k.i("d8<1,l>")
u=new A.a9(new A.d8(new A.a9(v,new B.b5o(m),k.i("a9<1>")),new B.b5p(m),u),new B.b5q(),u.i("a9<w.E>")).bv(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.fO(k,new B.b5r(x))}k=r==null
q=k?l:r.aLv()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a3d()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+k:""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.n(k)+" "+u+"\n"+C.atj()+" "+A.n(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.p("Price",l)
n=m.x
n=n==null?l:n.r
return A.n(k)+" "+u+"\n"+t+": "+C.jx(d,n==null?0:n,l,0)},
gbh(d){return this.c},
gc_(d){return this.w},
sHH(d){return this.as=d}}
B.hD.prototype={
bNO(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.co(F.rI().a.gdt(),F.rI().a.gdj(),F.rI().a.gec(),0,0,0,0,0)
x=this.ay.w
x.toString
return w.fj(A.co(A.dG(x),A.eC(x),A.iV(x),0,0,0,0,0))},
b6(){var x,w=this,v=w.b
v=v==null?null:v.fB()
x=w.c
x=x==null?null:x.fB()
return A.y(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.w,y.b)},
pe(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.aE(e?0:f)
f=A.aE(e?0:f)
e=i.d
e=A.aE(e!=null?C.jx(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.aE(x+";"+B.bCl(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.jx(a0,v,w.x,0)}else w=""
w=A.aE(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.jx(a0,u,v.x,0)}else v=""
v=A.aE(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.jx(a0,t,u.x,0)}else u=""
u=A.aE(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.aE(r==null?0:r)
if((s?h:t.w)!=null){t=A.h7(g,h)
s=i.ay.w
s.toString
s=t.cF(s)
t=s}else t=""
t=A.aE(t)
s=i.b
s=A.aE(s!=null?A.h7(g,h).cF(s):"")
q=A.aE(i.a3d())
p=i.f
p=A.aE(p==null?h:J.v(p,"email"))
o=i.ax
o=A.aE(o!=null?new A.J(o,new B.bCm(),A.T(o).i("J<1,l>")).bv(0," | "):"")
n=A.aE(i.aLv())
m=i.z
m=A.aE(m==null?"":m)
l=A.aE("")
k=A.aE("")
j=i.Q
j=j==null?h:j.j(0)
return A.lp(A.y(["id",d,"order_symbol",f,"price",e,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",m,"orders_history",l,"transactions",k,"forms",A.aE(j==null?"":j)],y.w,y.d),!1,y.b)},
ew(){var x=0,w=A.k(y.v),v=this
var $async$ew=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(B.bcX(v),$async$ew)
case 2:return A.i(null,w)}})
return A.j($async$ew,w)},
eQ(){var x=0,w=A.k(y.v),v=this,u,t
var $async$eQ=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.bde(t,u),$async$eQ)
case 2:return A.i(null,w)}})
return A.j($async$eQ,w)},
kH(){return"Order #"+A.n(this.a)},
a3d(){var x=this.f,w=x==null,v=A.n(w?null:J.v(x,"name"))
return v+" "+A.n(w?null:J.v(x,"surname"))},
aLv(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.n(x==null?"":x)},
gbh(d){return this.a}}
B.hF.prototype={
b6(){return A.y(["state",this.e,"note_hidden",this.w],y.w,y.b)},
pe(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.aE(k==null?0:k)
x=m.b
x=A.aE(x!=null?A.h7("yyyy-MM-dd",l).cF(x):"")
w=m.d
w=A.aE(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.aE(v+";"+B.bCl(v))
u=m.r
u=A.aE(u==null?"":u)
t=m.w
t=A.aE(t==null?"":t)
s=m.Q
r=s!=null
q=A.aE(r?"Order #"+A.n(s.a):"")
s=A.aE(r?s.a3d():"")
r=m.z
r=A.aE(r!=null?new A.J(r,new B.bSE(),A.T(r).i("J<1,l>")).bv(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aE(p)
o=m.x
n=A.y(["id",k,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"ticketSpot",p,"price",A.aE(o!=null?C.jx(d,o,l,0):""),"ticketProductsEdit",A.aE("")],y.w,y.d)
k=m.Q.ax
n.H(0,B.cX9(k==null?A.a([],y.E):k))
return A.lp(n,!1,y.b)},
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
return A.d(B.bdy(t,u),$async$eQ)
case 2:return A.i(null,w)}})
return A.j($async$eQ,w)},
kH(){var x=this.d
return x==null?J.ap(this.a):x},
gbh(d){return this.a}}
var z=a.updateTypes(["x(nT)","x(hF)","m?(nT)","x(hD)","l(l)"])
B.b5k.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.b5l.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.b5m.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.b5n.prototype={
$1(d){return d.d},
$S:z+2}
B.b5o.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:220}
B.b5p.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.fO(w,new B.b5j(d))}w=x==null?null:x.d
return w==null?"":w},
$S:1240}
B.b5j.prototype={
$1(d){return d.a==this.a},
$S:45}
B.b5q.prototype={
$1(d){return d.length!==0},
$S:16}
B.b5r.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bCm.prototype={
$1(d){return d.kH()},
$S:173}
B.bSE.prototype={
$1(d){return d.kH()},
$S:173}
B.bja.prototype={
$1(d){return d.kH()},
$S:173};(function installTearOffs(){var x=a._static_1
x(B,"d7u","dqK",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.jg,A.K)
w(A.ch,[B.b5k,B.b5l,B.b5m,B.b5n,B.b5o,B.b5p,B.b5j,B.b5q,B.b5r,B.bCm,B.bSE,B.bja])
w(A.ih,[B.hD,B.hF])})()
A.ce(b.typeUniverse,JSON.parse('{"hD":{"ih":[]},"hF":{"ih":[]}}'))
var y={E:A.E("u<eS>"),q:A.E("D<eS>"),w:A.E("l"),d:A.E("hd"),b:A.E("@"),v:A.E("~")};(function constants(){var x=a.makeConstList
D.mZ=A.a(x(["spot","food","others"]),A.E("u<l>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dOl","OD",()=>$.hK().gmo(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_247",e:"endPart",h:b})})($__dart_deferred_initializers__,"1Lo2M9SMeWME1UqQO/G+MZ9Qtug=");