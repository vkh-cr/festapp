((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={
a_L(d,e){var x=0,w=A.q(y.l),v,u,t,s,r,q,p,o,n
var $async$a_L=A.m(function(f,g){if(f===1)return A.n(g,w)
for(;;)switch(x){case 0:u=e?"event_groups!event_groups_event_child_fkey(event_parent)":"event_groups!event_groups_event_parent_fkey(event_child)"
t=$.OE()
p=A
x=3
return A.f(t.d8("events").lz(0,"id,updated_at,occasion,title,description,start_time,end_time,max_participants,split_for_men_women,is_group_event,is_hidden,type,data,places(id, title),"+u).e8("id",d).mV(0),$async$a_L)
case 3:s=p.aeL(g)
r=$.e3()
q=s.b
x=r.gdn().c!=null?4:6
break
case 4:q.toString
p=s
x=7
return A.f(B.bQT(q),$async$a_L)
case 7:p.cy=g
p=s
x=8
return A.f(B.bQS(q),$async$a_L)
case 8:p.ay=g
x=5
break
case 6:q.toString
p=s
x=9
return A.f(B.baj(q),$async$a_L)
case 9:p.cy=g
case 5:x=s.z!=null?10:11
break
case 10:t=t.d8("events").lz(0,"id,title,start_time,end_time,max_participants,data,event_users(count)")
q=s.z
q.toString
p=A
o=A
n=J
x=12
return A.f(t.akI("id",q).e8("is_hidden",!1),$async$a_L)
case 12:q=p.b0y(o.aW(n.aY(g,new B.bQD(),y.b),!0,y.l))
s.w=q
x=r.gdn().c!=null?13:14
break
case 13:x=15
return A.f(B.bQW(q),$async$a_L)
case 15:case 14:case 11:t=s.CW
if(t===!0){t=$.d6().a
t=t==null?null:t.d
if(t==null)t=null
else{t=t.Q
t=t==null?null:t.gB(t)}t=(t==null?0:t)>0}else t=!1
if(t)s.cx=!0
v=s
x=1
break
case 1:return A.o(v,w)}})
return A.p($async$a_L,w)},
bQW(d){var x=0,w=A.q(y.f),v,u,t,s,r,q
var $async$bQW=A.m(function(e,f){if(e===1)return A.n(f,w)
for(;;)switch(x){case 0:s=$.OE().d8("events").lz(0,"id, event_users!inner(count)")
r=$.e3().gdn().c
s=s.e8("event_users.user",(r==null?null:r.r).a)
r=A.R(d).i("J<1,r?>")
r=A.D(new A.J(d,new B.bQX(),r),r.i("a2.E"))
q=J
x=2
return A.f(s.akI("id",r),$async$bQW)
case 2:s=q.eX(f,new B.bQY())
r=s.$ti.i("d7<1,r>")
v=A.fj(new A.d7(s,new B.bQZ(),r),r.i("E.E"))
for(s=d.length,u=0;u<d.length;d.length===s||(0,A.O)(d),++u){t=d[u]
r=t.b
r.toString
r=v.p(0,r)
t.ay=r}return A.o(null,w)}})
return A.p($async$bQW,w)},
bQS(d){var x=0,w=A.q(y.e),v,u,t
var $async$bQS=A.m(function(e,f){if(e===1)return A.n(f,w)
for(;;)switch(x){case 0:u=$.OE().d8("event_users").jo(0).e8("event",d)
t=$.e3().gdn().c
x=3
return A.f(u.e8("user",(t==null?null:t.r).a).aiw(0),$async$bQS)
case 3:v=f.b>0
x=1
break
case 1:return A.o(v,w)}})
return A.p($async$bQS,w)},
bQT(d){var x=0,w=A.q(y.e),v,u,t
var $async$bQT=A.m(function(e,f){if(e===1)return A.n(f,w)
for(;;)switch(x){case 0:u=$.OE().d8("event_users_saved").jo(0).e8("event",d)
t=$.e3().gdn().c
x=3
return A.f(u.e8("user",(t==null?null:t.r).a).LQ(),$async$bQT)
case 3:v=f!=null
x=1
break
case 1:return A.o(v,w)}})
return A.p($async$bQT,w)},
bQD:function bQD(){},
bQX:function bQX(){},
bQY:function bQY(){},
bQZ:function bQZ(){},
baj(d){var x=0,w=A.q(y.e),v,u
var $async$baj=A.m(function(e,f){if(e===1)return A.n(f,w)
for(;;)switch(x){case 0:u=J
x=3
return A.f(A.aan(),$async$baj)
case 3:v=u.QG(f,d)
x=1
break
case 1:return A.o(v,w)}})
return A.p($async$baj,w)}}
J=c[1]
A=c[0]
B=a.updateHolder(c[110],B)
var z=a.updateTypes([])
B.bQD.prototype={
$1(d){return A.aeL(d)},
$S:308}
B.bQX.prototype={
$1(d){return d.b},
$S:292}
B.bQY.prototype={
$1(d){return J.eFR(J.y(J.y(J.y(d,"event_users"),0),"count"),0)},
$S:75}
B.bQZ.prototype={
$1(d){return A.bO(J.y(d,"id"))},
$S:318};(function inheritance(){var x=a.inheritMany
x(A.ck,[B.bQD,B.bQX,B.bQY,B.bQZ])})()
var y={l:A.L("dZ"),e:A.L("C"),b:A.L("@"),f:A.L("~")}};
(a=>{a["8OnhIZNIYIbYcTjvN/08C+TcIUE="]=a.current})($__dart_deferred_initializers__);