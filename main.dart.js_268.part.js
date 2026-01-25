((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,E,O,B={aDQ:function aDQ(d,e,f){this.c=d
this.d=e
this.a=f},brV:function brV(){var _=this
_.d=!0
_.e=!1
_.c=_.a=_.r=_.f=null},dcS:function dcS(d,e){this.a=d
this.b=e},dcT:function dcT(d,e){this.a=d
this.b=e},dcU:function dcU(d){this.a=d},
eNw(d,e){return new B.aa3(d,e)},
aa3:function aa3(d,e){this.c=d
this.a=e},
aOJ:function aOJ(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=!0
_.f=!1
_.w=_.r=null
_.x=e
_.y=f
_.z=g
_.Q=h
_.as=i
_.at=j
_.ax=k
_.ay=l
_.cx=_.CW=_.ch=!1
_.cy=m
_.c=_.a=null},
dd3:function dd3(d){this.a=d},
dd4:function dd4(d){this.a=d},
dd5:function dd5(d){this.a=d},
ddc:function ddc(d){this.a=d},
dd9:function dd9(d){this.a=d},
dd8:function dd8(d,e){this.a=d
this.b=e},
dda:function dda(d){this.a=d},
dd7:function dd7(d,e){this.a=d
this.b=e},
ddb:function ddb(d){this.a=d},
dd6:function dd6(d,e){this.a=d
this.b=e},
dd2:function dd2(d){this.a=d},
dd0:function dd0(d){this.a=d},
dcX:function dcX(d){this.a=d},
dcY:function dcY(d,e){this.a=d
this.b=e},
dcV:function dcV(d,e){this.a=d
this.b=e},
dcZ:function dcZ(d){this.a=d},
dd_:function dd_(d){this.a=d},
dd1:function dd1(d){this.a=d},
dcW:function dcW(d){this.a=d},
b0v(d){return B.eGM(d)},
eGM(d){var x=0,w=A.p(y.F),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$b0v=A.l(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=y.w
o=y.b
x=7
return A.f($.dEy().bo("get_organization_admin",A.d(["organization_id",d],p,o),o).LN(),$async$b0v)
case 7:s=f
if(s==null){v=null
x=1
break}n=J.y(s,"data")
r=A.Mh(n==null?A.J(o,o):n,p,o)
J.bP(r,"title",J.y(s,"title"))
p=A.dUA(r)
v=p
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ag(l)
A.cI("Failed to fetch admin organization: "+A.t(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$b0v,w)},
b0w(d,e){return B.eGN(d,e)},
eGN(d,e){var x=0,w=A.p(y.v),v=1,u=[],t,s,r,q,p
var $async$b0w=A.l(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.f(B.b0v(d),$async$b0w)
case 6:t=g
if(t==null){r=A.ct("Organization not found")
throw A.u(r)}r=y.b
x=7
return A.f($.dEy().bo("update_organization_admin",A.d(["organization_id",d,"title",e.a,"data",e.b1()],y.w,r),r).LN(),$async$b0w)
case 7:v=1
x=5
break
case 3:v=2
p=u.pop()
s=A.ag(p)
A.cI("Failed to update organization: "+A.t(s))
r=A.ct("Failed to update organization: "+A.t(s))
throw A.u(r)
x=5
break
case 2:x=1
break
case 5:return A.n(null,w)
case 1:return A.m(u.at(-1),w)}})
return A.o($async$b0w,w)}},D,P,Q,F,R,G
J=c[1]
A=c[0]
C=c[2]
H=c[122]
I=c[205]
K=c[190]
L=c[179]
M=c[188]
N=c[87]
E=c[248]
O=c[239]
B=a.updateHolder(c[20],B)
D=c[247]
P=c[249]
Q=c[250]
F=c[173]
R=c[213]
G=c[182]
B.aDQ.prototype={
L(){return new B.brV()},
mw(d,e){return this.c.$2(d,e)}}
B.brV.prototype={
S(){this.a_()
this.XP()},
XP(){var x=0,w=A.p(y.v),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k
var $async$XP=A.l(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
p={}
o=$.Mc()
n=o.b
n===$&&A.b()
n=n.gdL().c
s=n==null?null:n.r
if(s==null){p=A.ct("User not logged in.")
throw A.u(p)}m=p.a=t.a.d
n=y.b
x=6
return A.f(o.b.bo("check_is_admin_of_organization",A.d(["organization_id",m],y.w,n),n),$async$XP)
case 6:r=e
if(J.v(r,!0)){if(t.c!=null)t.q(new B.dcS(p,t))}else{p=A.ct("Access Denied. User is not an admin of organization "+m+".")
throw A.u(p)}v=1
x=5
break
case 3:v=2
k=u.pop()
q=A.ag(k)
if(t.c!=null)t.q(new B.dcT(t,q))
x=5
break
case 2:x=1
break
case 5:return A.n(null,w)
case 1:return A.m(u.at(-1),w)}})
return A.o($async$XP,w)},
A(d){var x,w,v=this,u=null
if(v.d)return C.oW
if(!v.e||v.f==null){x=A.c([D.bMv],y.u)
w=v.r
if(w!=null)x.push(new A.T(G.aO,A.eI(w,u,L.Ct,C.aZ),u))
x.push(C.a0)
x.push(A.cR(!1,D.bLA,u,u,u,u,u,u,new B.dcU(d),u,u))
return F.eC(u,u,A.bt(A.a6(x,C.m,C.bm,C.j,0,u,C.o),u,u),u,u,u,u,u)}x=v.a
x.toString
w=v.f
w.toString
return x.mw(d,w)}}
B.aa3.prototype={
L(){var x=$.a9()
return new B.aOJ(new A.aQ(null,y.o),new A.bh(C.ao,x),new A.bh(C.ao,x),new A.bh(C.ao,x),new A.bh(C.ao,x),new A.bh(C.ao,x),new A.bh(C.ao,x),new A.bh(C.ao,x),new A.bh(C.ao,x),A.c([],y.B))},
gbh(d){return this.c}}
B.aOJ.prototype={
S(){this.a_()},
a_w(d){return this.buu(d)},
buu(d){var x=0,w=A.p(y.v),v=1,u=[],t=[],s=this,r,q,p,o,n
var $async$a_w=A.l(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.w=d
v=3
x=6
return A.f(B.b0v(d),$async$a_w)
case 6:r=f
if(r!=null){s.r=r
p=r.a
if(p==null)p=""
s.x.sbu(0,p)
p=r.b
if(p==null)p=""
s.y.sbu(0,p)
p=r.d
if(p==null)p=""
s.z.sbu(0,p)
p=r.e
if(p==null)p=""
s.Q.sbu(0,p)
p=r.z
p=p==null?null:C.d.j(p)
if(p==null)p=""
s.as.sbu(0,p)
p=r.Q
p=p==null?null:C.d.j(p)
if(p==null)p=""
s.at.sbu(0,p)
p=r.f
if(p==null)p=""
s.ax.sbu(0,p)
p=r.r
if(p==null)p=""
s.ay.sbu(0,p)
p=r.w
s.ch=p===!0
p=r.x
s.CW=p===!0
p=r.y
s.cx=p===!0
p=r.c
p=A.c(p.slice(0),A.R(p))
s.cy=p==null?A.c([],y.B):p}t.push(5)
x=4
break
case 3:v=2
n=u.pop()
q=A.ag(n)
A.cI("Error loading organization: "+A.t(q))
p=s.c
if(p!=null)A.aS(p,"Failed to load organization data.",C.aD)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new B.dd3(s))
x=t.pop()
break
case 5:return A.n(null,w)
case 1:return A.m(u.at(-1),w)}})
return A.o($async$a_w,w)},
a_x(){var x=0,w=A.p(y.v),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$a_x=A.l(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:if(!r.d.gZ().hX()){x=1
break}if(r.w==null){x=1
break}r.q(new B.dd4(r))
u=4
o=r.x.a.a
n=r.y.a.a
m=r.z.a.a
l=r.Q.a.a
k=r.ax.a.a
j=r.ay.a.a
i=A.du(r.as.a.a,null)
h=A.du(r.at.a.a,null)
g=r.ch
f=r.CW
e=r.cx
q=new A.aDR(o,n,r.cy,m,l,k,j,g,f,e,i,h)
h=r.w
h.toString
x=7
return A.f(B.b0w(h,q),$async$a_x)
case 7:o=r.c
if(o!=null)A.aS(o,"Organization saved.",C.ac)
o=$.dI()
d=o.a
if(d!=null){n=d.a
m=d.d
l=d.e
k=d.f
j=d.r
o.sn(0,new A.UX(n,d.b,d.c,m,l,k,j,d.w,d.x,d.y,q))}s.push(6)
x=5
break
case 4:u=3
a1=t.pop()
p=A.ag(a1)
A.cI("Save error: "+A.t(p))
o=r.c
if(o!=null)A.aS(o,"Error saving: "+A.t(p),C.aD)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.q(new B.dd5(r))
x=s.pop()
break
case 6:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$a_x,w)},
A(d){return new B.aDQ(new B.ddc(this),this.a.c,null)},
XL(d,e,f,g,h){var x=null,w=g?C.cX:C.dE,v=A.ba(x,C.bE,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,x,x,x,x,x,x,x,e,!0,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x)
return new A.T(M.ji,A.cl(x,!1,x,x,!0,d,v,x,x,!1,x,x,x,x,x,w,x,1,x,x,!1,x,x,x,x,x,!1,x,x,C.H,x,x,h?new B.dd2(e):x),x)},
bbS(d,e,f){return this.XL(d,e,null,!1,f)},
atL(d,e,f){return this.XL(d,e,f,!1,!1)},
aaj(d,e){return this.XL(d,e,null,!1,!1)},
atM(d,e,f){return this.XL(d,e,null,f,!1)},
bbC(){var x,w=this.cy
w=new A.OO(w,A.R(w).i("OO<1>"))
x=y.l
w=A.D(w.giF(w).dP(0,new B.dd0(this),x),x)
w.push(H.dI5(O.eV,D.bLE,new B.dd1(this),null))
return A.a6(w,C.m,C.i,C.j,0,null,C.o)}}
var z=a.updateTypes(["Z<~>()"])
B.dcS.prototype={
$0(){var x=this.b
x.e=!0
x.f=this.a.a
x.d=!1},
$S:0}
B.dcT.prototype={
$0(){var x=this.a
x.d=x.e=!1
x.r=J.an(this.b)},
$S:0}
B.dcU.prototype={
$0(){return A.aM(this.a,!1).ci()},
$S:0}
B.dd3.prototype={
$0(){this.a.e=!1},
$S:0}
B.dd4.prototype={
$0(){this.a.f=!0},
$S:0}
B.dd5.prototype={
$0(){this.a.f=!1},
$S:0}
B.ddc.prototype={
$2(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=this.a
if(a0.e&&a0.r==null&&a0.w!==a2)a0.a_w(a2)
x=N.bFi(a1,d,d)
if(a0.e)a0=C.bb
else{w=A.x("Organization Settings",d,d,d,d,d,d,d,A.B(a1).ok.e,d,d,d,d,d)
v=a0.bbS(a0.x,"Title",!0)
u=a0.atL(a0.y,"App Name (APP_NAME)","Brand identifier")
t=a0.aaj(a0.z,"Default URL (DEFAULT_URL)")
s=a0.atL(a0.Q,"Default Language (DEFAULT_LANGUAGE)","e.g. cs, en")
r=A.x("IDs & References",d,d,d,d,d,d,d,A.B(a1).ok.w,d,d,d,d,d)
q=y.u
p=A.ae(A.c([A.aI(a0.atM(a0.as,"Default Unit ID",!0),1,d),C.cU,A.aI(a0.atM(a0.at,"Rep. Occasion ID",!0),1,d)],q),C.m,d,C.i,C.j,0,d)
o=A.x("OneSignal Configuration",d,d,d,d,d,d,d,A.B(a1).ok.w,d,d,d,d,d)
n=a0.aaj(a0.ax,"OneSignal App ID")
m=a0.aaj(a0.ay,"OneSignal REST API Key")
l=A.x("Feature Flags",d,d,d,d,d,d,d,A.B(a1).ok.w,d,d,d,d,d)
k=A.Rb(d,d,new B.dd9(a0),d,d,D.bLV,a0.cx)
j=A.Rb(d,d,new B.dda(a0),d,d,D.bLX,a0.ch)
i=A.Rb(d,d,new B.ddb(a0),d,d,D.bMt,a0.CW)
h=A.x("Platforms",d,d,d,d,d,d,d,A.B(a1).ok.f,d,d,d,d,d)
g=a0.bbC()
f=a0.f
e=f?d:a0.gbzB()
a0=new A.cq(C.aT,d,d,new A.cn(E.tI,A.cV(A.Pv(d,d,A.a6(A.c([w,C.b7,v,u,t,s,C.a0,r,C.an,p,C.a0,o,C.an,n,m,C.a0,l,k,j,i,C.b7,h,C.an,g,I.lg,A.ae(A.c([A.cR(!1,f?E.p1:D.bLU,d,d,d,d,d,d,e,d,d)],q),C.m,d,C.cn,C.j,0,d),P.ag_],q),C.I,C.i,C.j,0,d,C.o),a0.d,d,d),C.v,d,C.y,C.T,d,d,G.aO,d,d,d,!1,C.M),d),d)}return F.eC(x,d,a0,d,d,d,d,d)},
$S:1447}
B.dd9.prototype={
$1(d){var x=this.a
return x.q(new B.dd8(x,d))},
$S:7}
B.dd8.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dda.prototype={
$1(d){var x=this.a
return x.q(new B.dd7(x,d))},
$S:7}
B.dd7.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.ddb.prototype={
$1(d){var x=this.a
return x.q(new B.dd6(x,d))},
$S:7}
B.dd6.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dd2.prototype={
$1(d){return d==null||d.length===0?this.a+" is required":null},
$S:28}
B.dd0.prototype={
$1(d){var x=null,w=d.b,v=y.u
return A.N5(new A.T(C.aB,A.a6(A.c([A.ae(A.c([A.aI(A.cl(x,!1,x,x,!0,x,D.aFc,x,x,!1,x,x,w.c,x,x,x,x,1,x,x,!1,new B.dcX(w),x,x,x,x,!1,x,x,C.H,x,x,x),1,x),A.bu(x,x,x,x,x,x,D.aDm,x,x,x,new B.dcY(this.a,d.a),x,x,x,x,x)],v),C.m,x,C.i,C.j,0,x),A.cl(x,!1,x,x,!0,x,D.aF8,x,x,!1,x,x,w.a,x,x,x,x,1,x,x,!1,new B.dcZ(w),x,x,x,x,!1,x,x,C.H,x,x,x),A.cl(x,!1,x,x,!0,x,D.aF6,x,x,!1,x,x,w.b,x,x,x,x,1,x,x,!1,new B.dd_(w),x,x,x,x,!1,x,x,C.H,x,x,x)],v),C.m,C.i,C.j,0,x,C.o),x),x,x,x,x,R.hl,x)},
$S:1448}
B.dcX.prototype={
$1(d){return this.a.c=d},
$S:3}
B.dcY.prototype={
$0(){var x=this.a
x.q(new B.dcV(x,this.b))},
$S:0}
B.dcV.prototype={
$0(){C.c.fU(this.a.cy,this.b)},
$S:0}
B.dcZ.prototype={
$1(d){return this.a.a=d},
$S:3}
B.dd_.prototype={
$1(d){return this.a.b=d},
$S:3}
B.dd1.prototype={
$0(){var x=this.a
x.q(new B.dcW(x))},
$S:0}
B.dcW.prototype={
$0(){C.c.u(this.a.cy,new A.R4("","","web"))},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.aOJ.prototype,"gbzB","a_x",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.aDQ,B.aa3])
x(A.Q,[B.brV,B.aOJ])
x(A.d5,[B.dcS,B.dcT,B.dcU,B.dd3,B.dd4,B.dd5,B.dd8,B.dd7,B.dd6,B.dcY,B.dcV,B.dd1,B.dcW])
w(B.ddc,A.ef)
x(A.ck,[B.dd9,B.dda,B.ddb,B.dd2,B.dd0,B.dcX,B.dcZ,B.dd_])})()
A.cg(b.typeUniverse,JSON.parse('{"aDQ":{"N":[],"k":[]},"brV":{"Q":["aDQ"]},"aa3":{"N":[],"k":[]},"aOJ":{"Q":["aa3"]}}'))
var y={B:A.L("A<R4>"),u:A.L("A<k>"),o:A.L("aQ<SX>"),w:A.L("q"),l:A.L("k"),b:A.L("@"),F:A.L("aDR?"),v:A.L("~")};(function constants(){D.aDm=new A.bY(Q.qA,null,C.cK,null,null)
D.aF6=new A.Sg(null,null,null,"Prompt / Version",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aF8=new A.Sg(null,null,null,"Link",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aFc=new A.Sg(null,null,null,"Platform (e.g. web, ios, droid)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bLA=new A.cs("Go Back",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLE=new A.cs("Add Platform",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLU=new A.cs("Save Changes",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLV=new A.cs("App Supported (IS_APP_SUPPORTED)",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLX=new A.cs("Registration Enabled (IS_REGISTRATION_ENABLED)",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMt=new A.cs("Manual Unit Creation (IS_UNIT_CREATION_ENABLED)",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMv=new A.cs("Access Denied",null,K.Cv,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["2xaUeniYVnC3B07QjrwEJvZ+p9Q="]=a.current})($__dart_deferred_initializers__);