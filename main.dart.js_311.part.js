((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_311",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cwV(d){var x=y.u
return B.arc(B.arc(d,new B.b2C(),x,y.w),new B.b2D(),x,y.f)},
b2C:function b2C(){},
b2D:function b2D(){},
pN(d,e){var x=0,w=A.k(y.u),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$pN=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=e?"event_groups!event_groups_event_child_fkey(event_parent)":"event_groups!event_groups_event_parent_fkey(event_child)"
r=$.hd()
m=A
x=3
return A.c(r.bB("events").hg(0,"id,updated_at,occasion,title,start_time,end_time,max_participants,split_for_men_women,is_group_event,is_hidden,type,places(id, title),"+s).co("id",d).lo(0),$async$pN)
case 3:q=m.r1(g)
p=y.u
x=4
return A.c(A.oW(C.c.j(d),A.F6(),"events",p),$async$pN)
case 4:o=g
n=o==null
if(n)u=null
else{u=o.c
u.toString
t=q.c
t.toString
t=u.iz(t)
u=t}x=u!==!1?5:7
break
case 5:n=q.b
n.toString
m=q
l=J
x=8
return A.c(A.amv(A.a([n],y.r)),$async$pN)
case 8:m.at=l.v(g,0).at
x=6
break
case 7:q.at=n?null:o.at
case 6:n=$.dZ()
u=q.b
x=n.gdD().d!=null?9:11
break
case 9:u.toString
m=q
x=12
return A.c(B.b3J(u),$async$pN)
case 12:m.cx=g
m=q
x=13
return A.c(B.b3I(u),$async$pN)
case 13:m.ax=g
x=10
break
case 11:u.toString
m=q
x=14
return A.c(B.av8(u),$async$pN)
case 14:m.cx=g
case 10:x=q.y!=null?15:16
break
case 15:r=r.bB("events").hg(0,"id,title,start_time,end_time,max_participants,event_users(count)")
u=q.y
u.toString
m=q
l=B
k=A
j=J
x=17
return A.c(r.x7("id",u).co("is_hidden",!1),$async$pN)
case 17:m.r=l.cwV(k.b8(j.c5(g,new B.b3B(),y.b),!0,p))
x=n.gdD().d!=null?18:19
break
case 18:x=20
return A.c(D.amw(q.r),$async$pN)
case 20:case 19:case 16:if(q.ch&&E.cnI())q.CW=!0
v=q
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$pN,w)},
b3I(d){var x=0,w=A.k(y.e),v
var $async$b3I=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=3
return A.c($.hd().bB("event_users").io(0).co("event",d).co("user",$.dZ().gdD().c.a).a9B(0),$async$b3I)
case 3:v=f.b>0
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b3I,w)},
b3J(d){var x=0,w=A.k(y.e),v
var $async$b3J=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=3
return A.c($.hd().bB("event_users_saved").io(0).co("event",d).co("user",$.dZ().gdD().c.a).Pi(),$async$b3J)
case 3:v=f!=null
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b3J,w)},
b3B:function b3B(){},
ddF(d,e,f){var x,w,v,u=A.f9(0,null,d.length,null,null)
if(u<2)return
if(u<32){A.csM(d,e,f,0,u,d,0)
return}x=C.c.S(u,1)
w=u-x
v=C.b.f6(d,0,w)
B.cjU(d,e,f,x,u,v,0)
B.cjU(d,e,f,0,x,d,w)
B.cGO(e,f,d,w,u,v,0,w,d,0)},
cjU(d,e,f,g,h,i,j){var x,w,v,u=h-g
if(u<32){A.csM(d,e,f,g,h,i,j)
return}x=g+C.c.S(u,1)
w=x-g
v=j+w
B.cjU(d,e,f,x,h,i,v)
B.cjU(d,e,f,g,x,d,x)
B.cGO(e,f,d,x,x+w,i,v,v+(h-x),i,j)},
cGO(d,e,f,g,h,i,j,k,l,m){var x,w,v,u=g+1,t=f[g],s=d.$1(t),r=j+1,q=i[j],p=d.$1(q)
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
C.b.e3(l,m,m+(h-u),f,u)
return}u=w}x=m+1
l[m]=q
C.b.e3(l,x,x+(k-r),i,r)},
arc(d,e,f,g){var x=A.H(d,!0,f)
B.ddF(x,e,A.cId(A.cJf(),g))
return x},
av8(d){var x=0,w=A.k(y.e),v,u
var $async$av8=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:u=J
x=3
return A.c(A.I3(),$async$av8)
case 3:v=u.lH(f,d)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$av8,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[95],B)
D=c[130]
E=c[139]
var z=a.updateTypes([])
B.b2C.prototype={
$1(d){var x=d.as
return x==null?"":x},
$S:970}
B.b2D.prototype={
$1(d){return d.db},
$S:971}
B.b3B.prototype={
$1(d){return A.r1(d)},
$S:56};(function inheritance(){var x=a.inheritMany
x(A.bC,[B.b2C,B.b2D,B.b3B])})()
var y={f:A.z("aV"),u:A.z("dC"),r:A.z("q<t>"),w:A.z("e"),e:A.z("x"),b:A.z("@")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_311",e:"endPart",h:b})})($__dart_deferred_initializers__,"B9WoWyA23BK33hi5Nv3R+KWNW1M=");