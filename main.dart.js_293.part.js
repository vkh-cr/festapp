((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={
a_u(d,e){var x=0,w=A.p(y.l),v,u,t,s,r,q,p,o,n
var $async$a_u=A.l(function(f,g){if(f===1)return A.m(g,w)
for(;;)switch(x){case 0:u=e?"event_groups!event_groups_event_child_fkey(event_parent)":"event_groups!event_groups_event_parent_fkey(event_child)"
t=$.Oj()
p=A
x=3
return A.f(t.cF("events").ly(0,"id,updated_at,occasion,title,description,start_time,end_time,max_participants,split_for_men_women,is_group_event,is_hidden,type,data,places(id, title),"+u).ed("id",d).mV(0),$async$a_u)
case 3:s=p.aeg(g)
r=$.e3()
q=s.b
x=r.gdL().c!=null?4:6
break
case 4:q.toString
p=s
x=7
return A.f(B.bPQ(q),$async$a_u)
case 7:p.cy=g
p=s
x=8
return A.f(B.bPP(q),$async$a_u)
case 8:p.ay=g
x=5
break
case 6:q.toString
p=s
x=9
return A.f(B.b9E(q),$async$a_u)
case 9:p.cy=g
case 5:x=s.z!=null?10:11
break
case 10:t=t.cF("events").ly(0,"id,title,start_time,end_time,max_participants,data,event_users(count)")
q=s.z
q.toString
p=A
o=A
n=J
x=12
return A.f(t.akp("id",q).ed("is_hidden",!1),$async$a_u)
case 12:q=p.b_Z(o.aX(n.aW(g,new B.bPA(),y.b),!0,y.l))
s.w=q
x=r.gdL().c!=null?13:14
break
case 13:x=15
return A.f(B.bPT(q),$async$a_u)
case 15:case 14:case 11:t=s.CW
if(t===!0){t=$.dI().a
t=t==null?null:t.d
if(t==null)t=null
else{t=t.Q
t=t==null?null:t.gB(t)}t=(t==null?0:t)>0}else t=!1
if(t)s.cx=!0
v=s
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$a_u,w)},
bPT(d){var x=0,w=A.p(y.f),v,u,t,s,r,q
var $async$bPT=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:s=$.Oj().cF("events").ly(0,"id, event_users!inner(count)")
r=$.e3().gdL().c
s=s.ed("event_users.user",(r==null?null:r.r).a)
r=A.R(d).i("K<1,r?>")
r=A.D(new A.K(d,new B.bPU(),r),r.i("a2.E"))
q=J
x=2
return A.f(s.akp("id",r),$async$bPT)
case 2:s=q.f3(f,new B.bPV())
r=s.$ti.i("db<1,r>")
v=A.fk(new A.db(s,new B.bPW(),r),r.i("E.E"))
for(s=d.length,u=0;u<d.length;d.length===s||(0,A.O)(d),++u){t=d[u]
r=t.b
r.toString
r=v.p(0,r)
t.ay=r}return A.n(null,w)}})
return A.o($async$bPT,w)},
bPP(d){var x=0,w=A.p(y.e),v,u,t
var $async$bPP=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:u=$.Oj().cF("event_users").jn(0).ed("event",d)
t=$.e3().gdL().c
x=3
return A.f(u.ed("user",(t==null?null:t.r).a).aid(0),$async$bPP)
case 3:v=f.b>0
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$bPP,w)},
bPQ(d){var x=0,w=A.p(y.e),v,u,t
var $async$bPQ=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:u=$.Oj().cF("event_users_saved").jn(0).ed("event",d)
t=$.e3().gdL().c
x=3
return A.f(u.ed("user",(t==null?null:t.r).a).LN(),$async$bPQ)
case 3:v=f!=null
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$bPQ,w)},
bPA:function bPA(){},
bPU:function bPU(){},
bPV:function bPV(){},
bPW:function bPW(){},
b9E(d){var x=0,w=A.p(y.e),v,u
var $async$b9E=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:u=J
x=3
return A.f(A.a9Z(),$async$b9E)
case 3:v=u.Rr(f,d)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$b9E,w)}}
J=c[1]
A=c[0]
B=a.updateHolder(c[107],B)
var z=a.updateTypes([])
B.bPA.prototype={
$1(d){return A.aeg(d)},
$S:303}
B.bPU.prototype={
$1(d){return d.b},
$S:317}
B.bPV.prototype={
$1(d){return J.eD2(J.y(J.y(J.y(d,"event_users"),0),"count"),0)},
$S:84}
B.bPW.prototype={
$1(d){return A.bL(J.y(d,"id"))},
$S:284};(function inheritance(){var x=a.inheritMany
x(A.ck,[B.bPA,B.bPU,B.bPV,B.bPW])})()
var y={l:A.L("dY"),e:A.L("C"),b:A.L("@"),f:A.L("~")}};
(a=>{a["cuMxLQjRsGarOoXNjzWGP+s3oPk="]=a.current})($__dart_deferred_initializers__);