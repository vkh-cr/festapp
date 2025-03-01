((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_296",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
ctU(d){var x=y.u
return B.aqI(B.aqI(d,new B.b1D(),x,y.w),new B.b1E(),x,y.f)},
b1D:function b1D(){},
b1E:function b1E(){},
pI(d,e){var x=0,w=A.k(y.u),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$pI=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=e?"event_groups!event_groups_event_child_fkey(event_parent)":"event_groups!event_groups_event_parent_fkey(event_child)"
r=$.h3()
m=A
x=3
return A.c(r.bY("events").hg(0,"id,updated_at,title,start_time,end_time,max_participants,split_for_men_women,is_group_event,is_hidden,type,places(id, title),"+s).cn("id",d).lm(0),$async$pI)
case 3:q=m.qZ(g)
p=y.u
x=4
return A.c(A.oS(C.c.j(d),A.Bj(),"events",p),$async$pI)
case 4:o=g
n=o==null
if(n)u=null
else{u=o.c
u.toString
t=q.c
t.toString
t=u.iQ(t)
u=t}x=u!==!1?5:7
break
case 5:n=q.b
n.toString
m=q
l=J
x=8
return A.c(A.am_(A.a([n],y.r)),$async$pI)
case 8:m.at=l.v(g,0).at
x=6
break
case 7:q.at=n?null:o.at
case 6:n=$.dW()
u=q.b
x=n.gdF().d!=null?9:11
break
case 9:u.toString
m=q
x=12
return A.c(B.b2I(u),$async$pI)
case 12:m.cx=g
m=q
x=13
return A.c(B.b2H(u),$async$pI)
case 13:m.ax=g
x=10
break
case 11:u.toString
m=q
x=14
return A.c(B.auE(u),$async$pI)
case 14:m.cx=g
case 10:x=q.y!=null?15:16
break
case 15:r=r.bY("events").hg(0,"id,title,start_time,end_time,max_participants,event_users(count)")
u=q.y
u.toString
m=q
l=B
k=A
j=J
x=17
return A.c(r.Dj("id",u).cn("is_hidden",!1),$async$pI)
case 17:m.r=l.ctU(k.b0(j.c7(g,new B.b2A(),y.b),!0,p))
x=n.gdF().d!=null?18:19
break
case 18:x=20
return A.c(D.am0(q.r),$async$pI)
case 20:case 19:case 16:if(q.ch&&E.ckP())q.CW=!0
v=q
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$pI,w)},
b2H(d){var x=0,w=A.k(y.e),v
var $async$b2H=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=3
return A.c($.h3().bY("event_users").iC(0).cn("event",d).cn("user",$.dW().gdF().c.a).a9w(0),$async$b2H)
case 3:v=f.b>0
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b2H,w)},
b2I(d){var x=0,w=A.k(y.e),v
var $async$b2I=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=3
return A.c($.h3().bY("event_users_saved").iC(0).cn("event",d).cn("user",$.dW().gdF().c.a).Po(),$async$b2I)
case 3:v=f!=null
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b2I,w)},
b2A:function b2A(){},
daS(d,e,f){var x,w,v,u=A.eX(0,null,d.length,null,null)
if(u<2)return
if(u<32){A.cpM(d,e,f,0,u,d,0)
return}x=C.c.R(u,1)
w=u-x
v=C.b.f4(d,0,w)
B.cgU(d,e,f,x,u,v,0)
B.cgU(d,e,f,0,x,d,w)
B.cDJ(e,f,d,w,u,v,0,w,d,0)},
cgU(d,e,f,g,h,i,j){var x,w,v,u=h-g
if(u<32){A.cpM(d,e,f,g,h,i,j)
return}x=g+C.c.R(u,1)
w=x-g
v=j+w
B.cgU(d,e,f,x,h,i,v)
B.cgU(d,e,f,g,x,d,x)
B.cDJ(e,f,d,x,x+w,i,v,v+(h-x),i,j)},
cDJ(d,e,f,g,h,i,j,k,l,m){var x,w,v,u=g+1,t=f[g],s=d.$1(t),r=j+1,q=i[j],p=d.$1(q)
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
aqI(d,e,f,g){var x=A.H(d,!0,f)
B.daS(x,e,A.cFb(A.cGb(),g))
return x},
auE(d){var x=0,w=A.k(y.e),v,u
var $async$auE=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:u=J
x=3
return A.c(A.HW(),$async$auE)
case 3:v=u.mr(f,d)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$auE,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[96],B)
D=c[130]
E=c[138]
var z=a.updateTypes([])
B.b1D.prototype={
$1(d){var x=d.as
return x==null?"":x},
$S:967}
B.b1E.prototype={
$1(d){return d.cy},
$S:968}
B.b2A.prototype={
$1(d){return A.qZ(d)},
$S:56};(function inheritance(){var x=a.inheritMany
x(A.bC,[B.b1D,B.b1E,B.b2A])})()
var y={f:A.y("b8"),u:A.y("dy"),r:A.y("q<r>"),w:A.y("e"),e:A.y("x"),b:A.y("@")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_296",e:"endPart",h:b})})($__dart_deferred_initializers__,"e0sdqaHMuaIkrT1Npv7vqEfaE8g=");