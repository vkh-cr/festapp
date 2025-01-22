((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_200",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,I,M,B={
b_B(d){var x=0,w=A.l(y.p),v,u,t,s,r
var $async$b_B=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=y.b
x=3
return A.c($.jr().fZ("get_ticket",A.x(["scanned_id",d],y.w,s),s),$async$b_B)
case 3:r=f
s=J.a1(r)
if(!J.m(s.i(r,"code"),200))throw A.f(A.cU("Error retrieving ticket: "+A.o(s.i(r,"message"))))
u=H.crk(y.y.a(s.i(r,"ticket")))
if(s.a1(r,"order")&&s.i(r,"order")!=null)u.Q=H.coB(s.i(r,"order"))
if(s.a1(r,"products")&&s.i(r,"products")!=null){t=J.cb(y.i.a(s.i(r,"products")),new B.b_C(),y.x)
u.z=A.H(t,!0,t.$ti.h("a9.E"))}if(s.a1(r,"spot")&&s.i(r,"spot")!=null)u.y=H.cbP(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$b_B,w)},
b_C:function b_C(){},
cMX(d,e){return new B.CA(d,e)},
a2E:function a2E(d,e){this.a=d
this.b=e},
CA:function CA(d,e){this.c=d
this.a=e},
aLf:function aLf(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=f
_.c=_.a=null},
bZ2:function bZ2(){},
bZ3:function bZ3(d){this.a=d},
bZ4:function bZ4(d){this.a=d},
bZ5:function bZ5(){},
bZ6:function bZ6(){}},D,E,F,H,K,N,O,P,Q,G,R,S
J=c[1]
A=c[0]
C=c[2]
L=c[199]
I=c[188]
M=c[200]
B=a.updateHolder(c[22],B)
D=c[272]
E=c[33]
F=c[195]
H=c[79]
K=c[197]
N=c[163]
O=c[175]
P=c[194]
Q=c[173]
G=c[178]
R=c[196]
S=c[198]
B.a2E.prototype={
G(){return"ScanState."+this.b}}
B.CA.prototype={
M(){return new B.aLf(D.a1g,new N.eM(P.bg,$.ai()),E.cod(F.Gt,A.a([C.lA],y.l)))},
gbS(d){return this.c}}
B.aLf.prototype={
l(){this.w.l()
var x=this.r
x.Y$=$.ai()
x.W$=0
this.aj()},
aX(){var x=0,w=A.l(y.v),v=this
var $async$aX=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.cG()
$.zq().adU("https://unpkg.com/@zxing/library@0.21.3")
return A.j(null,w)}})
return A.k($async$aX,w)},
a75(){var x,w,v,u,t,s=this,r=null,q=s.e
if(q==null)return A.cj(new A.af(F.GO,Q.bq(F.a3h,r),r),r,r)
x=s.f
if(x===D.a1c)w=R.k9
else{if(x!==D.a1e)return C.a5
w=F.HE}q=q.z
q=q!=null?new A.P(q,new B.bZ2(),A.V(q).h("P<1,e>")).bY(0," | "):""
x=s.e.Q.ZH()
v=J.au(s.e.d)
u=s.e.e
u.toString
t=y.u
return new A.af(I.bW,A.aU(A.a([A.b8(A.a([A.a5(q+"\n"+x+"   "+v+"   "+u,r,r,2,r,r,r,r,F.a37,r,r,r,r,r),O.mo(r,new A.M(30,5)),K.nn,G.c1(w,C.r,r,r)],t),C.k,C.i,C.l,r)],t),C.k,C.i,C.l,r,C.u),r)},
A(d){var x=this,w=null,v=x.e==null?E.cfa(d):x.a_E(x.f),u=G.cV(w,w,w,w,w,G.c1(S.hm,C.cg,w,w),w,w,w,new B.bZ3(d),w,w,w,w,w),t=y.u
return G.fu(w,v,A.kX(!0,A.db(C.af,A.a([A.aU(A.a([new A.af(I.bW,A.b8(A.a([u,A.cO(A.a5("",w,w,w,w,w,w,w,A.ba(w,w,C.cg,w,w,w,w,w,w,w,w,20,w,w,C.aq,w,w,!0,w,w,w,w,w,w,w,w),C.bs,w,w,w,w),1,w)],t),C.k,C.i,C.l,w),w),x.a75(),A.cO(E.coc(x.w,L.Et,new B.bZ4(x)),1,w)],t),C.k,C.i,C.l,w,C.u)],t),C.D,C.ab,w),!0,C.Y,!0,!0),w,w,w,w)},
vw(d){return this.aIV(d)},
aIV(d){var x=0,w=A.l(y.v),v,u=this,t,s
var $async$vw=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=u.e
x=s==null?3:4
break
case 3:x=5
return A.c(B.b_B(d),$async$vw)
case 5:s=u.e=f
case 4:t=s!=null
if(t){s=s.e
s=s==="sent"||s==="paid"}else s=!1
if(s){u.f=D.a1c
u.E(new B.bZ5())
E.AF()
x=1
break}else if(t){u.f=D.a1e
E.AF()
E.AF()
u.E(new B.bZ6())
x=1
break}u.f=D.a1g
case 1:return A.j(v,w)}})
return A.k($async$vw,w)},
a_E(d){switch(d.a){case 0:return K.Wv
case 2:return F.Wu
case 1:break}return M.mU}}
var z=a.updateTypes(["h6(@)","e(h6)"])
B.b_C.prototype={
$1(d){return H.ceo(d)},
$S:z+0}
B.bZ2.prototype={
$1(d){return d.mc()},
$S:z+1}
B.bZ3.prototype={
$0(){G.fD(this.a,!1).f.r8(null)},
$S:0}
B.bZ4.prototype={
$1(d){return this.aEy(d)},
aEy(d){var x=0,w=A.l(y.v),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=E.cnp(d.a)
if(s==null){x=1
break}t=s.z
A.fN().$1(t)
x=3
return A.c(u.a.vw(J.au(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:331}
B.bZ5.prototype={
$0(){},
$S:0}
B.bZ6.prototype={
$0(){},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bJ,[B.b_C,B.bZ2,B.bZ4])
w(B.a2E,A.e2)
w(B.CA,A.G)
w(B.aLf,A.K)
x(A.cg,[B.bZ3,B.bZ5,B.bZ6])})()
A.br(b.typeUniverse,JSON.parse('{"CA":{"G":[],"d":[]},"aLf":{"K":["CA"]}}'))
var y={l:A.y("p<iI>"),u:A.y("p<d>"),i:A.y("z<@>"),y:A.y("a7<e,@>"),x:A.y("h6"),w:A.y("e"),p:A.y("ih"),b:A.y("@"),v:A.y("~")};(function constants(){D.a1c=new B.a2E(0,"signedIn")
D.a1e=new B.a2E(1,"notSignedIn")
D.a1g=new B.a2E(2,"nothing")})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_200",e:"endPart",h:b})})($__dart_deferred_initializers__,"JFktUGGtqYzb/l9jhNQqsA6GS2U=");