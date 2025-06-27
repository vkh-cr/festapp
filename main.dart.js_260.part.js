((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_260",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={
v0(d,e){return B.dgH(d,e)},
dgH(d,e){var x=0,w=A.l(y.l),v,u,t,s,r,q,p,o,n,m
var $async$v0=A.f(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=e?"event_groups!event_groups_event_child_fkey(event_parent)":"event_groups!event_groups_event_parent_fkey(event_child)"
t=$.iW()
p=A
x=3
return A.d(t.ca("events").jN(0,"id,updated_at,occasion,title,description,start_time,end_time,max_participants,split_for_men_women,is_group_event,is_hidden,type,data,places(id, title),"+u).dt("id",d).l2(0),$async$v0)
case 3:s=p.IJ(g)
r=$.dz()
q=s.b
x=r.gdl().c!=null?4:6
break
case 4:q.toString
p=s
x=7
return A.d(B.bbN(q),$async$v0)
case 7:p.cy=g
p=s
x=8
return A.d(B.bbM(q),$async$v0)
case 8:p.ay=g
x=5
break
case 6:q.toString
p=s
x=9
return A.d(B.aAb(q),$async$v0)
case 9:p.cy=g
case 5:x=s.z!=null?10:11
break
case 10:t=t.ca("events").jN(0,"id,title,start_time,end_time,max_participants,data,event_users(count)")
q=s.z
q.toString
p=s
o=A
n=A
m=J
x=12
return A.d(t.afx("id",q).dt("is_hidden",!1),$async$v0)
case 12:p.w=o.ar9(n.aV(m.bf(g,new B.bbx(),y.b),!0,y.l))
x=r.gdl().c!=null?13:14
break
case 13:x=15
return A.d(B.bbQ(s.w),$async$v0)
case 15:case 14:case 11:t=s.CW
if(t===!0&&C.cTa())s.cx=!0
v=s
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$v0,w)},
bbQ(d){return B.dgN(d)},
dgN(d){var x=0,w=A.l(y.f),v,u,t,s,r,q
var $async$bbQ=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.iW().ca("events").jN(0,"id, event_users!inner(count)")
r=$.dz().gdl().c
s=s.dt("event_users.user",(r==null?null:r.r).a)
r=A.T(d).i("I<1,m?>")
r=A.B(new A.I(d,new B.bbR(),r),r.i("a2.E"))
q=J
x=2
return A.d(s.afx("id",r),$async$bbQ)
case 2:s=q.f4(f,new B.bbS())
r=s.$ti.i("df<1,m>")
v=A.fy(new A.df(s,new B.bbT(),r),r.i("w.E"))
for(s=d.length,u=0;u<d.length;d.length===s||(0,A.M)(d),++u){t=d[u]
r=t.b
r.toString
r=v.p(0,r)
t.ay=r}return A.j(null,w)}})
return A.k($async$bbQ,w)},
bbM(d){return B.dgL(d)},
dgL(d){var x=0,w=A.l(y.e),v,u,t
var $async$bbM=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=$.iW().ca("event_users").iC(0).dt("event",d)
t=$.dz().gdl().c
x=3
return A.d(u.dt("user",(t==null?null:t.r).a).adq(0),$async$bbM)
case 3:v=f.b>0
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbM,w)},
bbN(d){return B.dgM(d)},
dgM(d){var x=0,w=A.l(y.e),v,u,t
var $async$bbN=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=$.iW().ca("event_users_saved").iC(0).dt("event",d)
t=$.dz().gdl().c
x=3
return A.d(u.dt("user",(t==null?null:t.r).a).a13(),$async$bbN)
case 3:v=f!=null
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbN,w)},
bbx:function bbx(){},
bbR:function bbR(){},
bbS:function bbS(){},
bbT:function bbT(){},
aAb(d){return B.doP(d)},
doP(d){var x=0,w=A.l(y.e),v,u
var $async$aAb=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=J
x=3
return A.d(A.EJ(),$async$aAb)
case 3:v=u.ly(f,d)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$aAb,w)}},C
J=c[1]
A=c[0]
B=a.updateHolder(c[101],B)
C=c[119]
var z=a.updateTypes([])
B.bbx.prototype={
$1(d){return A.IJ(d)},
$S:190}
B.bbR.prototype={
$1(d){return d.b},
$S:245}
B.bbS.prototype={
$1(d){return J.dco(J.v(J.v(J.v(d,"event_users"),0),"count"),0)},
$S:93}
B.bbT.prototype={
$1(d){return A.bt(J.v(d,"id"))},
$S:255};(function inheritance(){var x=a.inheritMany
x(A.ce,[B.bbx,B.bbR,B.bbS,B.bbT])})()
var y={l:A.E("dE"),e:A.E("y"),b:A.E("@"),f:A.E("~")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_260",e:"endPart",h:b})})($__dart_deferred_initializers__,"hncMp6YlxLmOkv8Jb+cDESUJlIc=");