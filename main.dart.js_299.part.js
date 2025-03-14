((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_299",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cvW(d){var x=y.u
return B.ar5(B.ar5(d,new B.b2t(),x,y.w),new B.b2u(),x,y.f)},
b2t:function b2t(){},
b2u:function b2u(){},
pL(d,e){var x=0,w=A.k(y.u),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$pL=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=e?"event_groups!event_groups_event_child_fkey(event_parent)":"event_groups!event_groups_event_parent_fkey(event_child)"
r=$.ha()
m=A
x=3
return A.c(r.bA("events").hh(0,"id,updated_at,title,start_time,end_time,max_participants,split_for_men_women,is_group_event,is_hidden,type,places(id, title),"+s).cg("id",d).lq(0),$async$pL)
case 3:q=m.r0(g)
p=y.u
x=4
return A.c(A.oV(C.c.j(d),A.Bj(),"events",p),$async$pL)
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
return A.c(A.aml(A.a([n],y.r)),$async$pL)
case 8:m.at=l.v(g,0).at
x=6
break
case 7:q.at=n?null:o.at
case 6:n=$.dX()
u=q.b
x=n.gdE().d!=null?9:11
break
case 9:u.toString
m=q
x=12
return A.c(B.b3A(u),$async$pL)
case 12:m.cx=g
m=q
x=13
return A.c(B.b3z(u),$async$pL)
case 13:m.ax=g
x=10
break
case 11:u.toString
m=q
x=14
return A.c(B.av2(u),$async$pL)
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
return A.c(r.x9("id",u).cg("is_hidden",!1),$async$pL)
case 17:m.r=l.cvW(k.b0(j.c7(g,new B.b3s(),y.b),!0,p))
x=n.gdE().d!=null?18:19
break
case 18:x=20
return A.c(D.amm(q.r),$async$pL)
case 20:case 19:case 16:if(q.ch&&E.cmQ())q.CW=!0
v=q
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$pL,w)},
b3z(d){var x=0,w=A.k(y.e),v
var $async$b3z=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=3
return A.c($.ha().bA("event_users").ib(0).cg("event",d).cg("user",$.dX().gdE().c.a).a9E(0),$async$b3z)
case 3:v=f.b>0
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b3z,w)},
b3A(d){var x=0,w=A.k(y.e),v
var $async$b3A=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=3
return A.c($.ha().bA("event_users_saved").ib(0).cg("event",d).cg("user",$.dX().gdE().c.a).Pl(),$async$b3A)
case 3:v=f!=null
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b3A,w)},
b3s:function b3s(){},
dd4(d,e,f){var x,w,v,u=A.f1(0,null,d.length,null,null)
if(u<2)return
if(u<32){A.crO(d,e,f,0,u,d,0)
return}x=C.c.R(u,1)
w=u-x
v=C.b.f7(d,0,w)
B.cj_(d,e,f,x,u,v,0)
B.cj_(d,e,f,0,x,d,w)
B.cFN(e,f,d,w,u,v,0,w,d,0)},
cj_(d,e,f,g,h,i,j){var x,w,v,u=h-g
if(u<32){A.crO(d,e,f,g,h,i,j)
return}x=g+C.c.R(u,1)
w=x-g
v=j+w
B.cj_(d,e,f,x,h,i,v)
B.cj_(d,e,f,g,x,d,x)
B.cFN(e,f,d,x,x+w,i,v,v+(h-x),i,j)},
cFN(d,e,f,g,h,i,j,k,l,m){var x,w,v,u=g+1,t=f[g],s=d.$1(t),r=j+1,q=i[j],p=d.$1(q)
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
ar5(d,e,f,g){var x=A.H(d,!0,f)
B.dd4(x,e,A.cHd(A.cId(),g))
return x},
av2(d){var x=0,w=A.k(y.e),v,u
var $async$av2=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:u=J
x=3
return A.c(A.I2(),$async$av2)
case 3:v=u.lE(f,d)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$av2,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[97],B)
D=c[131]
E=c[140]
var z=a.updateTypes([])
B.b2t.prototype={
$1(d){var x=d.as
return x==null?"":x},
$S:973}
B.b2u.prototype={
$1(d){return d.cy},
$S:974}
B.b3s.prototype={
$1(d){return A.r0(d)},
$S:60};(function inheritance(){var x=a.inheritMany
x(A.bB,[B.b2t,B.b2u,B.b3s])})()
var y={f:A.y("aV"),u:A.y("dB"),r:A.y("q<r>"),w:A.y("e"),e:A.y("x"),b:A.y("@")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_299",e:"endPart",h:b})})($__dart_deferred_initializers__,"laFMnnFbe91jhO8X8Ih/Of+LS7I=");