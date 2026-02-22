((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,E,B={b78:function b78(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eVJ(d,e,f,g){return new B.abU(g,f,e)},
abU:function abU(d,e,f){this.d=d
this.e=e
this.a=f},
byO:function byO(){this.c=this.a=null},
f6m(){var x=b.G,w=x.window.sessionStorage.getItem("_auth_handoff")
if(w==null)return null
x.window.sessionStorage.removeItem("_auth_handoff")
x=y.g
return J.Yx(y.i.a(C.b4.pK(0,w,null)),new B.dEd(),x,x)},
dEd:function dEd(){},
awv(d){var x=0,w=A.q(y.f),v
var $async$awv=A.m(function(e,f){if(e===1)return A.n(f,w)
for(;;)switch(x){case 0:x=2
return A.f($.e3().gdn().Nz(d),$async$awv)
case 2:v=f.a
x=v!=null?3:4
break
case 3:x=5
return A.f(C.nn.N0(0,"refresh",J.al(v.e)),$async$awv)
case 5:case 4:return A.o(null,w)}})
return A.p($async$awv,w)}}
J=c[1]
A=c[0]
C=c[2]
D=c[177]
E=c[58]
B=a.updateHolder(c[33],B)
B.b78.prototype={}
B.abU.prototype={
L(){return new B.byO()}}
B.byO.prototype={
S(){this.a_()
this.qi()},
qi(){var x=0,w=A.q(y.f),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$qi=A.m(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:A.bG().$1("TransferPage: Handling Session...")
s=$.e3().gdn().c!=null
x=!s?2:3
break
case 2:x=4
return A.f(A.VY(),$async$qi)
case 4:s=e
case 3:x=!s?5:6
break
case 5:n=B.f6m()
x=n!=null?7:8
break
case 7:r=n.h(0,"refresh_token")
x=r!=null&&r.length!==0?9:10
break
case 9:v=12
A.bG().$1("TransferPage: Setting session from handoff...")
m=$.Mu().b
m===$&&A.b()
x=m.gdn().c!=null?15:16
break
case 15:x=17
return A.f(m.gdn().uN(),$async$qi)
case 17:case 16:x=18
return A.f(B.awv(r),$async$qi)
case 18:x=19
return A.f(A.ady(),$async$qi)
case 19:s=!0
v=1
x=14
break
case 12:v=11
i=u.pop()
q=A.ai(i)
A.bG().$1("[ERROR] "+("TransferPage: Handoff session error: "+A.t(q)))
x=20
return A.f(A.VY(),$async$qi)
case 20:k=e
s=k
x=14
break
case 11:x=1
break
case 14:case 10:case 8:case 6:if(!s){m=t.a.d
m=m!=null&&m.length!==0}else m=!1
x=m?21:22
break
case 21:v=24
A.bG().$1("TransferPage: Setting session from token...")
m=$.Mu().b
m===$&&A.b()
x=m.gdn().c!=null?27:28
break
case 27:x=29
return A.f(m.gdn().uN(),$async$qi)
case 29:case 28:m=t.a.d
m.toString
x=30
return A.f(B.awv(m),$async$qi)
case 30:x=31
return A.f(A.ady(),$async$qi)
case 31:s=!0
v=1
x=26
break
case 24:v=23
h=u.pop()
p=A.ai(h)
A.bG().$1("[ERROR] "+("TransferPage: Session set error: "+A.t(p)))
x=32
return A.f(A.VY(),$async$qi)
case 32:k=e
s=k
x=26
break
case 23:x=1
break
case 26:case 22:x=s?33:35
break
case 33:x=t.c!=null?36:37
break
case 36:v=39
A.bG().$1("TransferPage: Session valid ("+A.t(s)+"). calling handlePostLoginNavigation")
m=t.c
m.toString
j=t.a.e
x=42
return A.f(E.a6a(m,j==null?"/":j,!0),$async$qi)
case 42:v=1
x=41
break
case 39:v=38
g=u.pop()
o=A.ai(g)
A.bG().$1("[ERROR] "+("TransferPage: Smart nav failed. Error: "+A.t(o)))
m=t.c
x=m!=null?43:44
break
case 43:x=45
return A.f(D.eP(m,!1).f.Mn("/",y.a),$async$qi)
case 45:case 44:x=41
break
case 38:x=1
break
case 41:case 37:x=34
break
case 35:A.bG().$1("TransferPage: Session INVALID ("+A.t(s)+"). Redirecting to LoginRoute.")
m=t.c
if(m!=null){m=D.eP(m,!1).f
m.a71(0,new B.b78("LoginRoute",null,C.bW,C.bW,null,"",null),y.a)}case 34:return A.o(null,w)
case 1:return A.n(u.at(-1),w)}})
return A.p($async$qi,w)},
A(d){return C.mL}}
var z=a.updateTypes([])
B.dEd.prototype={
$2(d,e){return new A.aZ(d,J.al(e),y.p)},
$S:1399};(function inheritance(){var x=a.inherit
x(B.b78,A.Nl)
x(B.abU,A.N)
x(B.byO,A.P)
x(B.dEd,A.e8)})()
A.ch(b.typeUniverse,JSON.parse('{"b78":{"Nl":["~"]},"abU":{"N":[],"k":[]},"byO":{"P":["abU"]}}'))
var y={p:A.L("aZ<l,l>"),i:A.L("F<l,@>"),g:A.L("l"),a:A.L("M?"),f:A.L("~")}};
(a=>{a["ho00bGTvr0e0SZaF7SvgsPIBO9I="]=a.current})($__dart_deferred_initializers__);