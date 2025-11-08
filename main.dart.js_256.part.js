((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={
w0(d,e){var x=0,w=A.m(y.l),v,u,t,s,r,q,p,o,n
var $async$w0=A.i(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:u=e?"event_groups!event_groups_event_child_fkey(event_parent)":"event_groups!event_groups_event_parent_fkey(event_child)"
t=$.jk()
p=A
x=3
return A.d(t.cn("events").kK(0,"id,updated_at,occasion,title,description,start_time,end_time,max_participants,split_for_men_women,is_group_event,is_hidden,type,data,places(id, title),"+u).dW("id",d).lP(0),$async$w0)
case 3:s=p.Kq(g)
r=$.e6()
q=s.b
x=r.ge_().c!=null?4:6
break
case 4:q.toString
p=s
x=7
return A.d(B.bhU(q),$async$w0)
case 7:p.cy=g
p=s
x=8
return A.d(B.bhT(q),$async$w0)
case 8:p.ay=g
x=5
break
case 6:q.toString
p=s
x=9
return A.d(B.aE7(q),$async$w0)
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
return A.d(t.ai5("id",q).dW("is_hidden",!1),$async$w0)
case 12:q=p.auK(o.aO(n.b0(g,new B.bhE(),y.b),!0,y.l))
s.w=q
x=r.ge_().c!=null?13:14
break
case 13:x=15
return A.d(B.bhX(q),$async$w0)
case 15:case 14:case 11:t=s.CW
if(t===!0){t=$.e0().a
t=t==null?null:t.d
if(t==null)t=null
else{t=t.Q
t=t==null?null:t.gB(t)}t=(t==null?0:t)>0}else t=!1
if(t)s.cx=!0
v=s
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$w0,w)},
bhX(d){var x=0,w=A.m(y.f),v,u,t,s,r,q
var $async$bhX=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:s=$.jk().cn("events").kK(0,"id, event_users!inner(count)")
r=$.e6().ge_().c
s=s.dW("event_users.user",(r==null?null:r.r).a)
r=A.O(d).i("F<1,n?>")
r=A.A(new A.F(d,new B.bhY(),r),r.i("a_.E"))
q=J
x=2
return A.d(s.ai5("id",r),$async$bhX)
case 2:s=q.eY(f,new B.bhZ())
r=s.$ti.i("d9<1,n>")
v=A.fi(new A.d9(s,new B.bi_(),r),r.i("y.E"))
for(s=d.length,u=0;u<d.length;d.length===s||(0,A.K)(d),++u){t=d[u]
r=t.b
r.toString
r=v.p(0,r)
t.ay=r}return A.k(null,w)}})
return A.l($async$bhX,w)},
bhT(d){var x=0,w=A.m(y.e),v,u,t
var $async$bhT=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:u=$.jk().cn("event_users").iQ(0).dW("event",d)
t=$.e6().ge_().c
x=3
return A.d(u.dW("user",(t==null?null:t.r).a).afY(0),$async$bhT)
case 3:v=f.b>0
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bhT,w)},
bhU(d){var x=0,w=A.m(y.e),v,u,t
var $async$bhU=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:u=$.jk().cn("event_users_saved").iQ(0).dW("event",d)
t=$.e6().ge_().c
x=3
return A.d(u.dW("user",(t==null?null:t.r).a).a31(),$async$bhU)
case 3:v=f!=null
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bhU,w)},
bhE:function bhE(){},
bhY:function bhY(){},
bhZ:function bhZ(){},
bi_:function bi_(){},
aE7(d){var x=0,w=A.m(y.e),v,u
var $async$aE7=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:u=J
x=3
return A.d(A.G7(),$async$aE7)
case 3:v=u.lE(f,d)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$aE7,w)}}
J=c[1]
A=c[0]
B=a.updateHolder(c[102],B)
var z=a.updateTypes([])
B.bhE.prototype={
$1(d){return A.Kq(d)},
$S:279}
B.bhY.prototype={
$1(d){return d.b},
$S:265}
B.bhZ.prototype={
$1(d){return J.dtZ(J.v(J.v(J.v(d,"event_users"),0),"count"),0)},
$S:90}
B.bi_.prototype={
$1(d){return A.bF(J.v(d,"id"))},
$S:286};(function inheritance(){var x=a.inheritMany
x(A.cs,[B.bhE,B.bhY,B.bhZ,B.bi_])})()
var y={l:A.J("dN"),e:A.J("x"),b:A.J("@"),f:A.J("~")}};
(a=>{a["34KAEhvJp1uqRfgIYNMtZ6H4Lr0="]=a.current})($__dart_deferred_initializers__);