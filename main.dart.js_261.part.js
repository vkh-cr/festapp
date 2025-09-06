((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={
vN(d,e){var x=0,w=A.l(y.l),v,u,t,s,r,q,p,o,n
var $async$vN=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=e?"event_groups!event_groups_event_child_fkey(event_parent)":"event_groups!event_groups_event_parent_fkey(event_child)"
t=$.jj()
p=A
x=3
return A.d(t.co("events").kB(0,"id,updated_at,occasion,title,description,start_time,end_time,max_participants,split_for_men_women,is_group_event,is_hidden,type,data,places(id, title),"+u).dR("id",d).lE(0),$async$vN)
case 3:s=p.JS(g)
r=$.e0()
q=s.b
x=r.gdU().c!=null?4:6
break
case 4:q.toString
p=s
x=7
return A.d(B.bgJ(q),$async$vN)
case 7:p.cy=g
p=s
x=8
return A.d(B.bgI(q),$async$vN)
case 8:p.ay=g
x=5
break
case 6:q.toString
p=s
x=9
return A.d(B.aDd(q),$async$vN)
case 9:p.cy=g
case 5:x=s.z!=null?10:11
break
case 10:t=t.co("events").kB(0,"id,title,start_time,end_time,max_participants,data,event_users(count)")
q=s.z
q.toString
p=A
o=A
n=J
x=12
return A.d(t.ahl("id",q).dR("is_hidden",!1),$async$vN)
case 12:q=p.atQ(o.aO(n.aT(g,new B.bgt(),y.b),!0,y.l))
s.w=q
x=r.gdU().c!=null?13:14
break
case 13:x=15
return A.d(B.bgM(q),$async$vN)
case 15:case 14:case 11:t=s.CW
if(t===!0){t=$.eo().a
t=t==null?null:t.d
if(t==null)t=null
else{t=t.Q
t=t==null?null:t.gA(t)}t=(t==null?0:t)>0}else t=!1
if(t)s.cx=!0
v=s
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$vN,w)},
bgM(d){var x=0,w=A.l(y.f),v,u,t,s,r,q
var $async$bgM=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.jj().co("events").kB(0,"id, event_users!inner(count)")
r=$.e0().gdU().c
s=s.dR("event_users.user",(r==null?null:r.r).a)
r=A.O(d).i("G<1,m?>")
r=A.A(new A.G(d,new B.bgN(),r),r.i("a_.E"))
q=J
x=2
return A.d(s.ahl("id",r),$async$bgM)
case 2:s=q.f2(f,new B.bgO())
r=s.$ti.i("d8<1,m>")
v=A.fo(new A.d8(s,new B.bgP(),r),r.i("x.E"))
for(s=d.length,u=0;u<d.length;d.length===s||(0,A.K)(d),++u){t=d[u]
r=t.b
r.toString
r=v.p(0,r)
t.ay=r}return A.j(null,w)}})
return A.k($async$bgM,w)},
bgI(d){var x=0,w=A.l(y.e),v,u,t
var $async$bgI=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=$.jj().co("event_users").iH(0).dR("event",d)
t=$.e0().gdU().c
x=3
return A.d(u.dR("user",(t==null?null:t.r).a).afd(0),$async$bgI)
case 3:v=f.b>0
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bgI,w)},
bgJ(d){var x=0,w=A.l(y.e),v,u,t
var $async$bgJ=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=$.jj().co("event_users_saved").iH(0).dR("event",d)
t=$.e0().gdU().c
x=3
return A.d(u.dR("user",(t==null?null:t.r).a).a2v(),$async$bgJ)
case 3:v=f!=null
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bgJ,w)},
bgt:function bgt(){},
bgN:function bgN(){},
bgO:function bgO(){},
bgP:function bgP(){},
aDd(d){var x=0,w=A.l(y.e),v,u
var $async$aDd=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=J
x=3
return A.d(A.FL(),$async$aDd)
case 3:v=u.m3(f,d)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$aDd,w)}}
J=c[1]
A=c[0]
B=a.updateHolder(c[103],B)
var z=a.updateTypes([])
B.bgt.prototype={
$1(d){return A.JS(d)},
$S:247}
B.bgN.prototype={
$1(d){return d.b},
$S:286}
B.bgO.prototype={
$1(d){return J.dq3(J.v(J.v(J.v(d,"event_users"),0),"count"),0)},
$S:91}
B.bgP.prototype={
$1(d){return A.bA(J.v(d,"id"))},
$S:288};(function inheritance(){var x=a.inheritMany
x(A.cj,[B.bgt,B.bgN,B.bgO,B.bgP])})()
var y={l:A.I("dK"),e:A.I("y"),b:A.I("@"),f:A.I("~")}};
(a=>{a["3FdgWDiQFrKZylv9E/oq2szNAhQ="]=a.current})($__dart_deferred_initializers__);