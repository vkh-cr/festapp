((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_260",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={
va(d,e){return B.dio(d,e)},
dio(d,e){var x=0,w=A.k(y.l),v,u,t,s,r,q,p,o,n,m
var $async$va=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=e?"event_groups!event_groups_event_child_fkey(event_parent)":"event_groups!event_groups_event_parent_fkey(event_child)"
t=$.iZ()
p=A
x=3
return A.d(t.cb("events").jR(0,"id,updated_at,occasion,title,description,start_time,end_time,max_participants,split_for_men_women,is_group_event,is_hidden,type,data,places(id, title),"+u).dv("id",d).l3(0),$async$va)
case 3:s=p.IQ(g)
r=$.dB()
q=s.b
x=r.gdn().c!=null?4:6
break
case 4:q.toString
p=s
x=7
return A.d(B.bc2(q),$async$va)
case 7:p.cy=g
p=s
x=8
return A.d(B.bc1(q),$async$va)
case 8:p.ay=g
x=5
break
case 6:q.toString
p=s
x=9
return A.d(B.aAw(q),$async$va)
case 9:p.cy=g
case 5:x=s.z!=null?10:11
break
case 10:t=t.cb("events").jR(0,"id,title,start_time,end_time,max_participants,data,event_users(count)")
q=s.z
q.toString
p=s
o=A
n=A
m=J
x=12
return A.d(t.afN("id",q).dv("is_hidden",!1),$async$va)
case 12:p.w=o.ars(n.aW(m.b7(g,new B.bbN(),y.b),!0,y.l))
x=r.gdn().c!=null?13:14
break
case 13:x=15
return A.d(B.bc5(s.w),$async$va)
case 15:case 14:case 11:t=s.CW
if(t===!0&&C.cUS())s.cx=!0
v=s
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$va,w)},
bc5(d){return B.diu(d)},
diu(d){var x=0,w=A.k(y.f),v,u,t,s,r,q
var $async$bc5=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.iZ().cb("events").jR(0,"id, event_users!inner(count)")
r=$.dB().gdn().c
s=s.dv("event_users.user",(r==null?null:r.r).a)
r=A.S(d).i("J<1,m?>")
r=A.B(new A.J(d,new B.bc6(),r),r.i("a2.E"))
q=J
x=2
return A.d(s.afN("id",r),$async$bc5)
case 2:s=q.fg(f,new B.bc7())
r=s.$ti.i("d8<1,m>")
v=A.fs(new A.d8(s,new B.bc8(),r),r.i("x.E"))
for(s=d.length,u=0;u<d.length;d.length===s||(0,A.M)(d),++u){t=d[u]
r=t.b
r.toString
r=v.p(0,r)
t.ay=r}return A.i(null,w)}})
return A.j($async$bc5,w)},
bc1(d){return B.dis(d)},
dis(d){var x=0,w=A.k(y.e),v,u,t
var $async$bc1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:u=$.iZ().cb("event_users").iD(0).dv("event",d)
t=$.dB().gdn().c
x=3
return A.d(u.dv("user",(t==null?null:t.r).a).adG(0),$async$bc1)
case 3:v=f.b>0
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$bc1,w)},
bc2(d){return B.dit(d)},
dit(d){var x=0,w=A.k(y.e),v,u,t
var $async$bc2=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:u=$.iZ().cb("event_users_saved").iD(0).dv("event",d)
t=$.dB().gdn().c
x=3
return A.d(u.dv("user",(t==null?null:t.r).a).a1f(),$async$bc2)
case 3:v=f!=null
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$bc2,w)},
bbN:function bbN(){},
bc6:function bc6(){},
bc7:function bc7(){},
bc8:function bc8(){},
aAw(d){return B.dqC(d)},
dqC(d){var x=0,w=A.k(y.e),v,u
var $async$aAw=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:u=J
x=3
return A.d(A.EM(),$async$aAw)
case 3:v=u.lC(f,d)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$aAw,w)}},C
J=c[1]
A=c[0]
B=a.updateHolder(c[103],B)
C=c[120]
var z=a.updateTypes([])
B.bbN.prototype={
$1(d){return A.IQ(d)},
$S:164}
B.bc6.prototype={
$1(d){return d.b},
$S:221}
B.bc7.prototype={
$1(d){return J.de5(J.v(J.v(J.v(d,"event_users"),0),"count"),0)},
$S:88}
B.bc8.prototype={
$1(d){return A.bv(J.v(d,"id"))},
$S:264};(function inheritance(){var x=a.inheritMany
x(A.ch,[B.bbN,B.bc6,B.bc7,B.bc8])})()
var y={l:A.E("dF"),e:A.E("y"),b:A.E("@"),f:A.E("~")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_260",e:"endPart",h:b})})($__dart_deferred_initializers__,"Ww+3DAfccHMvI9CDASeXfy+dBKg=");