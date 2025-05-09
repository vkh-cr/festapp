((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_296",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cGY(d){var x=y.u
return B.atJ(B.atJ(d,new B.b68(),x,y.w),new B.b69(),x,y.f)},
b68:function b68(){},
b69:function b69(){},
qe(d,e){var x=0,w=A.k(y.u),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$qe=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=e?"event_groups!event_groups_event_child_fkey(event_parent)":"event_groups!event_groups_event_parent_fkey(event_child)"
r=$.hl()
m=A
x=3
return A.d(r.bU("events").hA(0,"id,updated_at,occasion,title,start_time,end_time,max_participants,split_for_men_women,is_group_event,is_hidden,type,places(id, title),"+s).cD("id",d).kW(0),$async$qe)
case 3:q=m.qj(g)
p=y.u
x=4
return A.d(A.t6(C.c.j(d),A.Gl(),"events",p),$async$qe)
case 4:o=g
n=o==null
if(n)u=null
else{u=o.c
u.toString
t=q.c
t.toString
t=u.j8(t)
u=t}x=u!==!1?5:7
break
case 5:n=q.b
n.toString
m=q
l=J
x=8
return A.d(A.aoT(A.a([n],y.r)),$async$qe)
case 8:m.at=l.v(g,0).at
x=6
break
case 7:q.at=n?null:o.at
case 6:n=$.dT()
u=q.b
x=n.gdw().d!=null?9:11
break
case 9:u.toString
m=q
x=12
return A.d(B.b7C(u),$async$qe)
case 12:m.cx=g
m=q
x=13
return A.d(B.b7B(u),$async$qe)
case 13:m.ax=g
x=10
break
case 11:u.toString
m=q
x=14
return A.d(B.axA(u),$async$qe)
case 14:m.cx=g
case 10:x=q.y!=null?15:16
break
case 15:r=r.bU("events").hA(0,"id,title,start_time,end_time,max_participants,event_users(count)")
u=q.y
u.toString
m=q
l=B
k=A
j=J
x=17
return A.d(r.IH("id",u).cD("is_hidden",!1),$async$qe)
case 17:m.r=l.cGY(k.aZ(j.bX(g,new B.b7u(),y.b),!0,p))
x=n.gdw().d!=null?18:19
break
case 18:x=20
return A.d(D.aoU(q.r),$async$qe)
case 20:case 19:case 16:if(q.ch&&E.cxp())q.CW=!0
v=q
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$qe,w)},
b7B(d){var x=0,w=A.k(y.e),v
var $async$b7B=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=3
return A.d($.hl().bU("event_users").iv(0).cD("event",d).cD("user",$.dT().gdw().c.a).abT(0),$async$b7B)
case 3:v=f.b>0
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b7B,w)},
b7C(d){var x=0,w=A.k(y.e),v
var $async$b7C=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=3
return A.d($.hl().bU("event_users_saved").iv(0).cD("event",d).cD("user",$.dT().gdw().c.a).Ql(),$async$b7C)
case 3:v=f!=null
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b7C,w)},
b7u:function b7u(){},
dra(d,e,f){var x,w,v,u=A.fi(0,null,d.length,null,null)
if(u<2)return
if(u<32){A.cCG(d,e,f,0,u,d,0)
return}x=C.c.S(u,1)
w=u-x
v=C.b.eD(d,0,w)
B.ctr(d,e,f,x,u,v,0)
B.ctr(d,e,f,0,x,d,w)
B.cRn(e,f,d,w,u,v,0,w,d,0)},
ctr(d,e,f,g,h,i,j){var x,w,v,u=h-g
if(u<32){A.cCG(d,e,f,g,h,i,j)
return}x=g+C.c.S(u,1)
w=x-g
v=j+w
B.ctr(d,e,f,x,h,i,v)
B.ctr(d,e,f,g,x,d,x)
B.cRn(e,f,d,x,x+w,i,v,v+(h-x),i,j)},
cRn(d,e,f,g,h,i,j,k,l,m){var x,w,v,u=g+1,t=f[g],s=d.$1(t),r=j+1,q=i[j],p=d.$1(q)
for(;!0;m=x){x=m+1
if(e.$2(s,p)<=0){l[m]=t
if(u===h){m=x
break}w=u+1
t=f[u]
s=d.$1(t)}else{l[m]=q
if(r!==k){v=r+1
q=i[r]
p=d.$1(q)
r=v
continue}m=x+1
l[x]=t
C.b.ea(l,m,m+(h-u),f,u)
return}u=w}x=m+1
l[m]=q
C.b.ea(l,x,x+(k-r),i,r)},
atJ(d,e,f,g){var x=A.G(d,!0,f)
B.dra(x,e,A.cSO(A.cTU(),g))
return x},
axA(d){var x=0,w=A.k(y.e),v,u
var $async$axA=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:u=J
x=3
return A.d(A.zv(),$async$axA)
case 3:v=u.lK(f,d)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$axA,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[102],B)
D=c[131]
E=c[142]
var z=a.updateTypes([])
B.b68.prototype={
$1(d){var x=d.as
return x==null?"":x},
$S:1047}
B.b69.prototype={
$1(d){return d.db},
$S:1048}
B.b7u.prototype={
$1(d){return A.qj(d)},
$S:66};(function inheritance(){var x=a.inheritMany
x(A.bM,[B.b68,B.b69,B.b7u])})()
var y={f:A.B("b_"),u:A.B("dw"),r:A.B("r<l>"),w:A.B("m"),e:A.B("w"),b:A.B("@")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_296",e:"endPart",h:b})})($__dart_deferred_initializers__,"bA3cCqsID15tpYaxGffZ/NeRoDU=");