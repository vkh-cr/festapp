((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={aCt:function aCt(d,e,f,g,h,i,j){var _=this
_.I=null
_.ai=d
_.aG=e
_.bL=f
_.dC=_.dj=null
_.fq=g
_.H$=h
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
_.dx=$},chM:function chM(d){this.a=d},
awP(d,e,f,g){return new B.aZW(g,d,f,e,null)},
aZW:function aZW(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h}}
A=c[0]
C=c[2]
B=a.updateHolder(c[166],B)
B.aCt.prototype={
awg(d){switch(d.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
spN(d){var x=this,w=x.ai
if(w===d)return
x.ai=d
if(x.awg(w)||x.awg(d))x.am()
else{x.dC=x.dj=null
x.br()}},
sjM(d){var x=this
if(x.aG.k(0,d))return
x.aG=d
x.I=x.dC=x.dj=null
x.br()},
sdN(d){var x=this
if(x.bL==d)return
x.bL=d
x.I=x.dC=x.dj=null
x.br()},
e7(d){var x,w=this.H$
if(w!=null){x=w.aE(C.aI,C.e8,w.ge8())
switch(this.ai.a){case 6:return d.ca(new A.ah(0,d.b,0,d.d).JQ(x))
case 1:case 2:case 0:case 4:case 3:case 5:return d.JQ(x)}}else return new A.a_(A.a6(0,d.a,d.b),A.a6(0,d.c,d.d))},
cI(){var x,w,v=this,u=v.H$
if(u!=null){u.es(C.e8,!0)
switch(v.ai.a){case 6:u=y.a
x=u.a(A.a1.prototype.gaa.call(v))
w=new A.ah(0,x.b,0,x.d).JQ(v.H$.gC(0))
v.fy=u.a(A.a1.prototype.gaa.call(v)).ca(w)
break
case 1:case 2:case 0:case 4:case 3:case 5:v.fy=y.a.a(A.a1.prototype.gaa.call(v)).JQ(v.H$.gC(0))
break}v.dC=v.dj=null}else{u=y.a.a(A.a1.prototype.gaa.call(v))
v.fy=new A.a_(A.a6(0,u.a,u.b),A.a6(0,u.c,u.d))}},
af6(){var x,w,v,u,t,s,r,q,p,o,n=this
if(n.dC!=null)return
x=n.H$
if(x==null){n.dj=!1
x=new A.cg(new Float64Array(16))
x.hb()
n.dC=x}else{w=n.I
if(w==null)w=n.I=n.aG
v=x.gC(0)
u=A.dFa(n.ai,v,n.gC(0))
x=u.b
t=u.a
s=v.a
r=v.b
q=w.L8(t,new A.a7(0,0,0+s,0+r))
p=n.gC(0)
o=w.L8(x,new A.a7(0,0,0+p.a,0+p.b))
p=q.a
n.dj=q.c-p<s||q.d-q.b<r
r=A.Qk(o.a,o.b,0)
r.nm(x.a/t.a,x.b/t.b,1,1)
r.hn(-p,-q.b,0,1)
n.dC=r}},
aB9(d,e){var x,w,v,u,t=this,s=t.dC
s.toString
x=A.b5p(s)
if(x==null){s=t.cx
s===$&&A.b()
w=t.dC
w.toString
v=A.NR.prototype.gkc.call(t)
u=t.ch.a
return d.Cg(s,e,w,v,u instanceof A.YQ?u:null)}else t.pp(d,e.ad(0,x))
return null},
aT(d,e){var x,w,v,u,t=this
if(t.H$==null||t.gC(0).ga1(0)||t.H$.gC(0).ga1(0))return
t.af6()
x=t.dj
x.toString
if(x&&t.fq!==C.q){x=t.cx
x===$&&A.b()
w=t.gC(0)
v=t.ch
u=v.a
u=u instanceof A.VC?u:null
v.sbq(0,d.qH(x,e,new A.a7(0,0,0+w.a,0+w.b),t.gbyR(),t.fq,u))}else t.ch.sbq(0,t.aB9(d,e))},
he(d,e){var x,w=this
if(!w.gC(0).ga1(0)){x=w.H$
x=x==null?null:x.gC(0).ga1(0)
x=x===!0}else x=!0
if(x)return!1
w.af6()
return d.R7(new B.chM(w),e,w.dC)},
Cb(d){return!this.gC(0).ga1(0)&&!d.gC(0).ga1(0)},
ia(d,e){var x
if(!(!this.gC(0).ga1(0)&&!d.gC(0).ga1(0)))e.Wq()
else{this.af6()
x=this.dC
x.toString
e.jT(0,x)}}}
B.aZW.prototype={
bg(d){var x=new B.aCt(this.e,this.f,A.fH(d),this.r,null,new A.bK(),A.aN(y.d))
x.bh()
x.sbW(null)
return x},
bn(d,e){var x
e.spN(this.e)
e.sjM(this.f)
e.sdN(A.fH(d))
x=this.r
if(x!==e.fq){e.fq=x
e.br()
e.dd()}}}
var z=a.updateTypes(["YQ?(a2D,w)"])
B.chM.prototype={
$2(d,e){return this.a.ND(d,e)},
$S:30};(function installTearOffs(){var x=a._instance_2u
x(B.aCt.prototype,"gbyR","aB9",0)})();(function inheritance(){var x=a.inherit
x(B.aCt,A.Yt)
x(B.chM,A.eo)
x(B.aZW,A.bM)})()
A.ci(b.typeUniverse,JSON.parse('{"aCt":{"a5":[],"bH":["a5"],"a1":[],"b4":[]},"aZW":{"bM":[],"aW":[],"k":[]}}'))
var y={a:A.M("ah"),d:A.M("fp")}};
(a=>{a["hQnh5EhARRDOj4VlOHTuNTv0G7E="]=a.current})($__dart_deferred_initializers__);