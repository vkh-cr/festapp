((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={a95:function a95(d,e,f,g,h,i,j){var _=this
_.H=null
_.ah=d
_.aD=e
_.c3=f
_.dr=_.cB=null
_.f8=g
_.G$=h
_.dy=i
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=j
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},bMI:function bMI(d){this.a=d},
avW(d,e,f,g){return new B.avV(g,d,f,e,null)},
avV:function avV(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h}}
A=c[0]
C=c[2]
B=a.updateHolder(c[158],B)
B.a95.prototype={
at4(d){switch(d.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
soB(d){var x=this,w=x.ah
if(w===d)return
x.ah=d
if(x.at4(w)||x.at4(d))x.ak()
else{x.dr=x.cB=null
x.bo()}},
sjn(d){var x=this
if(x.aD.k(0,d))return
x.aD=d
x.H=x.dr=x.cB=null
x.bo()},
sdD(d){var x=this
if(x.c3==d)return
x.c3=d
x.H=x.dr=x.cB=null
x.bo()},
dZ(d){var x,w=this.G$
if(w!=null){x=w.az(C.am,C.eF,w.ge3())
switch(this.ah.a){case 6:return d.c9(new A.ab(0,d.b,0,d.d).IR(x))
case 1:case 2:case 0:case 4:case 3:case 5:return d.IR(x)}}else return new A.Z(A.a3(0,d.a,d.b),A.a3(0,d.c,d.d))},
cL(){var x,w,v=this,u=v.G$
if(u!=null){u.en(C.eF,!0)
switch(v.ah.a){case 6:u=y.a
x=u.a(A.Y.prototype.ga7.call(v))
w=new A.ab(0,x.b,0,x.d).IR(v.G$.gD(0))
v.fy=u.a(A.Y.prototype.ga7.call(v)).c9(w)
break
case 1:case 2:case 0:case 4:case 3:case 5:v.fy=y.a.a(A.Y.prototype.ga7.call(v)).IR(v.G$.gD(0))
break}v.dr=v.cB=null}else{u=y.a.a(A.Y.prototype.ga7.call(v))
v.fy=new A.Z(A.a3(0,u.a,u.b),A.a3(0,u.c,u.d))}},
acN(){var x,w,v,u,t,s,r,q,p,o,n=this
if(n.dr!=null)return
x=n.G$
if(x==null){n.cB=!1
x=new A.cd(new Float64Array(16))
x.h0()
n.dr=x}else{w=n.H
if(w==null)w=n.H=n.aD
v=x.gD(0)
u=A.d2p(n.ah,v,n.gD(0))
x=u.b
t=u.a
s=v.a
r=v.b
q=w.Rz(t,new A.a6(0,0,0+s,0+r))
p=n.gD(0)
o=w.Rz(x,new A.a6(0,0,0+p.a,0+p.b))
p=q.a
n.cB=q.c-p<s||q.d-q.b<r
r=A.nv(o.a,o.b,0)
r.ni(x.a/t.a,x.b/t.b,1,1)
r.hc(-p,-q.b,0,1)
n.dr=r}},
axL(d,e){var x,w,v,u,t=this,s=t.dr
s.toString
x=A.aCg(s)
if(x==null){s=t.cx
s===$&&A.a()
w=t.dr
w.toString
v=A.li.prototype.gki.call(t)
u=t.ch.a
return d.Bu(s,e,w,v,u instanceof A.x2?u:null)}else t.oW(d,e.a8(0,x))
return null},
b2(d,e){var x,w,v,u,t=this
if(t.G$==null||t.gD(0).gZ(0)||t.G$.gD(0).gZ(0))return
t.acN()
x=t.cB
x.toString
if(x&&t.f8!==C.k){x=t.cx
x===$&&A.a()
w=t.gD(0)
v=t.ch
u=v.a
u=u instanceof A.vC?u:null
v.sbq(0,d.tB(x,e,new A.a6(0,0,0+w.a,0+w.b),t.gbtk(),t.f8,u))}else t.ch.sbq(0,t.axL(d,e))},
h3(d,e){var x,w=this
if(!w.gD(0).gZ(0)){x=w.G$
x=x==null?null:x.gD(0).gZ(0)
x=x===!0}else x=!0
if(x)return!1
w.acN()
return d.PJ(new B.bMI(w),e,w.dr)},
Bq(d){return!this.gD(0).gZ(0)&&!d.gD(0).gZ(0)},
hU(d,e){var x
if(!(!this.gD(0).gZ(0)&&!d.gD(0).gZ(0)))e.UV()
else{this.acN()
x=this.dr
x.toString
e.jv(0,x)}}}
B.avV.prototype={
bb(d){var x=new B.a95(this.e,this.f,A.fm(d),this.r,null,new A.bz(),A.aG(y.d))
x.bf()
x.sc0(null)
return x},
bn(d,e){var x
e.soB(this.e)
e.sjn(this.f)
e.sdD(A.fm(d))
x=this.r
if(x!==e.f8){e.f8=x
e.bo()
e.dl()}}}
var z=a.updateTypes(["x2?(Bu,r)"])
B.bMI.prototype={
$2(d,e){return this.a.My(d,e)},
$S:30};(function installTearOffs(){var x=a._instance_2u
x(B.a95.prototype,"gbtk","axL",0)})();(function inheritance(){var x=a.inherit
x(B.a95,A.wE)
x(B.bMI,A.eg)
x(B.avV,A.bC)})()
A.cf(b.typeUniverse,JSON.parse('{"a95":{"a2":[],"by":["a2"],"Y":[],"aR":[]},"avV":{"bC":[],"aM":[],"e":[]}}'))
var y={a:A.I("ab"),d:A.I("fe")}};
(a=>{a["UVQPF/Ap4BGkFfL0KtxaYvnL1rg="]=a.current})($__dart_deferred_initializers__);