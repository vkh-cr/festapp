((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_271",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
ciZ(d){var x=J.a3(d)
return new B.io(x.i(d,"x"),x.i(d,"y"),x.i(d,"id"),x.i(d,"group"),x.i(d,"order_product_ticket"),x.i(d,"type"),x.i(d,"state"),x.i(d,"title"),null,x.i(d,"product"),null)},
io:function io(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aXU:function aXU(d){this.a=d},
aXV:function aXV(d){this.a=d},
aXW:function aXW(d){this.a=d},
aXX:function aXX(){},
aXY:function aXY(d){this.a=d},
aXZ:function aXZ(d){this.a=d},
aXT:function aXT(d){this.a=d},
aY_:function aY_(){},
aY0:function aY0(d){this.a=d},
bog(d){var x=null
switch(d){case"ordered":return A.y("Ordered",x)
case"paid":return A.y("Paid",x)
case"sent":return A.y("Sent",x)
case"used":return A.y("Used",x)
case"storno":return A.y("Storno",x)
default:return"???"}},
cSA(d){return d+";"+B.bog(d)},
cvK(d,e,f,g,h,i,j,k,l,m){return new B.fS(g,d,m,k,l,f,i,j,e,h)},
cvL(d){var x="created_at",w="updated_at",v=J.a3(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.fD(v.i(d,x)):null,s=v.i(d,w)!=null?A.fD(v.i(d,w)):null,r=v.i(d,"price")!=null?A.nE(J.au(v.i(d,"price"))):null,q=v.i(d,"state"),p=v.i(d,"data"),o=v.i(d,"occasion"),n=v.i(d,"payment_info")
return B.cvK(t,v.i(d,"currency_code"),p,u,v.i(d,"note_hidden"),o,n,r,q,s)},
fS:function fS(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.y=l
_.z=m
_.ax=_.at=_.Q=null},
boh:function boh(){},
cyv(d,e,f,g,h,i,j,k){return new B.hb(e,d,j,i,f,g)},
cyw(d){var x="created_at",w="updated_at",v=J.a3(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.fD(v.i(d,x)):null,s=v.i(d,w)!=null?A.fD(v.i(d,w)):null,r=v.i(d,"ticket_symbol"),q=v.i(d,"state"),p=v.i(d,"occasion")
return B.cyv(t,u,v.i(d,"note"),v.i(d,"note_hidden"),p,q,r,s)},
hb:function hb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bDW:function bDW(){},
b2S(d){var x=0,w=A.l(y.f),v,u
var $async$b2S=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.c($.A8().ef("delete_order",A.z(["order_id",d.a],y.g,v),v),$async$b2S)
case 2:u=f
v=J.a3(u)
if(!J.m(v.i(u,"code"),200))throw A.f(A.cA("Deleting order failed: "+A.o(v.i(u,"code"))+": "+A.o(v.i(u,"message"))))
return A.j(null,w)}})
return A.k($async$b2S,w)},
b37(d,e){var x=0,w=A.l(y.f),v,u,t
var $async$b37=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.A8().ef("update_order_note_hidden",A.z(["order_id",d,"new_note_hidden",e],y.g,v),v),$async$b37)
case 2:if(!u.m(t.u(g,"code"),200))throw A.f(A.cA("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$b37,w)},
b3n(d,e){var x=0,w=A.l(y.f),v,u,t
var $async$b3n=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.Lu().ef("update_ticket_note_hidden",A.z(["ticket_id",d,"new_note_hidden",e],y.g,v),v),$async$b3n)
case 2:if(!u.m(t.u(g,"code"),200))throw A.f(A.cA("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$b3n,w)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[78],B)
C=c[97]
B.io.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
c9(){var x,w,v=this,u=A.H(y.g,y.b)
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
brp(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.e6(k,new B.aXU(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.e6(k,new B.aXV(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.X(k)
t=u.h("di<1,r?>")
t=A.J(new A.di(new A.ai(k,new B.aXW(w),u.h("ai<1>")),new B.aXX(),t),!0,t.h("v.E"))
v=t}}if(v==null)s=l
else{k=A.X(v)
u=k.h("di<1,e>")
u=new A.ai(new A.di(new A.ai(v,new B.aXY(m),k.h("ai<1>")),new B.aXZ(m),u),new B.aY_(),u.h("ai<v.E>")).c5(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:D.b.lQ(k,new B.aY0(x))}k=r==null
q=k?l:r.aEG()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a_W()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+A.o(k):""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+A.y("Ticket",l)+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.y("Price",l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+C.o2(d,n==null?0:n,l,0)},
gbq(d){return this.c},
gdv(d){return this.w},
sGv(d){return this.as=d}}
B.fS.prototype={
c9(){var x,w=this,v=w.b
v=v==null?null:v.i7()
x=w.c
x=x==null?null:x.i7()
return A.z(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.g,y.b)},
qi(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k==null,i=A.aS(j?0:k)
k=A.aS(j?0:k)
j=m.d
j=A.aS(j!=null?C.o2(d,j,l,0):"")
x=m.e
if(x==null)x="ordered"
x=A.aS(x+";"+B.bog(x))
w=m.ax
if((w==null?l:w.e)!=null){w=w.e
w.toString
w=C.o2(d,w,l,0)}else w=""
w=A.aS(w)
v=m.ax
if((v==null?l:v.f)!=null){v=v.f
v.toString
v=C.o2(d,v,l,0)}else v=""
v=A.aS(v)
u=m.ax
if((u==null?l:u.r)!=null){u=u.r
u.toString
u=C.o2(d,u,l,0)}else u=""
u=A.aS(u)
t=m.ax
s=t==null
r=s?l:t.d
r=A.aS(r==null?0:r)
if((s?l:t.w)!=null){t=A.j2("yyyy-MM-dd",l)
s=m.ax.w
s.toString
s=t.e7(s)
t=s}else t=""
t=A.aS(t)
s=A.aS(m.a_W())
q=m.f
q=A.aS(q==null?l:J.u(q,"email"))
p=m.at
p=A.aS(p!=null?new A.Q(p,new B.boh(),A.X(p).h("Q<1,e>")).c5(0," | "):"")
o=A.aS(m.aEG())
n=m.z
return A.lh(A.z(["id",i,"order_symbol",k,"price",j,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"data",s,"email",q,"ticket_products",p,"note",o,"note_hidden",A.aS(n==null?"":n),"orders_history",A.aS(""),"transactions",A.aS("")],y.g,y.e),!1,y.b)},
eR(){var x=0,w=A.l(y.f),v=this
var $async$eR=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(B.b2S(v),$async$eR)
case 2:return A.j(null,w)}})
return A.k($async$eR,w)},
fh(){var x=0,w=A.l(y.f),v=this,u,t
var $async$fh=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.c(B.b37(t,u),$async$fh)
case 2:return A.j(null,w)}})
return A.k($async$fh,w)},
m_(){return"Order #"+A.o(this.a)},
a_W(){var x=this.f,w=x==null,v=A.o(w?null:J.u(x,"name"))
return v+" "+A.o(w?null:J.u(x,"surname"))},
aEG(){var x=this.f
x=x==null?null:J.u(x,"note")
return A.o(x==null?"":x)},
gbq(d){return this.a}}
B.hb.prototype={
c9(){return A.z(["state",this.e,"note_hidden",this.w],y.g,y.b)},
qi(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a
l=A.aS(l==null?0:l)
x=n.b
x=A.aS(x!=null?A.j2("yyyy-MM-dd",m).e7(x):"")
w=n.d
w=A.aS(w==null?"":w)
v=n.e
if(v==null)v="ordered"
v=A.aS(v+";"+B.bog(v))
u=n.r
u=A.aS(u==null?"":u)
t=n.w
t=A.aS(t==null?"":t)
s=n.Q
r=s!=null
q=A.aS(r?"Order #"+A.o(s.a):"")
s=A.aS(r?s.a_W():"")
r=n.z
r=A.aS(r!=null?new A.Q(r,new B.bDW(),A.X(r).h("Q<1,e>")).c5(0," | "):"")
p=n.y
if(p!=null){o=p.z
o=o==null?m:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aS(p)
o=n.x
return A.lh(A.z(["id",l,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"spot",p,"price",A.aS(o!=null?C.o2(d,o,m,0):"")],y.g,y.e),!1,y.b)},
eR(){var x=0,w=A.l(y.f)
var $async$eR=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:return A.j(null,w)}})
return A.k($async$eR,w)},
fh(){var x=0,w=A.l(y.f),v=this,u,t
var $async$fh=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.c(B.b3n(t,u),$async$fh)
case 2:return A.j(null,w)}})
return A.k($async$fh,w)},
m_(){var x=this.d
return x==null?J.au(this.a):x},
gbq(d){return this.a}}
var z=a.updateTypes(["w(mK)","w(hb)","r?(mK)","w(fS)","e(e)"])
B.aXU.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.aXV.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.aXW.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.aXX.prototype={
$1(d){return d.d},
$S:z+2}
B.aXY.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:347}
B.aXZ.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:D.b.lQ(w,new B.aXT(d))}w=x==null?null:x.d
return w==null?"":w},
$S:953}
B.aXT.prototype={
$1(d){return d.a==this.a},
$S:155}
B.aY_.prototype={
$1(d){return d.length!==0},
$S:16}
B.aY0.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.boh.prototype={
$1(d){return d.m_()},
$S:348}
B.bDW.prototype={
$1(d){return d.m_()},
$S:348};(function installTearOffs(){var x=a._static_1
x(B,"cvN","cSA",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.io,A.D)
w(A.bC,[B.aXU,B.aXV,B.aXW,B.aXX,B.aXY,B.aXZ,B.aXT,B.aY_,B.aY0,B.boh,B.bDW])
w(A.iO,[B.fS,B.hb])})()
A.bl(b.typeUniverse,JSON.parse('{"fS":{"iO":[]},"hb":{"iO":[]}}'))
var y={e:A.x("fW"),g:A.x("e"),b:A.x("@"),f:A.x("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"dbQ","Lu",()=>$.hN().gnp(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_271",e:"endPart",h:b})})($__dart_deferred_initializers__,"9F1rQ3ZYMV0Dpd/r58y23fZxVSI=");