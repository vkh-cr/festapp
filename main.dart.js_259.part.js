((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_259",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={
uX(d,e){return B.deX(d,e)},
deX(d,e){var x=0,w=A.m(y.l),v,u,t,s,r,q,p,o,n,m
var $async$uX=A.h(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:u=e?"event_groups!event_groups_event_child_fkey(event_parent)":"event_groups!event_groups_event_parent_fkey(event_child)"
t=$.iR()
p=A
x=3
return A.d(t.c8("events").j7(0,"id,updated_at,occasion,title,description,start_time,end_time,max_participants,split_for_men_women,is_group_event,is_hidden,type,data,places(id, title),"+u).dl("id",d).l0(0),$async$uX)
case 3:s=p.IG(g)
r=$.dD()
q=s.b
x=r.gds().c!=null?4:6
break
case 4:q.toString
p=s
x=7
return A.d(B.bb2(q),$async$uX)
case 7:p.cy=g
p=s
x=8
return A.d(B.bb1(q),$async$uX)
case 8:p.ay=g
x=5
break
case 6:q.toString
p=s
x=9
return A.d(B.azT(q),$async$uX)
case 9:p.cy=g
case 5:x=s.z!=null?10:11
break
case 10:t=t.c8("events").j7(0,"id,title,start_time,end_time,max_participants,data,event_users(count)")
q=s.z
q.toString
p=s
o=A
n=A
m=J
x=12
return A.d(t.afo("id",q).dl("is_hidden",!1),$async$uX)
case 12:p.w=o.aqU(n.aX(m.bh(g,new B.baN(),y.b),!0,y.l))
x=r.gds().c!=null?13:14
break
case 13:x=15
return A.d(B.bb5(s.w),$async$uX)
case 15:case 14:case 11:t=s.CW
if(t===!0&&C.cRJ())s.cx=!0
v=s
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$uX,w)},
bb5(d){return B.df2(d)},
df2(d){var x=0,w=A.m(y.f),v,u,t,s,r,q
var $async$bb5=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:s=$.iR().c8("events").j7(0,"id, event_users!inner(count)")
r=$.dD().gds().c
s=s.dl("event_users.user",(r==null?null:r.r).a)
r=A.U(d).i("K<1,f?>")
r=A.C(new A.K(d,new B.bb6(),r),r.i("a3.E"))
q=J
x=2
return A.d(s.afo("id",r),$async$bb5)
case 2:s=q.fg(f,new B.bb7())
r=s.$ti.i("dd<1,f>")
v=A.fD(new A.dd(s,new B.bb8(),r),r.i("w.E"))
for(s=d.length,u=0;u<d.length;d.length===s||(0,A.M)(d),++u){t=d[u]
r=t.b
r.toString
r=v.p(0,r)
t.ay=r}return A.k(null,w)}})
return A.l($async$bb5,w)},
bb1(d){return B.df0(d)},
df0(d){var x=0,w=A.m(y.e),v,u,t
var $async$bb1=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:u=$.iR().c8("event_users").iC(0).dl("event",d)
t=$.dD().gds().c
x=3
return A.d(u.dl("user",(t==null?null:t.r).a).adg(0),$async$bb1)
case 3:v=f.b>0
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bb1,w)},
bb2(d){return B.df1(d)},
df1(d){var x=0,w=A.m(y.e),v,u,t
var $async$bb2=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:u=$.iR().c8("event_users_saved").iC(0).dl("event",d)
t=$.dD().gds().c
x=3
return A.d(u.dl("user",(t==null?null:t.r).a).Re(),$async$bb2)
case 3:v=f!=null
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bb2,w)},
baN:function baN(){},
bb6:function bb6(){},
bb7:function bb7(){},
bb8:function bb8(){},
azT(d){return B.dmS(d)},
dmS(d){var x=0,w=A.m(y.e),v,u
var $async$azT=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:u=J
x=3
return A.d(A.EE(),$async$azT)
case 3:v=u.lv(f,d)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$azT,w)}},C
J=c[1]
A=c[0]
B=a.updateHolder(c[103],B)
C=c[120]
var z=a.updateTypes([])
B.baN.prototype={
$1(d){return A.IG(d)},
$S:181}
B.bb6.prototype={
$1(d){return d.b},
$S:243}
B.bb7.prototype={
$1(d){return J.daL(J.v(J.v(J.v(d,"event_users"),0),"count"),0)},
$S:87}
B.bb8.prototype={
$1(d){return A.bs(J.v(d,"id"))},
$S:195};(function inheritance(){var x=a.inheritMany
x(A.ce,[B.baN,B.bb6,B.bb7,B.bb8])})()
var y={l:A.E("dE"),e:A.E("x"),b:A.E("@"),f:A.E("~")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_259",e:"endPart",h:b})})($__dart_deferred_initializers__,"W0tWa62wEYo4IGQIjncgIyeUuYw=");