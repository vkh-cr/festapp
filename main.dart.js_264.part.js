((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={
wh(d,e){var x=0,w=A.m(y.l),v,u,t,s,r,q,p,o,n
var $async$wh=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:u=e?"event_groups!event_groups_event_child_fkey(event_parent)":"event_groups!event_groups_event_parent_fkey(event_child)"
t=$.jm()
p=A
x=3
return A.d(t.cs("events").kR(0,"id,updated_at,occasion,title,description,start_time,end_time,max_participants,split_for_men_women,is_group_event,is_hidden,type,data,places(id, title),"+u).e0("id",d).ml(0),$async$wh)
case 3:s=p.KT(g)
r=$.ea()
q=s.b
x=r.ge4().c!=null?4:6
break
case 4:q.toString
p=s
x=7
return A.d(B.bjZ(q),$async$wh)
case 7:p.cy=g
p=s
x=8
return A.d(B.bjY(q),$async$wh)
case 8:p.ay=g
x=5
break
case 6:q.toString
p=s
x=9
return A.d(B.aFv(q),$async$wh)
case 9:p.cy=g
case 5:x=s.z!=null?10:11
break
case 10:t=t.cs("events").kR(0,"id,title,start_time,end_time,max_participants,data,event_users(count)")
q=s.z
q.toString
p=A
o=A
n=J
x=12
return A.d(t.ajy("id",q).e0("is_hidden",!1),$async$wh)
case 12:q=p.aw0(o.aN(n.b2(g,new B.bjJ(),y.b),!0,y.l))
s.w=q
x=r.ge4().c!=null?13:14
break
case 13:x=15
return A.d(B.bk1(q),$async$wh)
case 15:case 14:case 11:t=s.CW
if(t===!0){t=$.dX().a
t=t==null?null:t.d
if(t==null)t=null
else{t=t.Q
t=t==null?null:t.gB(t)}t=(t==null?0:t)>0}else t=!1
if(t)s.cx=!0
v=s
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$wh,w)},
bk1(d){var x=0,w=A.m(y.f),v,u,t,s,r,q
var $async$bk1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:s=$.jm().cs("events").kR(0,"id, event_users!inner(count)")
r=$.ea().ge4().c
s=s.e0("event_users.user",(r==null?null:r.r).a)
r=A.O(d).i("G<1,n?>")
r=A.C(new A.G(d,new B.bk2(),r),r.i("a0.E"))
q=J
x=2
return A.d(s.ajy("id",r),$async$bk1)
case 2:s=q.fb(f,new B.bk3())
r=s.$ti.i("df<1,n>")
v=A.fg(new A.df(s,new B.bk4(),r),r.i("B.E"))
for(s=d.length,u=0;u<d.length;d.length===s||(0,A.L)(d),++u){t=d[u]
r=t.b
r.toString
r=v.p(0,r)
t.ay=r}return A.k(null,w)}})
return A.l($async$bk1,w)},
bjY(d){var x=0,w=A.m(y.e),v,u,t
var $async$bjY=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:u=$.jm().cs("event_users").je(0).e0("event",d)
t=$.ea().ge4().c
x=3
return A.d(u.e0("user",(t==null?null:t.r).a).ahk(0),$async$bjY)
case 3:v=f.b>0
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bjY,w)},
bjZ(d){var x=0,w=A.m(y.e),v,u,t
var $async$bjZ=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:u=$.jm().cs("event_users_saved").je(0).e0("event",d)
t=$.ea().ge4().c
x=3
return A.d(u.e0("user",(t==null?null:t.r).a).a43(),$async$bjZ)
case 3:v=f!=null
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bjZ,w)},
bjJ:function bjJ(){},
bk2:function bk2(){},
bk3:function bk3(){},
bk4:function bk4(){},
aFv(d){var x=0,w=A.m(y.e),v,u
var $async$aFv=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:u=J
x=3
return A.d(A.Gy(),$async$aFv)
case 3:v=u.mn(f,d)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$aFv,w)}}
J=c[1]
A=c[0]
B=a.updateHolder(c[103],B)
var z=a.updateTypes([])
B.bjJ.prototype={
$1(d){return A.KT(d)},
$S:305}
B.bk2.prototype={
$1(d){return d.b},
$S:296}
B.bk3.prototype={
$1(d){return J.dzd(J.u(J.u(J.u(d,"event_users"),0),"count"),0)},
$S:80}
B.bk4.prototype={
$1(d){return A.bG(J.u(d,"id"))},
$S:309};(function inheritance(){var x=a.inheritMany
x(A.co,[B.bjJ,B.bk2,B.bk3,B.bk4])})()
var y={l:A.J("dP"),e:A.J("x"),b:A.J("@"),f:A.J("~")}};
(a=>{a["cp352vwJCWrRm38r6hceTClcC3U="]=a.current})($__dart_deferred_initializers__);