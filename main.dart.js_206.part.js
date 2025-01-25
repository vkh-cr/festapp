((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_206",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
cdd(d){var x=J.a1(d)
return new B.ir(x.i(d,"x"),x.i(d,"y"),x.i(d,"id"),x.i(d,"group"),x.i(d,"order_product_ticket"),x.i(d,"type"),x.i(d,"state"),x.i(d,"title"),null,x.i(d,"product"),null)},
ir:function ir(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aWa:function aWa(d){this.a=d},
aWb:function aWb(d){this.a=d},
aWc:function aWc(d){this.a=d},
aWd:function aWd(){},
aWe:function aWe(d){this.a=d},
aWf:function aWf(d){this.a=d},
aW9:function aW9(d){this.a=d},
aWg:function aWg(){},
aWh:function aWh(d){this.a=d},
bm9(d){var x=null
switch(d){case"ordered":return A.C("Ordered",x)
case"paid":return A.C("Paid",x)
case"sent":return A.C("Sent",x)
case"used":return A.C("Used",x)
case"storno":return A.C("Storno",x)
default:return"???"}},
cMN(d){return d+";"+B.bm9(d)},
cq6(d,e,f,g,h,i,j,k,l,m){return new B.h8(g,d,m,k,l,f,i,j,e,h)},
cq7(d){var x="created_at",w="updated_at",v=J.a1(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.ft(v.i(d,x)):null,s=v.i(d,w)!=null?A.ft(v.i(d,w)):null,r=v.i(d,"price")!=null?A.ov(J.as(v.i(d,"price"))):null,q=v.i(d,"state"),p=v.i(d,"data"),o=v.i(d,"occasion"),n=v.i(d,"payment_info")
return B.cq6(t,v.i(d,"currency_code"),p,u,v.i(d,"note_hidden"),o,n,r,q,s)},
h8:function h8(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.ax=_.Q=null},
cfS(d){var x="created_at",w="updated_at",v=J.a1(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.ft(v.i(d,x)):null,s=v.i(d,w)!=null?A.ft(v.i(d,w)):null,r=v.i(d,"title"),q=v.i(d,"is_hidden"),p=v.i(d,"description"),o=v.i(d,"price")!=null?A.ov(J.as(v.i(d,"price"))):null
return new B.iX(u,t,s,r,q,p,o,v.i(d,"data"),v.i(d,"product_type"),v.i(d,"occasion"),v.i(d,"type"),v.i(d,"order"))},
iX:function iX(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.Q=o},
csO(d,e,f,g,h,i,j,k){return new B.ih(e,d,j,i,f,g)},
csP(d){var x="created_at",w="updated_at",v=J.a1(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.ft(v.i(d,x)):null,s=v.i(d,w)!=null?A.ft(v.i(d,w)):null,r=v.i(d,"ticket_symbol"),q=v.i(d,"state"),p=v.i(d,"occasion")
return B.csO(t,u,v.i(d,"note"),v.i(d,"note_hidden"),p,q,r,s)},
ih:function ih(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bBh:function bBh(){},
b_R(d){var x=0,w=A.l(y.f),v,u
var $async$b_R=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.c($.i5().fq("delete_order",A.y(["order_id",d.a],y.g,v),v),$async$b_R)
case 2:u=f
v=J.a1(u)
if(!J.m(v.i(u,"code"),200))throw A.f(A.cW("Deleting order failed: "+A.o(v.i(u,"code"))+": "+A.o(v.i(u,"message"))))
return A.j(null,w)}})
return A.k($async$b_R,w)},
b0q(d,e){var x=0,w=A.l(y.f),v,u,t
var $async$b0q=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.i5().fq("update_ticket_note_hidden",A.y(["ticket_id",d,"new_note_hidden",e],y.g,v),v),$async$b0q)
case 2:if(!u.m(t.t(g,"code"),200))throw A.f(A.cW("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$b0q,w)},
b0p(d,e){var x=0,w=A.l(y.f),v,u,t
var $async$b0p=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.i5().fq("update_order_note_hidden",A.y(["order_id",d,"new_note_hidden",e],y.g,v),v),$async$b0p)
case 2:if(!u.m(t.t(g,"code"),200))throw A.f(A.cW("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$b0p,w)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[82],B)
C=c[95]
B.ir.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
boY(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.du(k,new B.aWa(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.du(k,new B.aWb(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.V(k)
t=u.h("d_<1,r?>")
t=A.H(new A.d_(new A.ag(k,new B.aWc(w),u.h("ag<1>")),new B.aWd(),t),!0,t.h("v.E"))
v=t}}if(v==null)s=l
else{k=A.V(v)
u=k.h("d_<1,e>")
u=new A.ag(new A.d_(new A.ag(v,new B.aWe(m),k.h("ag<1>")),new B.aWf(m),u),new B.aWg(),u.h("ag<v.E>")).bZ(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:D.b.kz(k,new B.aWh(x))}k=r==null
q=k?l:r.aD1()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a_2()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+A.o(k):""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+A.C("Ticket",l)+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.C("Price",l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+C.Dv(d,n==null?0:n)},
gbT(d){return this.c},
gdK(d){return this.w},
sVZ(d){return this.as=d}}
B.h8.prototype={
c5(){var x,w=this,v=w.b
v=v==null?null:v.h8()
x=w.c
x=x==null?null:x.h8()
return A.y(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.g,y.b)},
vh(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=m==null,k=A.bi(l?0:m)
m=A.bi(l?0:m)
l=o.d
l=A.bi(l!=null?C.Dv(d,l):"")
x=o.e
if(x==null)x="ordered"
x=A.bi(x+";"+B.bm9(x))
w=o.ax
if((w==null?n:w.e)!=null){w=w.e
w.toString
w=C.Dv(d,w)}else w=""
w=A.bi(w)
v=o.ax
if((v==null?n:v.f)!=null){v=v.f
v.toString
v=C.Dv(d,v)}else v=""
v=A.bi(v)
u=o.ax
if((u==null?n:u.r)!=null){u=u.r
u.toString
u=C.Dv(d,u)}else u=""
u=A.bi(u)
t=o.ax
s=t==null
r=s?n:t.d
r=A.bi(r==null?0:r)
if((s?n:t.w)!=null){t=A.jf("yyyy-MM-dd",n)
s=o.ax.w
s.toString
s=t.eu(s)
t=s}else t=""
t=A.bi(t)
s=A.bi(o.a_2())
q=A.bi(o.aD1())
p=o.z
return A.mo(A.y(["id",k,"order_symbol",m,"price",l,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"data",s,"note",q,"note_hidden",A.bi(p==null?"":p),"orders_history",A.bi("")],y.g,y.e),!1,y.b)},
fg(){var x=0,w=A.l(y.f),v=this
var $async$fg=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(B.b_R(v),$async$fg)
case 2:return A.j(null,w)}})
return A.k($async$fg,w)},
fT(){var x=0,w=A.l(y.f),v=this,u,t
var $async$fT=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.c(B.b0p(t,u),$async$fT)
case 2:return A.j(null,w)}})
return A.k($async$fT,w)},
lH(){return"Order #"+A.o(this.a)},
a_2(){var x=this.f,w=x==null,v=A.o(w?null:J.t(x,"name")),u=A.o(w?null:J.t(x,"surname"))
return v+" "+u+" ("+A.o(w?null:J.t(x,"email"))+")"},
aD1(){var x=this.f
x=x==null?null:J.t(x,"note")
return A.o(x==null?"":x)},
gbT(d){return this.a}}
B.iX.prototype={
c5(){var x,w=this,v=w.b
v=v==null?null:v.h8()
x=w.c
x=x==null?null:x.h8()
return A.y(["id",w.a,"created_at",v,"updated_at",x,"title",w.d,"is_hidden",w.e,"description",w.f,"price",w.r,"data",w.w,"product_type",w.x,"occasion",w.y,"order",w.Q],y.g,y.b)},
lH(){var x=this.d
return x==null?J.as(this.a):x},
gbT(d){return this.a},
gdK(d){return this.d}}
B.ih.prototype={
c5(){return A.y(["state",this.e,"note_hidden",this.w],y.g,y.b)},
vh(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.a
m=A.bi(m==null?0:m)
x=n.b
x=A.bi(x!=null?A.jf("yyyy-MM-dd",null).eu(x):"")
w=n.d
w=A.bi(w==null?"":w)
v=n.e
if(v==null)v="ordered"
v=A.bi(v+";"+B.bm9(v))
u=n.r
u=A.bi(u==null?"":u)
t=n.w
t=A.bi(t==null?"":t)
s=n.Q
r=s!=null
q=A.bi(r?"Order #"+A.o(s.a):"")
s=A.bi(r?s.a_2():"")
r=n.z
r=A.bi(r!=null?new A.O(r,new B.bBh(),A.V(r).h("O<1,e>")).bZ(0," | "):"")
p=n.y
if(p!=null){o=p.z
o=o==null?null:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.bi(p)
o=n.x
return A.mo(A.y(["id",m,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"spot",p,"price",A.bi(o!=null?C.Dv(d,o):"")],y.g,y.e),!1,y.b)},
fg(){var x=0,w=A.l(y.f)
var $async$fg=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:return A.j(null,w)}})
return A.k($async$fg,w)},
fT(){var x=0,w=A.l(y.f),v=this,u,t
var $async$fT=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.c(B.b0q(t,u),$async$fT)
case 2:return A.j(null,w)}})
return A.k($async$fT,w)},
lH(){var x=this.d
return x==null?J.as(this.a):x},
gbT(d){return this.a}}
var z=a.updateTypes(["u(qT)","u(ih)","r?(qT)","u(iX)","u(h8)","e(iX)","e(e)"])
B.aWa.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.aWb.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.aWc.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.aWd.prototype={
$1(d){return d.d},
$S:z+2}
B.aWe.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:298}
B.aWf.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:D.b.kz(w,new B.aW9(d))}w=x==null?null:x.d
return w==null?"":w},
$S:924}
B.aW9.prototype={
$1(d){return d.a==this.a},
$S:z+3}
B.aWg.prototype={
$1(d){return d.length!==0},
$S:14}
B.aWh.prototype={
$1(d){return d.a==this.a.c},
$S:z+4}
B.bBh.prototype={
$1(d){return d.lH()},
$S:z+5};(function installTearOffs(){var x=a._static_1
x(B,"cq9","cMN",6)})();(function inheritance(){var x=a.inheritMany
x(A.B,[B.ir,B.iX])
x(A.bH,[B.aWa,B.aWb,B.aWc,B.aWd,B.aWe,B.aWf,B.aW9,B.aWg,B.aWh,B.bBh])
x(A.ix,[B.h8,B.ih])})()
A.br(b.typeUniverse,JSON.parse('{"h8":{"ix":[]},"ih":{"ix":[]}}'))
var y={e:A.w("fO"),g:A.w("e"),b:A.w("@"),f:A.w("~")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_206",e:"endPart",h:b})})($__dart_deferred_initializers__,"qVP4f1WV+edO2pWM5cg/LFBgHxE=");