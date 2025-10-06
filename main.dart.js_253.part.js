((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={
w0(d,e){var x=0,w=A.l(y.l),v,u,t,s,r,q,p,o,n
var $async$w0=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=e?"event_groups!event_groups_event_child_fkey(event_parent)":"event_groups!event_groups_event_parent_fkey(event_child)"
t=$.ji()
p=A
x=3
return A.d(t.cn("events").kK(0,"id,updated_at,occasion,title,description,start_time,end_time,max_participants,split_for_men_women,is_group_event,is_hidden,type,data,places(id, title),"+u).dW("id",d).lP(0),$async$w0)
case 3:s=p.Kl(g)
r=$.e5()
q=s.b
x=r.ge_().c!=null?4:6
break
case 4:q.toString
p=s
x=7
return A.d(B.bhJ(q),$async$w0)
case 7:p.cy=g
p=s
x=8
return A.d(B.bhI(q),$async$w0)
case 8:p.ay=g
x=5
break
case 6:q.toString
p=s
x=9
return A.d(B.aE0(q),$async$w0)
case 9:p.cy=g
case 5:x=s.z!=null?10:11
break
case 10:t=t.cn("events").kK(0,"id,title,start_time,end_time,max_participants,data,event_users(count)")
q=s.z
q.toString
p=A
o=A
n=J
x=12
return A.d(t.ahK("id",q).dW("is_hidden",!1),$async$w0)
case 12:q=p.auH(o.aR(n.aY(g,new B.bht(),y.b),!0,y.l))
s.w=q
x=r.ge_().c!=null?13:14
break
case 13:x=15
return A.d(B.bhM(q),$async$w0)
case 15:case 14:case 11:t=s.CW
if(t===!0){t=$.ep().a
t=t==null?null:t.d
if(t==null)t=null
else{t=t.Q
t=t==null?null:t.gB(t)}t=(t==null?0:t)>0}else t=!1
if(t)s.cx=!0
v=s
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$w0,w)},
bhM(d){var x=0,w=A.l(y.f),v,u,t,s,r,q
var $async$bhM=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.ji().cn("events").kK(0,"id, event_users!inner(count)")
r=$.e5().ge_().c
s=s.dW("event_users.user",(r==null?null:r.r).a)
r=A.O(d).i("F<1,m?>")
r=A.A(new A.F(d,new B.bhN(),r),r.i("a_.E"))
q=J
x=2
return A.d(s.ahK("id",r),$async$bhM)
case 2:s=q.eW(f,new B.bhO())
r=s.$ti.i("d8<1,m>")
v=A.fi(new A.d8(s,new B.bhP(),r),r.i("y.E"))
for(s=d.length,u=0;u<d.length;d.length===s||(0,A.K)(d),++u){t=d[u]
r=t.b
r.toString
r=v.p(0,r)
t.ay=r}return A.j(null,w)}})
return A.k($async$bhM,w)},
bhI(d){var x=0,w=A.l(y.e),v,u,t
var $async$bhI=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=$.ji().cn("event_users").iR(0).dW("event",d)
t=$.e5().ge_().c
x=3
return A.d(u.dW("user",(t==null?null:t.r).a).afC(0),$async$bhI)
case 3:v=f.b>0
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bhI,w)},
bhJ(d){var x=0,w=A.l(y.e),v,u,t
var $async$bhJ=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=$.ji().cn("event_users_saved").iR(0).dW("event",d)
t=$.e5().ge_().c
x=3
return A.d(u.dW("user",(t==null?null:t.r).a).a2M(),$async$bhJ)
case 3:v=f!=null
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bhJ,w)},
bht:function bht(){},
bhN:function bhN(){},
bhO:function bhO(){},
bhP:function bhP(){},
aE0(d){var x=0,w=A.l(y.e),v,u
var $async$aE0=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=J
x=3
return A.d(A.G5(),$async$aE0)
case 3:v=u.lD(f,d)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$aE0,w)}}
J=c[1]
A=c[0]
B=a.updateHolder(c[101],B)
var z=a.updateTypes([])
B.bht.prototype={
$1(d){return A.Kl(d)},
$S:278}
B.bhN.prototype={
$1(d){return d.b},
$S:265}
B.bhO.prototype={
$1(d){return J.dt3(J.v(J.v(J.v(d,"event_users"),0),"count"),0)},
$S:91}
B.bhP.prototype={
$1(d){return A.bE(J.v(d,"id"))},
$S:284};(function inheritance(){var x=a.inheritMany
x(A.cq,[B.bht,B.bhN,B.bhO,B.bhP])})()
var y={l:A.J("dM"),e:A.J("x"),b:A.J("@"),f:A.J("~")}};
(a=>{a["PUb+cf2XLBrIsEH+AvA6shjlBaA="]=a.current})($__dart_deferred_initializers__);