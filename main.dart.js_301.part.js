((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_301",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cw4(d){var x=y.u
return B.ara(B.ara(d,new B.b2y(),x,y.w),new B.b2z(),x,y.f)},
b2y:function b2y(){},
b2z:function b2z(){},
pM(d,e){var x=0,w=A.k(y.u),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$pM=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=e?"event_groups!event_groups_event_child_fkey(event_parent)":"event_groups!event_groups_event_parent_fkey(event_child)"
r=$.h9()
m=A
x=3
return A.c(r.bA("events").hh(0,"id,updated_at,title,start_time,end_time,max_participants,split_for_men_women,is_group_event,is_hidden,type,places(id, title),"+s).cm("id",d).lq(0),$async$pM)
case 3:q=m.r0(g)
p=y.u
x=4
return A.c(A.oV(C.c.j(d),A.Bk(),"events",p),$async$pM)
case 4:o=g
n=o==null
if(n)u=null
else{u=o.c
u.toString
t=q.c
t.toString
t=u.iy(t)
u=t}x=u!==!1?5:7
break
case 5:n=q.b
n.toString
m=q
l=J
x=8
return A.c(A.ams(A.a([n],y.r)),$async$pM)
case 8:m.at=l.v(g,0).at
x=6
break
case 7:q.at=n?null:o.at
case 6:n=$.dY()
u=q.b
x=n.gdE().d!=null?9:11
break
case 9:u.toString
m=q
x=12
return A.c(B.b3F(u),$async$pM)
case 12:m.cx=g
m=q
x=13
return A.c(B.b3E(u),$async$pM)
case 13:m.ax=g
x=10
break
case 11:u.toString
m=q
x=14
return A.c(B.av7(u),$async$pM)
case 14:m.cx=g
case 10:x=q.y!=null?15:16
break
case 15:r=r.bA("events").hh(0,"id,title,start_time,end_time,max_participants,event_users(count)")
u=q.y
u.toString
m=q
l=B
k=A
j=J
x=17
return A.c(r.x9("id",u).cm("is_hidden",!1),$async$pM)
case 17:m.r=l.cw4(k.b0(j.c7(g,new B.b3x(),y.b),!0,p))
x=n.gdE().d!=null?18:19
break
case 18:x=20
return A.c(D.amt(q.r),$async$pM)
case 20:case 19:case 16:if(q.ch&&E.cmY())q.CW=!0
v=q
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$pM,w)},
b3E(d){var x=0,w=A.k(y.e),v
var $async$b3E=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=3
return A.c($.h9().bA("event_users").im(0).cm("event",d).cm("user",$.dY().gdE().c.a).a9G(0),$async$b3E)
case 3:v=f.b>0
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b3E,w)},
b3F(d){var x=0,w=A.k(y.e),v
var $async$b3F=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=3
return A.c($.h9().bA("event_users_saved").im(0).cm("event",d).cm("user",$.dY().gdE().c.a).Pn(),$async$b3F)
case 3:v=f!=null
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b3F,w)},
b3x:function b3x(){},
dda(d,e,f){var x,w,v,u=A.f1(0,null,d.length,null,null)
if(u<2)return
if(u<32){A.crW(d,e,f,0,u,d,0)
return}x=C.c.R(u,1)
w=u-x
v=C.b.f7(d,0,w)
B.cj7(d,e,f,x,u,v,0)
B.cj7(d,e,f,0,x,d,w)
B.cFW(e,f,d,w,u,v,0,w,d,0)},
cj7(d,e,f,g,h,i,j){var x,w,v,u=h-g
if(u<32){A.crW(d,e,f,g,h,i,j)
return}x=g+C.c.R(u,1)
w=x-g
v=j+w
B.cj7(d,e,f,x,h,i,v)
B.cj7(d,e,f,g,x,d,x)
B.cFW(e,f,d,x,x+w,i,v,v+(h-x),i,j)},
cFW(d,e,f,g,h,i,j,k,l,m){var x,w,v,u=g+1,t=f[g],s=d.$1(t),r=j+1,q=i[j],p=d.$1(q)
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
C.b.dM(l,m,m+(h-u),f,u)
return}u=w}x=m+1
l[m]=q
C.b.dM(l,x,x+(k-r),i,r)},
ara(d,e,f,g){var x=A.H(d,!0,f)
B.dda(x,e,A.cHm(A.cIm(),g))
return x},
av7(d){var x=0,w=A.k(y.e),v,u
var $async$av7=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:u=J
x=3
return A.c(A.I3(),$async$av7)
case 3:v=u.lE(f,d)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$av7,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[97],B)
D=c[132]
E=c[141]
var z=a.updateTypes([])
B.b2y.prototype={
$1(d){var x=d.as
return x==null?"":x},
$S:974}
B.b2z.prototype={
$1(d){return d.cy},
$S:975}
B.b3x.prototype={
$1(d){return A.r0(d)},
$S:57};(function inheritance(){var x=a.inheritMany
x(A.bB,[B.b2y,B.b2z,B.b3x])})()
var y={f:A.z("aV"),u:A.z("dB"),r:A.z("q<r>"),w:A.z("e"),e:A.z("x"),b:A.z("@")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_301",e:"endPart",h:b})})($__dart_deferred_initializers__,"maAltwgSJu0XtAmP7I0bMmpiBLU=");