((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_259",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={
v0(d,e){return B.dg3(d,e)},
dg3(d,e){var x=0,w=A.l(y.l),v,u,t,s,r,q,p,o,n,m
var $async$v0=A.f(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=e?"event_groups!event_groups_event_child_fkey(event_parent)":"event_groups!event_groups_event_parent_fkey(event_child)"
t=$.iT()
p=A
x=3
return A.d(t.c7("events").j7(0,"id,updated_at,occasion,title,description,start_time,end_time,max_participants,split_for_men_women,is_group_event,is_hidden,type,data,places(id, title),"+u).dm("id",d).l1(0),$async$v0)
case 3:s=p.II(g)
r=$.dE()
q=s.b
x=r.gds().c!=null?4:6
break
case 4:q.toString
p=s
x=7
return A.d(B.bbj(q),$async$v0)
case 7:p.cy=g
p=s
x=8
return A.d(B.bbi(q),$async$v0)
case 8:p.ay=g
x=5
break
case 6:q.toString
p=s
x=9
return A.d(B.aA3(q),$async$v0)
case 9:p.cy=g
case 5:x=s.z!=null?10:11
break
case 10:t=t.c7("events").j7(0,"id,title,start_time,end_time,max_participants,data,event_users(count)")
q=s.z
q.toString
p=s
o=A
n=A
m=J
x=12
return A.d(t.aft("id",q).dm("is_hidden",!1),$async$v0)
case 12:p.w=o.ar2(n.aV(m.bf(g,new B.bb3(),y.b),!0,y.l))
x=r.gds().c!=null?13:14
break
case 13:x=15
return A.d(B.bbm(s.w),$async$v0)
case 15:case 14:case 11:t=s.CW
if(t===!0&&C.cSM())s.cx=!0
v=s
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$v0,w)},
bbm(d){return B.dg9(d)},
dg9(d){var x=0,w=A.l(y.f),v,u,t,s,r,q
var $async$bbm=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.iT().c7("events").j7(0,"id, event_users!inner(count)")
r=$.dE().gds().c
s=s.dm("event_users.user",(r==null?null:r.r).a)
r=A.U(d).i("J<1,m?>")
r=A.B(new A.J(d,new B.bbn(),r),r.i("a2.E"))
q=J
x=2
return A.d(s.aft("id",r),$async$bbm)
case 2:s=q.eQ(f,new B.bbo())
r=s.$ti.i("d7<1,m>")
v=A.fy(new A.d7(s,new B.bbp(),r),r.i("w.E"))
for(s=d.length,u=0;u<d.length;d.length===s||(0,A.M)(d),++u){t=d[u]
r=t.b
r.toString
r=v.p(0,r)
t.ay=r}return A.j(null,w)}})
return A.k($async$bbm,w)},
bbi(d){return B.dg7(d)},
dg7(d){var x=0,w=A.l(y.e),v,u,t
var $async$bbi=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=$.iT().c7("event_users").iC(0).dm("event",d)
t=$.dE().gds().c
x=3
return A.d(u.dm("user",(t==null?null:t.r).a).adl(0),$async$bbi)
case 3:v=f.b>0
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbi,w)},
bbj(d){return B.dg8(d)},
dg8(d){var x=0,w=A.l(y.e),v,u,t
var $async$bbj=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=$.iT().c7("event_users_saved").iC(0).dm("event",d)
t=$.dE().gds().c
x=3
return A.d(u.dm("user",(t==null?null:t.r).a).Re(),$async$bbj)
case 3:v=f!=null
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbj,w)},
bb3:function bb3(){},
bbn:function bbn(){},
bbo:function bbo(){},
bbp:function bbp(){},
aA3(d){return B.do5(d)},
do5(d){var x=0,w=A.l(y.e),v,u
var $async$aA3=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=J
x=3
return A.d(A.EH(),$async$aA3)
case 3:v=u.lx(f,d)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$aA3,w)}},C
J=c[1]
A=c[0]
B=a.updateHolder(c[103],B)
C=c[120]
var z=a.updateTypes([])
B.bb3.prototype={
$1(d){return A.II(d)},
$S:181}
B.bbn.prototype={
$1(d){return d.b},
$S:216}
B.bbo.prototype={
$1(d){return J.dbR(J.v(J.v(J.v(d,"event_users"),0),"count"),0)},
$S:89}
B.bbp.prototype={
$1(d){return A.bt(J.v(d,"id"))},
$S:187};(function inheritance(){var x=a.inheritMany
x(A.ce,[B.bb3,B.bbn,B.bbo,B.bbp])})()
var y={l:A.E("dF"),e:A.E("y"),b:A.E("@"),f:A.E("~")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_259",e:"endPart",h:b})})($__dart_deferred_initializers__,"uZ8QouHMYlqx8vpS8fdIbdtPS+w=");