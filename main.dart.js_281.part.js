((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={
XL(d,e){var x=0,w=A.p(y.l),v,u,t,s,r,q,p,o,n
var $async$XL=A.l(function(f,g){if(f===1)return A.m(g,w)
for(;;)switch(x){case 0:u=e?"event_groups!event_groups_event_child_fkey(event_parent)":"event_groups!event_groups_event_parent_fkey(event_child)"
t=$.LC()
p=A
x=3
return A.f(t.cD("events").ly(0,"id,updated_at,occasion,title,description,start_time,end_time,max_participants,split_for_men_women,is_group_event,is_hidden,type,data,places(id, title),"+u).eb("id",d).mU(0),$async$XL)
case 3:s=p.abp(g)
r=$.ea()
q=s.b
x=r.ge0().c!=null?4:6
break
case 4:q.toString
p=s
x=7
return A.f(B.bM7(q),$async$XL)
case 7:p.cy=g
p=s
x=8
return A.f(B.bM6(q),$async$XL)
case 8:p.ay=g
x=5
break
case 6:q.toString
p=s
x=9
return A.f(B.b6p(q),$async$XL)
case 9:p.cy=g
case 5:x=s.z!=null?10:11
break
case 10:t=t.cD("events").ly(0,"id,title,start_time,end_time,max_participants,data,event_users(count)")
q=s.z
q.toString
p=A
o=A
n=J
x=12
return A.f(t.ajX("id",q).eb("is_hidden",!1),$async$XL)
case 12:q=p.aXO(o.aU(n.b5(g,new B.bLS(),y.b),!0,y.l))
s.w=q
x=r.ge0().c!=null?13:14
break
case 13:x=15
return A.f(B.bMa(q),$async$XL)
case 15:case 14:case 11:t=s.CW
if(t===!0){t=$.dZ().a
t=t==null?null:t.d
if(t==null)t=null
else{t=t.Q
t=t==null?null:t.gB(t)}t=(t==null?0:t)>0}else t=!1
if(t)s.cx=!0
v=s
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$XL,w)},
bMa(d){var x=0,w=A.p(y.f),v,u,t,s,r,q
var $async$bMa=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:s=$.LC().cD("events").ly(0,"id, event_users!inner(count)")
r=$.ea().ge0().c
s=s.eb("event_users.user",(r==null?null:r.r).a)
r=A.S(d).i("J<1,r?>")
r=A.F(new A.J(d,new B.bMb(),r),r.i("a2.E"))
q=J
x=2
return A.f(s.ajX("id",r),$async$bMa)
case 2:s=q.fh(f,new B.bMc())
r=s.$ti.i("de<1,r>")
v=A.fj(new A.de(s,new B.bMd(),r),r.i("E.E"))
for(s=d.length,u=0;u<d.length;d.length===s||(0,A.O)(d),++u){t=d[u]
r=t.b
r.toString
r=v.p(0,r)
t.ay=r}return A.n(null,w)}})
return A.o($async$bMa,w)},
bM6(d){var x=0,w=A.p(y.e),v,u,t
var $async$bM6=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:u=$.LC().cD("event_users").jm(0).eb("event",d)
t=$.ea().ge0().c
x=3
return A.f(u.eb("user",(t==null?null:t.r).a).ahK(0),$async$bM6)
case 3:v=f.b>0
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$bM6,w)},
bM7(d){var x=0,w=A.p(y.e),v,u,t
var $async$bM7=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:u=$.LC().cD("event_users_saved").jm(0).eb("event",d)
t=$.ea().ge0().c
x=3
return A.f(u.eb("user",(t==null?null:t.r).a).a4p(),$async$bM7)
case 3:v=f!=null
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$bM7,w)},
bLS:function bLS(){},
bMb:function bMb(){},
bMc:function bMc(){},
bMd:function bMd(){},
b6p(d){var x=0,w=A.p(y.e),v,u
var $async$b6p=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:u=J
x=3
return A.f(A.a78(),$async$b6p)
case 3:v=u.OJ(f,d)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$b6p,w)}}
J=c[1]
A=c[0]
B=a.updateHolder(c[106],B)
var z=a.updateTypes([])
B.bLS.prototype={
$1(d){return A.abp(d)},
$S:254}
B.bMb.prototype={
$1(d){return d.b},
$S:314}
B.bMc.prototype={
$1(d){return J.etY(J.y(J.y(J.y(d,"event_users"),0),"count"),0)},
$S:81}
B.bMd.prototype={
$1(d){return A.bO(J.y(d,"id"))},
$S:248};(function inheritance(){var x=a.inheritMany
x(A.cj,[B.bLS,B.bMb,B.bMc,B.bMd])})()
var y={l:A.M("dV"),e:A.M("C"),b:A.M("@"),f:A.M("~")}};
(a=>{a["F2Db+LjIVeNr5wLq+/KUApbZ4IQ="]=a.current})($__dart_deferred_initializers__);