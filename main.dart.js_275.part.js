((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_275",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
clT(d){var x=J.a2(d)
return new B.iu(x.i(d,"x"),x.i(d,"y"),x.i(d,"id"),x.i(d,"group"),x.i(d,"order_product_ticket"),x.i(d,"type"),x.i(d,"state"),x.i(d,"title"),null,x.i(d,"product"),null)},
iu:function iu(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aYQ:function aYQ(d){this.a=d},
aYR:function aYR(d){this.a=d},
aYS:function aYS(d){this.a=d},
aYT:function aYT(){},
aYU:function aYU(d){this.a=d},
aYV:function aYV(d){this.a=d},
aYP:function aYP(d){this.a=d},
aYW:function aYW(){},
aYX:function aYX(d){this.a=d},
bpL(d){var x=null
switch(d){case"ordered":return A.u("Ordered",x)
case"paid":return A.u("Paid",x)
case"sent":return A.u("Sent",x)
case"used":return A.u("Used",x)
case"storno":return A.u("Storno",x)
default:return"???"}},
cVN(d){return d+";"+B.bpL(d)},
cyI(d,e,f,g,h,i,j,k,l,m){return new B.fT(g,d,m,k,l,f,i,j,e,h)},
cyJ(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.fj(v.i(d,x)):null,s=v.i(d,w)!=null?A.fj(v.i(d,w)):null,r=v.i(d,"price")!=null?A.nN(J.at(v.i(d,"price"))):null,q=v.i(d,"state"),p=v.i(d,"data"),o=v.i(d,"occasion"),n=v.i(d,"payment_info")
return B.cyI(t,v.i(d,"currency_code"),p,u,v.i(d,"note_hidden"),o,n,r,q,s)},
fT:function fT(d,e,f,g,h,i,j,k,l,m){var _=this
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
bpM:function bpM(){},
cBw(d,e,f,g,h,i,j,k){return new B.hg(e,d,j,i,f,g)},
cBx(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.fj(v.i(d,x)):null,s=v.i(d,w)!=null?A.fj(v.i(d,w)):null,r=v.i(d,"ticket_symbol"),q=v.i(d,"state"),p=v.i(d,"occasion")
return B.cBw(t,u,v.i(d,"note"),v.i(d,"note_hidden"),p,q,r,s)},
hg:function hg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bGl:function bGl(){},
b40(d){var x=0,w=A.k(y.f),v,u
var $async$b40=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.c($.Am().e2("delete_order",A.z(["order_id",d.a],y.g,v),v),$async$b40)
case 2:u=f
v=J.a2(u)
if(!J.m(v.i(u,"code"),200))throw A.l(A.cC("Deleting order failed: "+A.o(v.i(u,"code"))+": "+A.o(v.i(u,"message"))))
return A.i(null,w)}})
return A.j($async$b40,w)},
b4g(d,e){var x=0,w=A.k(y.f),v,u,t
var $async$b4g=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.Am().e2("update_order_note_hidden",A.z(["order_id",d,"new_note_hidden",e],y.g,v),v),$async$b4g)
case 2:if(!u.m(t.v(g,"code"),200))throw A.l(A.cC("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b4g,w)},
b4w(d,e){var x=0,w=A.k(y.f),v,u,t
var $async$b4w=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.LS().e2("update_ticket_note_hidden",A.z(["ticket_id",d,"new_note_hidden",e],y.g,v),v),$async$b4w)
case 2:if(!u.m(t.v(g,"code"),200))throw A.l(A.cC("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b4w,w)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[78],B)
C=c[94]
B.iu.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
c0(){var x,w,v=this,u=A.I(y.g,y.b)
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
brV(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.e1(k,new B.aYQ(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.e1(k,new B.aYR(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.X(k)
t=u.h("dq<1,r?>")
t=A.H(new A.dq(new A.ag(k,new B.aYS(w),u.h("ag<1>")),new B.aYT(),t),!0,t.h("w.E"))
v=t}}if(v==null)s=l
else{k=A.X(v)
u=k.h("dq<1,e>")
u=new A.ag(new A.dq(new A.ag(v,new B.aYU(m),k.h("ag<1>")),new B.aYV(m),u),new B.aYW(),u.h("ag<w.E>")).c4(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:D.b.lS(k,new B.aYX(x))}k=r==null
q=k?l:r.aF4()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a01()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+A.o(k):""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+A.u("Ticket",l)+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.u("Price",l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+C.ob(d,n==null?0:n,l,0)},
gbo(d){return this.c},
gds(d){return this.w},
sGy(d){return this.as=d}}
B.fT.prototype={
c0(){var x,w=this,v=w.b
v=v==null?null:v.hZ()
x=w.c
x=x==null?null:x.hZ()
return A.z(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.g,y.b)},
qm(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k==null,i=A.aT(j?0:k)
k=A.aT(j?0:k)
j=m.d
j=A.aT(j!=null?C.ob(d,j,l,0):"")
x=m.e
if(x==null)x="ordered"
x=A.aT(x+";"+B.bpL(x))
w=m.ax
if((w==null?l:w.e)!=null){w=w.e
w.toString
w=C.ob(d,w,l,0)}else w=""
w=A.aT(w)
v=m.ax
if((v==null?l:v.f)!=null){v=v.f
v.toString
v=C.ob(d,v,l,0)}else v=""
v=A.aT(v)
u=m.ax
if((u==null?l:u.r)!=null){u=u.r
u.toString
u=C.ob(d,u,l,0)}else u=""
u=A.aT(u)
t=m.ax
s=t==null
r=s?l:t.d
r=A.aT(r==null?0:r)
if((s?l:t.w)!=null){t=A.iw("yyyy-MM-dd",l)
s=m.ax.w
s.toString
s=t.e8(s)
t=s}else t=""
t=A.aT(t)
s=A.aT(m.a01())
q=m.f
q=A.aT(q==null?l:J.v(q,"email"))
p=m.at
p=A.aT(p!=null?new A.O(p,new B.bpM(),A.X(p).h("O<1,e>")).c4(0," | "):"")
o=A.aT(m.aF4())
n=m.z
return A.ll(A.z(["id",i,"order_symbol",k,"price",j,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"data",s,"email",q,"ticket_products",p,"note",o,"note_hidden",A.aT(n==null?"":n),"orders_history",A.aT(""),"transactions",A.aT("")],y.g,y.e),!1,y.b)},
eU(){var x=0,w=A.k(y.f),v=this
var $async$eU=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(B.b40(v),$async$eU)
case 2:return A.i(null,w)}})
return A.j($async$eU,w)},
fi(){var x=0,w=A.k(y.f),v=this,u,t
var $async$fi=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.c(B.b4g(t,u),$async$fi)
case 2:return A.i(null,w)}})
return A.j($async$fi,w)},
m1(){return"Order #"+A.o(this.a)},
a01(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aF4(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbo(d){return this.a}}
B.hg.prototype={
c0(){return A.z(["state",this.e,"note_hidden",this.w],y.g,y.b)},
qm(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a
l=A.aT(l==null?0:l)
x=n.b
x=A.aT(x!=null?A.iw("yyyy-MM-dd",m).e8(x):"")
w=n.d
w=A.aT(w==null?"":w)
v=n.e
if(v==null)v="ordered"
v=A.aT(v+";"+B.bpL(v))
u=n.r
u=A.aT(u==null?"":u)
t=n.w
t=A.aT(t==null?"":t)
s=n.Q
r=s!=null
q=A.aT(r?"Order #"+A.o(s.a):"")
s=A.aT(r?s.a01():"")
r=n.z
r=A.aT(r!=null?new A.O(r,new B.bGl(),A.X(r).h("O<1,e>")).c4(0," | "):"")
p=n.y
if(p!=null){o=p.z
o=o==null?m:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aT(p)
o=n.x
return A.ll(A.z(["id",l,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"spot",p,"price",A.aT(o!=null?C.ob(d,o,m,0):"")],y.g,y.e),!1,y.b)},
eU(){var x=0,w=A.k(y.f)
var $async$eU=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:return A.i(null,w)}})
return A.j($async$eU,w)},
fi(){var x=0,w=A.k(y.f),v=this,u,t
var $async$fi=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.c(B.b4w(t,u),$async$fi)
case 2:return A.i(null,w)}})
return A.j($async$fi,w)},
m1(){var x=this.d
return x==null?J.at(this.a):x},
gbo(d){return this.a}}
var z=a.updateTypes(["x(mQ)","x(hg)","r?(mQ)","x(fT)","e(e)"])
B.aYQ.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.aYR.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.aYS.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.aYT.prototype={
$1(d){return d.d},
$S:z+2}
B.aYU.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:322}
B.aYV.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:D.b.lS(w,new B.aYP(d))}w=x==null?null:x.d
return w==null?"":w},
$S:970}
B.aYP.prototype={
$1(d){return d.a==this.a},
$S:123}
B.aYW.prototype={
$1(d){return d.length!==0},
$S:14}
B.aYX.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bpM.prototype={
$1(d){return d.m1()},
$S:231}
B.bGl.prototype={
$1(d){return d.m1()},
$S:231};(function installTearOffs(){var x=a._static_1
x(B,"cyK","cVN",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.iu,A.E)
w(A.bA,[B.aYQ,B.aYR,B.aYS,B.aYT,B.aYU,B.aYV,B.aYP,B.aYW,B.aYX,B.bpM,B.bGl])
w(A.i_,[B.fT,B.hg])})()
A.bi(b.typeUniverse,JSON.parse('{"fT":{"i_":[]},"hg":{"i_":[]}}'))
var y={e:A.y("hd"),g:A.y("e"),b:A.y("@"),f:A.y("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"dfp","LS",()=>$.hs().gmN(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_275",e:"endPart",h:b})})($__dart_deferred_initializers__,"P/cHBg5NsqHnxpvTqL0I+RKn4OY=");