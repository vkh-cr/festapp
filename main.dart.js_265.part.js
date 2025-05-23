((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_265",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,C,F,B={
cFF(d){var x=J.a1(d)
return new B.j3(x.h(d,"x"),x.h(d,"y"),x.h(d,"id"),x.h(d,"group"),x.h(d,"order_product_ticket"),x.h(d,"type"),x.h(d,"state"),x.h(d,"title"),null,x.h(d,"product"),null)},
j3:function j3(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b42:function b42(d){this.a=d},
b43:function b43(d){this.a=d},
b44:function b44(d){this.a=d},
b45:function b45(){},
b46:function b46(d){this.a=d},
b47:function b47(d){this.a=d},
b41:function b41(d){this.a=d},
b48:function b48(){},
b49:function b49(d){this.a=d},
bzA(d){var x=null
switch(d){case"ordered":case"expired":return A.r("Ordered",x)
case"paid":return A.r("Paid",x)
case"sent":return A.r("Sent",x)
case"used":return A.r("Used",x)
case"storno":return A.r("Storno",x)
default:return"???"}},
djg(d){return d+";"+B.bzA(d)},
cTl(d,e,f,g,h,i,j,k,l,m,n){return new B.hr(h,d,n,l,m,f,j,k,g,e,i)},
cTm(d){var x=null,w="created_at",v="updated_at",u="data",t=J.a1(d),s=t.h(d,"id"),r=t.h(d,w)!=null?A.ey(t.h(d,w)):x,q=t.h(d,v)!=null?A.ey(t.h(d,v)):x,p=t.h(d,"price")!=null?A.lE(J.aq(t.h(d,"price"))):x,o=t.h(d,"currency_code"),n=t.h(d,"state"),m=t.h(d,u)!=null?J.v(t.h(d,u),"form"):x,l=t.h(d,u),k=t.h(d,"occasion"),j=t.h(d,"payment_info")
return B.cTl(r,o,l,m,s,t.h(d,"note_hidden"),k,j,p,n,q)},
hr:function hr(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bzB:function bzB(){},
cW_(d,e,f,g,h,i,j,k){return new B.hs(e,d,j,i,f,g)},
cW0(d){var x="created_at",w="updated_at",v=J.a1(d),u=v.h(d,"id"),t=v.h(d,x)!=null?A.ey(v.h(d,x)):null,s=v.h(d,w)!=null?A.ey(v.h(d,w)):null,r=v.h(d,"ticket_symbol"),q=v.h(d,"state"),p=v.h(d,"occasion")
return B.cW_(t,u,v.h(d,"note"),v.h(d,"note_hidden"),p,q,r,s)},
hs:function hs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bPj:function bPj(){},
cQf(d){var x,w,v,u,t,s,r,q=y.w,p=A.I(q,y.q)
for(x=y.E,w=0;w<3;++w)p.m(0,D.mN[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.M)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.h(0,E.b.p(D.mN,u)?u:E.b.gZ(D.mN)).push(v)}t=A.I(q,y.d)
for(w=0;w<3;++w){s=D.mN[w]
if(p.h(0,s).length!==0){q=p.h(0,s)
q.toString
r=new A.N(q,new B.bh2(),A.W(q).i("N<1,m>")).bQ(0," | ")}else r=""
t.m(0,s,new A.hg(new A.ht(),r))}return t},
bh2:function bh2(){},
bbi(d){return B.dc7(d)},
dc7(d){var x=0,w=A.l(y.v),v,u
var $async$bbi=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.d($.C2().dt("delete_order",A.z(["order_id",d.a],y.w,v),v),$async$bbi)
case 2:u=f
v=J.a1(u)
if(!J.p(v.h(u,"code"),200))throw A.n(A.cP("Deleting order failed: "+A.o(v.h(u,"code"))+": "+A.o(v.h(u,"message"))))
return A.j(null,w)}})
return A.k($async$bbi,w)},
bbA(d,e){return B.dcf(d,e)},
dcf(d,e){var x=0,w=A.l(y.v),v,u,t
var $async$bbA=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.C2().dt("update_order_note_hidden",A.z(["order_id",d,"new_note_hidden",e],y.w,v),v),$async$bbA)
case 2:if(!u.p(t.v(g,"code"),200))throw A.n(A.cP("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$bbA,w)},
bbS(d,e){return B.dcs(d,e)},
dcs(d,e){var x=0,w=A.l(y.v),v,u,t
var $async$bbS=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.O9().dt("update_ticket_note_hidden",A.z(["ticket_id",d,"new_note_hidden",e],y.w,v),v),$async$bbS)
case 2:if(!u.p(t.v(g,"code"),200))throw A.n(A.cP("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$bbS,w)}},D
J=c[1]
A=c[0]
E=c[2]
C=c[103]
F=c[137]
B=a.updateHolder(c[83],B)
D=c[308]
B.j3.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
bh(){var x,w,v=this,u=A.I(y.w,y.b)
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
bAT(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.dG(k,new B.b42(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.dG(k,new B.b43(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.W(k)
t=u.i("dH<1,f?>")
k=A.E(new A.dH(new A.ag(k,new B.b44(w),u.i("ag<1>")),new B.b45(),t),t.i("y.E"))
v=k}}if(v==null)s=l
else{k=A.W(v)
u=k.i("dH<1,m>")
u=new A.ag(new A.dH(new A.ag(v,new B.b46(m),k.i("ag<1>")),new B.b47(m),u),new B.b48(),u.i("ag<y.E>")).bQ(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.fA(k,new B.b49(x))}k=r==null
q=k?l:r.aKl()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a2w()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+k:""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+A.r("Ticket",l)+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.r("Price",l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+C.jh(d,n==null?0:n,l,0)},
gbk(d){return this.c},
gc3(d){return this.w},
sHx(d){return this.as=d}}
B.hr.prototype={
bLe(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.cu(F.vN().gdu(),F.vN().gdj(),F.vN().gei(),0,0,0,0,0)
x=this.ay.w
x.toString
return w.ft(A.cu(A.dU(x),A.ev(x),A.i6(x),0,0,0,0,0))},
bh(){var x,w=this,v=w.b
v=v==null?null:v.fR()
x=w.c
x=x==null?null:x.fR()
return A.z(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.w,y.b)},
p6(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.aD(e?0:f)
f=A.aD(e?0:f)
e=i.d
e=A.aD(e!=null?C.jh(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.aD(x+";"+B.bzA(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.jh(a0,v,w.x,0)}else w=""
w=A.aD(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.jh(a0,u,v.x,0)}else v=""
v=A.aD(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.jh(a0,t,u.x,0)}else u=""
u=A.aD(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.aD(r==null?0:r)
if((s?h:t.w)!=null){t=A.hw(g,h)
s=i.ay.w
s.toString
s=t.dg(s)
t=s}else t=""
t=A.aD(t)
s=i.b
s=A.aD(s!=null?A.hw(g,h).dg(s):"")
q=A.aD(i.a2w())
p=i.f
p=A.aD(p==null?h:J.v(p,"email"))
o=i.ax
o=A.aD(o!=null?new A.N(o,new B.bzB(),A.W(o).i("N<1,m>")).bQ(0," | "):"")
n=A.aD(i.aKl())
m=i.z
m=A.aD(m==null?"":m)
l=A.aD("")
k=A.aD("")
j=i.Q
j=j==null?h:j.ax
return A.l8(A.z(["id",d,"order_symbol",f,"price",e,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",m,"orders_history",l,"transactions",k,"forms",A.aD(j==null?"":j)],y.w,y.d),!1,y.b)},
eu(){var x=0,w=A.l(y.v),v=this
var $async$eu=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(B.bbi(v),$async$eu)
case 2:return A.j(null,w)}})
return A.k($async$eu,w)},
eO(){var x=0,w=A.l(y.v),v=this,u,t
var $async$eO=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.bbA(t,u),$async$eO)
case 2:return A.j(null,w)}})
return A.k($async$eO,w)},
ls(){return"Order #"+A.o(this.a)},
a2w(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aKl(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbk(d){return this.a}}
B.hs.prototype={
bh(){return A.z(["state",this.e,"note_hidden",this.w],y.w,y.b)},
p6(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.aD(k==null?0:k)
x=m.b
x=A.aD(x!=null?A.hw("yyyy-MM-dd",l).dg(x):"")
w=m.d
w=A.aD(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.aD(v+";"+B.bzA(v))
u=m.r
u=A.aD(u==null?"":u)
t=m.w
t=A.aD(t==null?"":t)
s=m.Q
r=s!=null
q=A.aD(r?"Order #"+A.o(s.a):"")
s=A.aD(r?s.a2w():"")
r=m.z
r=A.aD(r!=null?new A.N(r,new B.bPj(),A.W(r).i("N<1,m>")).bQ(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aD(p)
o=m.x
n=A.z(["id",k,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"ticketSpot",p,"price",A.aD(o!=null?C.jh(d,o,l,0):""),"ticketProductsEdit",A.aD("")],y.w,y.d)
k=m.Q.ax
n.H(0,B.cQf(k==null?A.a([],y.E):k))
return A.l8(n,!1,y.b)},
eu(){var x=0,w=A.l(y.v)
var $async$eu=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:return A.j(null,w)}})
return A.k($async$eu,w)},
eO(){var x=0,w=A.l(y.v),v=this,u,t
var $async$eO=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.d(B.bbS(t,u),$async$eO)
case 2:return A.j(null,w)}})
return A.k($async$eO,w)},
ls(){var x=this.d
return x==null?J.aq(this.a):x},
gbk(d){return this.a}}
var z=a.updateTypes(["x(nG)","x(hs)","f?(nG)","x(hr)","m(m)"])
B.b42.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.b43.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.b44.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.b45.prototype={
$1(d){return d.d},
$S:z+2}
B.b46.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:302}
B.b47.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.fA(w,new B.b41(d))}w=x==null?null:x.d
return w==null?"":w},
$S:1196}
B.b41.prototype={
$1(d){return d.a==this.a},
$S:39}
B.b48.prototype={
$1(d){return d.length!==0},
$S:19}
B.b49.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bzB.prototype={
$1(d){return d.ls()},
$S:153}
B.bPj.prototype={
$1(d){return d.ls()},
$S:153}
B.bh2.prototype={
$1(d){return d.ls()},
$S:153};(function installTearOffs(){var x=a._static_1
x(B,"d0v","djg",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.j3,A.G)
w(A.c9,[B.b42,B.b43,B.b44,B.b45,B.b46,B.b47,B.b41,B.b48,B.b49,B.bzB,B.bPj,B.bh2])
w(A.i3,[B.hr,B.hs])})()
A.c4(b.typeUniverse,JSON.parse('{"hr":{"i3":[]},"hs":{"i3":[]}}'))
var y={E:A.C("u<eW>"),q:A.C("B<eW>"),w:A.C("m"),d:A.C("hg"),b:A.C("@"),v:A.C("~")};(function constants(){var x=a.makeConstList
D.mN=A.a(x(["spot","food","others"]),A.C("u<m>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dGL","O9",()=>$.hM().gmM(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_265",e:"endPart",h:b})})($__dart_deferred_initializers__,"jEbPaWsF2wl+8AbvMvhpMdQ6zOs=");