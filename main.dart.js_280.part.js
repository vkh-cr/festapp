((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_280",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,K,O,P,L,M,Q,H,I,R,S,T,U,A={
dBF(d,e,f,g){var w,v
if(e){w=[f]
C.b.H(w,g)
g=w}v=x.z
return A.cRc(B.dmG(d,B.aW(J.b7(g,A.dJS(),v),!0,v),null))},
don(d,e,f){var w=null
if(d<0||d>f)throw B.o(B.fK(d,0,f,w,w))
if(e<d||e>f)throw B.o(B.fK(e,d,f,w,w))},
cRh(d,e,f){var w
try{if(Object.isExtensible(d)&&!Object.prototype.hasOwnProperty.call(d,e)){Object.defineProperty(d,e,{value:f})
return!0}}catch(w){}return!1},
d5g(d,e){if(Object.prototype.hasOwnProperty.call(d,e))return d[e]
return null},
cRc(d){if(d==null||typeof d=="string"||typeof d=="number"||B.kx(d))return d
if(d instanceof A.pM)return d.a
if(A.d73(d))return d
if(x.Q.b(d))return d
if(x.k.b(d))return B.n7(d)
if(x.Z.b(d))return A.d5f(d,"$dart_jsFunction",new A.cH2())
return A.d5f(d,"_$dart_jsObject",new A.cH3($.cTL()))},
d5f(d,e,f){var w=A.d5g(d,e)
if(w==null){w=f.$1(d)
A.cRh(d,e,w)}return w},
cRb(d){if(d==null||typeof d=="string"||typeof d=="number"||typeof d=="boolean")return d
else if(d instanceof Object&&A.d73(d))return d
else if(d instanceof Object&&x.Q.b(d))return d
else if(d instanceof Date)return new B.aF(B.jR(d.getTime(),0,!1),0,!1)
else if(d.constructor===$.cTL())return d.o
else return A.d6c(d)},
d6c(d){if(typeof d=="function")return A.cRt(d,$.OB(),new A.cIA())
if(d instanceof Array)return A.cRt(d,$.cTD(),new A.cIB())
return A.cRt(d,$.cTD(),new A.cIC())},
cRt(d,e,f){var w=A.d5g(d,e)
if(w==null||!(d instanceof Object)){w=f.$1(d)
A.cRh(d,e,w)}return w},
cH2:function cH2(){},
cH3:function cH3(d){this.a=d},
cIA:function cIA(){},
cIB:function cIB(){},
cIC:function cIC(){},
pM:function pM(d){this.a=d},
S9:function S9(d){this.a=d},
JX:function JX(d,e){this.a=d
this.$ti=e},
X1:function X1(){},
cVh(d,e,f){var w=null
return new A.HW(B.cMq(d,w,w,w,w,36,w,w,C.Ky,w,88,f,w,w,C.BA),e,w)},
HW:function HW(d,e,f){this.w=d
this.b=e
this.a=f},
Sx:function Sx(d,e,f,g,h){var _=this
_.c=d
_.y=e
_.dx=f
_.fx=g
_.a=h},
cXZ(d){var w=B.bF("(background-color|color)\\s*:\\s*[^;]+;?\\s*",!1,!1,!1)
return B.dt(d,w,"")},
cXY(d){var w,v,u,t,s,r,q,p,o,n=B.bF("\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b",!0,!1,!1),m=B.bF("\\b((http|https)://|www\\.)[^\\s/$.?#].\\S*",!1,!1,!1),l=B.bF("\\b(\\+?[0-9]{1,4}[-.\\s]+)?(\\(?\\d{2,3}\\)?[-.\\s]+)?\\d{3}[-.\\s]+\\d{3}[-.\\s]+\\d{3,4}\\b",!0,!1,!1),k=W.YA(d),j=new A.bpR(),i=k.gqq(0)
i.toString
i=F.YC(i,"*")
w=i.length
v=x.aX
u=v.i("w.E")
t=x.d
s=0
for(;s<i.length;i.length===w||(0,B.M)(i),++s){r=i[s]
if(r.x==="a")continue
q=r.c
if(q===$){p=B.a([],t)
r.c!==$&&B.ac()
q=r.c=new F.hq(r,p)}p=B.B(new B.df(q,v),u)
C.b.aT(p,new A.bpS(n,j))}i=k.gqq(0)
i.toString
i=F.YC(i,"*")
w=i.length
s=0
for(;s<i.length;i.length===w||(0,B.M)(i),++s){r=i[s]
if(r.x==="a")continue
q=r.c
if(q===$){p=B.a([],t)
r.c!==$&&B.ac()
q=r.c=new F.hq(r,p)}p=B.B(new B.df(q,v),u)
C.b.aT(p,new A.bpT(m,j))}i=k.gqq(0)
i.toString
i=F.YC(i,"*")
w=i.length
s=0
for(;s<i.length;i.length===w||(0,B.M)(i),++s){r=i[s]
if(r.x==="a")continue
q=r.c
if(q===$){p=B.a([],t)
r.c!==$&&B.ac()
q=r.c=new F.hq(r,p)}p=B.B(new B.df(q,v),u)
C.b.aT(p,new A.bpU(l,j))}o=new B.dd("")
k.gqq(0).UP(o)
i=o.a
return i.charCodeAt(0)==0?i:i},
bpR:function bpR(){},
bpS:function bpS(d,e){this.a=d
this.b=e},
bpQ:function bpQ(d,e){this.a=d
this.b=e},
bpT:function bpT(d,e){this.a=d
this.b=e},
bpP:function bpP(d,e){this.a=d
this.b=e},
bpU:function bpU(d,e){this.a=d
this.b=e},
bpO:function bpO(d,e){this.a=d
this.b=e},
cXX(d,e){return new A.a2T(e,d,null)},
a2T:function a2T(d,e,f){this.c=d
this.d=e
this.a=f},
aPX:function aPX(d,e){var _=this
_.d=$
_.e=!0
_.f=d
_.r=e
_.c=_.a=null},
cgD:function cgD(d){this.a=d},
cgE:function cgE(){},
cgF:function cgF(d){this.a=d},
cgC:function cgC(d){this.a=d},
cgB:function cgB(d){this.a=d},
cgx:function cgx(d){this.a=d},
cgv:function cgv(){},
cgw:function cgw(){},
cgA:function cgA(){},
cgz:function cgz(){},
cgy:function cgy(){},
a6w:function a6w(d,e,f){this.c=d
this.e=e
this.a=f},
d0v(d){var w=new A.FH(null,null),v=J.a1(d)
w.a=v.h(d,"index")
w.b=v.h(d,"length")
return w},
d5h(d){return B.fe(B.JT(d,new A.cHB(),x.S),0,null)},
a6Y:function a6Y(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.y=i
_.z=j
_.Q=k
_.as=l
_.at=m
_.ax=n
_.ay=o
_.ch=p
_.CW=q
_.cx=r
_.cy=s
_.db=t
_.a=u},
a6Z:function a6Z(){var _=this
_.d=$
_.e=""
_.f=!0
_.r=$
_.w=!1
_.x=""
_.Q=_.z=_.y=$
_.as=!1
_.c=_.a=null},
bFn:function bFn(d){this.a=d},
bFm:function bFm(d){this.a=d},
bFk:function bFk(d){this.a=d},
bFj:function bFj(d){this.a=d},
bFl:function bFl(d){this.a=d},
bF9:function bF9(d){this.a=d},
bF8:function bF8(){},
bFc:function bFc(d){this.a=d},
bFb:function bFb(d){this.a=d},
bFd:function bFd(d){this.a=d},
bFe:function bFe(d){this.a=d},
bFf:function bFf(d,e){this.a=d
this.b=e},
bFg:function bFg(d){this.a=d},
bFh:function bFh(d){this.a=d},
bFi:function bFi(d){this.a=d},
bFa:function bFa(){},
aCm:function aCm(){var _=this
_.d=_.c=_.b=_.a=null
_.e=!0},
bF7:function bF7(d){this.a=d},
bF6:function bF6(d){this.a=d},
FH:function FH(d,e){this.a=d
this.b=e},
cHB:function cHB(){},
dvV(d,e,f,g,h,i,j){return new A.MK(j,g,h,i,f,e,d,null)},
aaC:function aaC(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.ay=m
_.a=n},
aaD:function aaD(d,e,f){var _=this
_.d=d
_.e=e
_.w=_.r=_.f=$
_.x=f
_.c=_.a=null},
bUF:function bUF(){},
bUp:function bUp(d){this.a=d},
bUq:function bUq(d){this.a=d},
bUr:function bUr(d){this.a=d},
bUs:function bUs(d,e){this.a=d
this.b=e},
bUn:function bUn(d){this.a=d},
bUo:function bUo(){},
bUm:function bUm(d){this.a=d},
bUl:function bUl(d){this.a=d},
bUk:function bUk(){},
bUj:function bUj(d){this.a=d},
bUi:function bUi(){},
bUy:function bUy(d){this.a=d},
bUx:function bUx(d,e){this.a=d
this.b=e},
bUw:function bUw(){},
bUv:function bUv(d){this.a=d},
bUu:function bUu(d,e){this.a=d
this.b=e},
bUt:function bUt(){},
bUA:function bUA(d,e){this.a=d
this.b=e},
bUz:function bUz(d){this.a=d},
bUE:function bUE(d){this.a=d},
bUD:function bUD(d){this.a=d},
bUB:function bUB(d){this.a=d},
bUC:function bUC(d,e){this.a=d
this.b=e},
MK:function MK(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
k3:function k3(d,e,f){this.c=d
this.a=e
this.b=f},
dne(d){var w=B.bF("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",!0,!1,!1)
if(!w.b.test(d.toLowerCase()))return C.C.S()
d=B.dt(d.toUpperCase(),"#","")
return B.dm(d.length===6?"FF"+d:d,16)},
bp1(d){var w=A.dne(d)
return new A.av5((C.c.W(w,24)&255)/255,(C.c.W(w,16)&255)/255,(C.c.W(w,8)&255)/255,(w&255)/255,C.h)},
aay(d){var w,v=""
try{v="rgba("+C.b.bv(B.a([d.gSf(),d.gLg(),d.gP9(),B.pg(C.e.bl(d.geX(d),1))],x.a),",")+")"}catch(w){v="rgba(0,0,0,0)"}return v},
av5:function av5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a_z:function a_z(d,e){this.c=d
this.a=e},
b7O:function b7O(d){this.a=d},
b7N:function b7N(d,e){this.a=d
this.b=e},
a1n:function a1n(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aOC:function aOC(){this.d=$
this.c=this.a=null},
ca6:function ca6(d,e){this.a=d
this.b=e},
ca4:function ca4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ca5:function ca5(d,e){this.a=d
this.b=e},
ca2:function ca2(d,e){this.a=d
this.b=e},
ca0:function ca0(d,e){this.a=d
this.b=e},
ca1:function ca1(d,e){this.a=d
this.b=e},
ca3:function ca3(d,e){this.a=d
this.b=e},
tk:function tk(d,e){this.a=d
this.b=e},
asS(d,e,f,g,h,i){return new A.a1r(d,e,f,g,i,h)},
a1r:function a1r(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.Q=h
_.a=i},
a1s:function a1s(d,e,f){var _=this
_.e=d
_.r=_.f=null
_.w=$
_.x=e
_.y=f
_.c=_.a=null},
bhS:function bhS(d){this.a=d},
bhM:function bhM(d,e){this.a=d
this.b=e},
bhO:function bhO(d){this.a=d},
bhN:function bhN(d,e){this.a=d
this.b=e},
bhR:function bhR(d,e){this.a=d
this.b=e},
bhP:function bhP(d){this.a=d},
bhQ:function bhQ(){},
aOK:function aOK(){},
an2:function an2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cVg(d,e,f,g,h,i){return new A.ZY(e,g,h,d,f)},
ZY:function ZY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.a=h},
aMn:function aMn(){this.c=this.a=null},
hM:function hM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
pw:function pw(d,e){this.a=d
this.b=e},
azU:function azU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
apg:function apg(d,e){this.b=d
this.a=e},
aHl:function aHl(d,e){this.b=d
this.a=e},
aBL:function aBL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
o8:function o8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bsy:function bsy(d,e){this.a=d
this.b=e},
brx:function brx(d){this.a=d},
RZ:function RZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aQw:function aQw(d){var _=this
_.d=d
_.e=""
_.f=$
_.c=_.a=null},
cic:function cic(d,e){this.a=d
this.b=e},
ci8:function ci8(d){this.a=d},
ci7:function ci7(d,e){this.a=d
this.b=e},
ci9:function ci9(){},
cia:function cia(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ci5:function ci5(d,e,f){this.a=d
this.b=e
this.c=f},
ci6:function ci6(){},
cib:function cib(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aIl:function aIl(d,e){this.a=d
this.b=e},
Va:function Va(d,e,f){this.c=d
this.d=e
this.a=f},
aix:function aix(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=f
_.c=_.a=null},
czF:function czF(d,e){this.a=d
this.b=e},
czE:function czE(){},
czG:function czG(d){this.a=d},
czD:function czD(d){this.a=d},
Wf:function Wf(d,e,f){this.e=d
this.c=e
this.a=f},
We:function We(d,e,f,g){var _=this
_.G=d
_.F$=e
_.dy=f
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=g
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
ac_:function ac_(d,e,f){var _=this
_.a=$
_.b=d
_.c=e
_.X$=0
_.a6$=f
_.am$=_.bf$=0},
b9w:function b9w(){},
v4:function v4(d,e){this.a=d
this.b=e},
cNO(d,e,f,g){var w,v,u,t=C.d.bj(d).toLowerCase()
if(!(C.d.b8(t,B.bF("<!DOCTYPE html>",!1,!1,!1))&&C.d.p(t,B.bF("<html",!1,!1,!1))&&C.d.p(t,B.bF("</html>",!1,!1,!1))))t='    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>IFrame '+g+"</title>\n    </head>\n    <body>\n    "+d+"\n    </body>\n    </html>\n    "
else t=d
w=x.N
t=A.cY0(t,B.dz(["parent.connect_js_to_flutter"+g+" && parent.connect_js_to_flutter"+g+"(window)"],w),D.awF)
if(f.gdl(f)){v=B.aX(w)
for(w=f.gaa(f);w.q();){u=w.gL(0)
u.gbOo()
v.t(0,u.gbOo())}t=A.cY0(t,v,D.awD)}return t},
cY0(d,e,f){return A.cY_(f,d,"\n<script>\n"+e.hw(0,new A.bq4())+"\n</script>\n")},
cY1(d,e,f){var w=B.bF("<"+d+"([^>]*)>",!1,!1,!1)
B.TJ(0,0,e.length,"startIndex")
return B.dLy(e,w,new A.bq5(d,f),0)},
cY_(d,e,f){var w
switch(d.a){case 2:return A.cY1("head",e,f)
case 0:return A.cY1("body",e,f)
case 3:w=C.d.di(e,"</head>")
return C.d.ag(e,0,w)+f+"\n"+C.d.d8(e,w)
case 1:w=C.d.di(e,"</body>")
return C.d.ag(e,0,w)+f+"\n"+C.d.d8(e,w)}},
a1y:function a1y(d,e){this.a=d
this.b=e},
bq4:function bq4(){},
bq5:function bq5(d,e){this.a=d
this.b=e},
a9s:function a9s(d,e){this.a=d
this.b=e},
ava:function ava(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
bZA:function bZA(){},
D1:function D1(){},
anY:function anY(){},
aoV:function aoV(){},
aJ_:function aJ_(){},
qf:function qf(d,e){this.c=d
this.a=e},
Nq:function Nq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bt4:function bt4(d,e){this.a=d
this.b=e},
b4b:function b4b(d,e){this.a=d
this.b=e},
abZ:function abZ(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.y=i
_.z=j
_.at=k
_.ax=l
_.CW=m
_.a=n},
ajC:function ajC(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cG4:function cG4(d){this.a=d},
cG1:function cG1(d){this.a=d},
cFX:function cFX(d,e){this.a=d
this.b=e},
cFW:function cFW(d){this.a=d},
cG0:function cG0(d){this.a=d},
cFY:function cFY(){},
cFZ:function cFZ(d){this.a=d},
cG_:function cG_(){},
cG2:function cG2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cG3:function cG3(d,e){this.a=d
this.b=e},
d73(d){return x.B.b(d)||x.D.b(d)||x.l.b(d)||x.t.b(d)||x.V.b(d)||x.cg.b(d)||x.bj.b(d)},
cWO(d,e,f,g,h,i,j,k,l,m,n){var w=null
return new B.Ds(i,m,w,w,j,w,k,8,l,g,w,w,24,!0,!1,48,f,w,!1,e,w,w,w,d,w,w,!1,w,n.i("Ds<0>"))},
a_1(d,e){var w=null,v=B.bs(8)
return new B.a0(C.aq,new A.Sx(d,C.ax,B.H(e,w,w,w,w,w,w,w,B.af(w,w,C.fj,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w,w,w),new B.d0(v,C.x),w),w)},
d16(d){var w=C.a2N.h(0,(d==null?C.a8:d).a)
w.toString
return B.dt(w,"w","")},
du4(d){var w=B.dw(d,0,null)
if(C.d.p(w.goZ(w).toLowerCase(),"youtube"))return A.du3(d)
else if(C.d.p(w.goZ(w).toLowerCase(),"vimeo"))return A.du2(d)
else return d},
du3(d){var w,v,u,t
if(!C.d.p(d,"http")&&d.length===11)return d
C.d.bj(d)
for(w=[B.bF("^https:\\/\\/(?:www\\.|m\\.)?youtube\\.com\\/watch\\?v=([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bF("^https:\\/\\/(?:music\\.)?youtube\\.com\\/watch\\?v=([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bF("^https:\\/\\/(?:www\\.|m\\.)?youtube\\.com\\/shorts\\/([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bF("^https:\\/\\/(?:www\\.|m\\.)?youtube(?:-nocookie)?\\.com\\/embed\\/([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bF("^https:\\/\\/youtu\\.be\\/([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1)],v=null,u=0;u<5;++u){t=w[u].t0(d)
if(t!=null&&t.b.length-1>=1)v=t.b[1]}if(v==null)return null
return"https://www.youtube.com/embed/"+v},
du2(d){var w=B.bF("(?:http|https)?:?\\/?\\/?(?:www\\.)?(?:player\\.)?vimeo\\.com\\/(?:channels\\/(?:\\w+\\/)?|groups\\/(?:[^\\/]*)\\/videos\\/|video\\/|)(\\d+)(?:|\\/\\?)",!1,!1,!1).t0(d),v=w==null?null:w.b[1]
if(v==null)return null
return"https://player.vimeo.com/video/"+v}},D,V,F,E,N,G,W,X,Y
J=c[1]
B=c[0]
C=c[2]
K=c[184]
O=c[205]
P=c[234]
L=c[219]
M=c[155]
Q=c[268]
H=c[304]
I=c[113]
R=c[310]
S=c[134]
T=c[185]
U=c[305]
A=a.updateHolder(c[43],A)
D=c[307]
V=c[311]
F=c[156]
E=c[308]
N=c[161]
G=c[137]
W=c[124]
X=c[309]
Y=c[269]
A.pM.prototype={
h(d,e){if(typeof e!="string"&&typeof e!="number")throw B.o(B.cl("property is not a String or num",null))
return A.cRb(this.a[e])},
m(d,e,f){if(typeof e!="string"&&typeof e!="number")throw B.o(B.cl("property is not a String or num",null))
this.a[e]=A.cRc(f)},
k(d,e){if(e==null)return!1
return e instanceof A.pM&&this.a===e.a},
j(d){var w,v
try{w=String(this.a)
return w}catch(v){w=this.r9(0)
return w}},
vw(d,e){var w=this.a,v=e==null?null:B.aW(new B.J(e,A.dJT(),B.T(e).i("J<1,@>")),!0,x.z)
return A.cRb(w[d].apply(w,v))},
bDW(d){return this.vw(d,null)},
gv(d){return 0}}
A.S9.prototype={}
A.JX.prototype={
a6l(d){var w=d<0||d>=this.gA(0)
if(w)throw B.o(B.fK(d,0,this.gA(0),null,null))},
h(d,e){if(B.hf(e))this.a6l(e)
return this.aUw(0,e)},
m(d,e,f){if(B.hf(e))this.a6l(e)
this.amJ(0,e,f)},
gA(d){var w=this.a.length
if(typeof w==="number"&&w>>>0===w)return w
throw B.o(B.ah("Bad JsArray length"))},
sA(d,e){this.amJ(0,"length",e)},
t(d,e){this.vw("push",[e])},
H(d,e){this.vw("push",e instanceof Array?e:B.aW(e,!0,x.z))},
h2(d,e){this.a6l(e)
return J.v(this.vw("splice",[e,1]),0)},
kG(d){if(this.gA(0)===0)throw B.o(B.ja(-1))
return this.bDW("pop")},
ej(d,e,f,g,h){var w,v
A.don(e,f,this.gA(0))
w=f-e
if(w===0)return
if(h<0)throw B.o(B.cl(h,null))
v=[e,w]
C.b.H(v,J.HF(g,h).n4(0,w))
this.vw("splice",v)},
ia(d,e,f,g){return this.ej(0,e,f,g,0)},
dR(d,e){this.vw("sort",e==null?[]:[e])},
$ib2:1,
$iw:1,
$iD:1}
A.X1.prototype={
m(d,e,f){return this.aUx(0,e,f)}}
A.HW.prototype={
uQ(d,e,f){return new A.HW(this.w,f,null)},
ef(d){return!this.w.k(0,d.w)}}
A.Sx.prototype={
gkl(d){return this.c!=null},
B(d){var w,v,u,t,s=this,r=null,q=B.C(d),p=B.cMr(d),o=p.ajn(s),n=q.ok.as
n.toString
n=n.ca(p.a4e(s))
w=p.y
if(w==null)w=p.a4e(s).R(0.12)
v=p.z
if(v==null)v=p.a4e(s).R(0.04)
u=p.aOM(s)
t=new B.ab(p.a,1/0,p.b,1/0).aEd(r,r)
return S.d_U(C.M,!1,s.dx,C.k,t,0,2,!0,o,w,4,r,q.cx,8,v,4,q.f,r,r,r,s.c,u,s.fx,q.id,n,q.Q)}}
A.a2T.prototype={
M(){return new A.aPX(B.a([D.bLt,D.bLw,D.bLz,D.bLy,D.aeE,D.aeI,D.aeG],x.f),C.fj)}}
A.aPX.prototype={
T(){var w,v=this
v.ah()
w=v.a
v.d=w.c
w.d.RE(new A.cgD(v))
v.a.d.bQU(new A.cgE())
B.de(C.j2,new A.cgF(v))},
l(){this.a.d.l()
this.ai()},
B(d){var w=this,v=null,u=w.a.d,t=x.p,s=B.a([],t),r=u.b,q=w.a.d
return B.aq(B.a([new B.ao(50,v,new A.aaC(w.f,u,s,25,C.ax,w.r,T.BY,C.aq,C.G,C.j,r),v),new B.f_(1,C.h0,new A.a6Y(200,v,!0,q,new A.cgw(),C.ay,new A.cgx(w),new A.cgy(),new A.cgz(),new A.cgA(),D.bI0,D.avC,D.bJ8,C.F,C.avV,!1,new A.cgB(w),q.a),v)],t),C.H,C.f,C.i,0,v)},
tD(d){return this.aR3(d)},
aR3(d){var w=0,v=B.k(x.H),u=this
var $async$tD=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:w=2
return B.d(u.a.d.Lw(d),$async$tD)
case 2:return B.i(null,v)}})
return B.j($async$tD,v)}}
A.a6w.prototype={
B(d){return $.dac().aCR(this.c,!1,this.a)}}
A.a6Y.prototype={
M(){return new A.a6Z()}}
A.a6Z.prototype={
T(){var w,v=this
v.y=$.OK().aIv("packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js")
w=v.a.ax.d
if(w==null)w="Roboto"
v.z=w
v.Q=B.rR(4,w,C.aA,!1)
w=v.a
w.toString
v.f=!0
v.r=w.d
v.ah()},
l(){var w,v=this.d
v===$&&B.b()
w=v.b
w.a6$=$.a9()
w.X$=0
v.fF()
this.ai()},
B(d){var w=this.y
w===$&&B.b()
return F.cNE(new A.bFn(this),w,x.z)},
b24(d,e){var w,v,u,t,s,r,q=this
q.e=q.as_(e)
w=C.c.j(B.dU(q.a.r.b))
v=q.e
u=q.r
u===$&&B.b()
t=B.dz([new A.v4("EditorResizeCallback",new A.bFc(q)),new A.v4("UpdateFormat",new A.bFd(q)),new A.v4("OnTextChanged",new A.bFe(q)),new A.v4("FocusChanged",new A.bFf(q,d)),new A.v4("OnEditingCompleted",new A.bFg(q)),new A.v4("OnSelectionChanged",new A.bFh(q)),new A.v4("EditorLoaded",new A.bFi(q))],x.C)
s=q.as
r=q.a.db.$1(d)
return new B.cj(C.ad,null,C.ac,C.v,B.a([new A.abZ(v,D.adA,e,u,new A.bFj(q),t,!1,new A.bFk(q),new A.bFl(q),D.amw,new B.ck(w,x.X)),B.jy(r,!s)],x.p),null)},
W2(){var w=0,v=B.k(x.N),u,t=this,s
var $async$W2=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qs("getHtmlText",[]),$async$W2)
case 3:u=e
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$W2,v)},
Wb(){var w=0,v=B.k(x.z),u,t=this,s
var $async$Wb=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qs("getSelectionRange",[]),$async$Wb)
case 3:u=e
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$Wb,v)},
Y0(d,e){return this.bv9(d,e)},
bv9(d,e){var w=0,v=B.k(x.z),u,t=this,s
var $async$Y0=B.f(function(f,g){if(f===1)return B.h(g,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qs("setSelection",[d,e]),$async$Y0)
case 3:u=g
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$Y0,v)},
Ol(d){return this.bv1(d)},
bv1(d){var w=0,v=B.k(x.z),u,t=this,s
var $async$Ol=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qs("setHtmlText",[d]),$async$Ol)
case 3:u=f
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$Ol,v)},
VF(d){return this.b88(d)},
b88(d){var w=0,v=B.k(x.z),u,t=this,s
var $async$VF=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qs("embedVideo",[d]),$async$VF)
case 3:u=f
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$VF,v)},
VE(d){return this.b87(d)},
b87(d){var w=0,v=B.k(x.z),u,t=this,s
var $async$VE=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qs("embedImage",[d]),$async$VE)
case 3:u=f
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$VE,v)},
VG(d){return this.b8f(!0)},
b8f(d){var w=0,v=B.k(x.z),u,t=this,s
var $async$VG=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qs("enableEditor",[!0]),$async$VG)
case 3:u=f
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$VG,v)},
XZ(d,e){return this.bv0(d,e)},
bv0(d,e){var w=0,v=B.k(x.z),u,t=2,s=[],r=this,q,p,o,n
var $async$XZ=B.f(function(f,g){if(f===1){s.push(g)
w=t}while(true)switch(w){case 0:t=4
p=r.d
p===$&&B.b()
w=7
return B.d(p.qs("setFormat",[d,e]),$async$XZ)
case 7:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=B.ag(n)
J.ap(q)
w=6
break
case 3:w=2
break
case 6:case 1:return B.i(u,v)
case 2:return B.h(s.at(-1),v)}})
return B.j($async$XZ,v)},
WJ(d,e){return this.bjB(d,e)},
bjB(d,e){var w=0,v=B.k(x.z),u,t=this,s
var $async$WJ=B.f(function(f,g){if(f===1)return B.h(g,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qs("insertTable",[e,d]),$async$WJ)
case 3:u=g
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$WJ,v)},
X4(d){return this.blH(d)},
blH(d){var w=0,v=B.k(x.z),u,t=this,s
var $async$X4=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qs("modifyTable",[d.b]),$async$X4)
case 3:u=f
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$X4,v)},
Xy(){var w=0,v=B.k(x.z),u,t=this,s
var $async$Xy=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qs("undo",[]),$async$Xy)
case 3:u=e
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$Xy,v)},
Xx(){var w=0,v=B.k(x.z),u,t=this,s
var $async$Xx=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qs("redo",[]),$async$Xx)
case 3:u=e
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$Xx,v)},
Va(){var w=0,v=B.k(x.z),u,t=this,s
var $async$Va=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qs("clearHistory",[]),$async$Va)
case 3:u=e
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$Va,v)},
as_(c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2="0",b3="px !important;\n          padding-right:",b4="px !important;\n          padding-top:",b5="px !important;\n          padding-bottom:",b6=";\n          font-size: ",b7="px;\n          color:",b8=";\n          background-color:",b9=";\n          font-weight: ",c0=b1.Q
c0===$&&B.b()
w=b1.x
v=b1.z
v===$&&B.b()
u=A.aay(b1.a.y)
t=A.aay(b1.a.y)
s=b1.z
r=b1.a.cx.a
r=B.n(r)
q=b1.a.cx.c
q=B.n(q)
p=b1.a.cx.b
p=B.n(p)
o=b1.a.cx.d
o=B.n(o)
n=b1.a
m=n.CW
n=n.ch.r
n=B.n(n==null?"14":n)
l=b1.a.ch.b
l=A.aay(l==null?C.n:l)
k=A.aay(b1.a.y)
j=b1.a.ch
i=j.x
if(i==null)i=E.DE
j=A.d16(j.w)
h=b1.z
g=b1.a.ax
f=g.x
if(f==null)f=E.DE
g=g.r
g=B.n(g==null?"14":g)
e=b1.a.ax.b
e=A.aay(e==null?C.n:e)
d=A.aay(b1.a.y)
a0=b1.a.ax
a0=A.d16(a0.w)
a1=b1.a.ay.a
a1=B.n(a1)
a2=b1.a.ay.c
a2=B.n(a2)
a3=b1.a.ay.b
a3=B.n(a3)
a4=b1.a.ay.d
a4=B.n(a4)
a5=b1.z
a6=b1.a.ay.a
a6=B.n(a6)
a7=b1.a.ay.c
a7=B.n(a7)
a8=b1.a.ay.b
a8=B.n(a8)
a9=b1.a.ay.d
a9=B.n(a9)
b0=""+b1.a.d
return'   <!DOCTYPE html>\n        <html>\n        <head>\n        <link href="https://fonts.googleapis.com/css?family='+c0+':400,400i,700,700i" rel="stylesheet">\n        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">    \n        \n       <!-- Include the Quill library --> \n        <script>\n        '+w+"\n        </script>\n        <style>\n        /*!\n       * Quill Editor v2.0.0-dev.3\n       * https://quilljs.com/\n       * Copyright (c) 2014, Jason Chen\n       * Copyright (c) 2013, salesforce.com\n       */.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container:not(.ql-disabled) li[data-list=checked]>.ql-ui,.ql-container:not(.ql-disabled) li[data-list=unchecked]>.ql-ui{cursor:pointer}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{box-sizing:border-box;counter-reset:list-0;line-height:1.42;height:100%;outline:0;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre{margin:0;padding:0}.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor p{counter-reset:list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor table{border-collapse:collapse}.ql-editor td{border:1px solid #000;padding:2px 5px}.ql-editor ol{padding-left:1.5em}.ql-editor li{list-style-type:none;padding-left:1.5em;position:relative}.ql-editor li>.ql-ui:before{display:inline-block;margin-left:-1.5em;margin-right:.3em;text-align:right;white-space:nowrap;width:1.2em}.ql-editor li[data-list=checked]>.ql-ui,.ql-editor li[data-list=unchecked]>.ql-ui{color:#777}.ql-editor li[data-list=bullet]>.ql-ui:before{content:'\\2022'}.ql-editor li[data-list=checked]>.ql-ui:before{content:'\\2611'}.ql-editor li[data-list=unchecked]>.ql-ui:before{content:'\\2610'}.ql-editor li[data-list=ordered]{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor li[data-list=ordered]>.ql-ui:before{content:counter(list-0,decimal) '. '}.ql-editor li[data-list=ordered].ql-indent-1{counter-increment:list-1}.ql-editor li[data-list=ordered].ql-indent-1>.ql-ui:before{content:counter(list-1,lower-alpha) '. '}.ql-editor li[data-list=ordered].ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-2{counter-increment:list-2}.ql-editor li[data-list=ordered].ql-indent-2>.ql-ui:before{content:counter(list-2,lower-roman) '. '}.ql-editor li[data-list=ordered].ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-3{counter-increment:list-3}.ql-editor li[data-list=ordered].ql-indent-3>.ql-ui:before{content:counter(list-3,decimal) '. '}.ql-editor li[data-list=ordered].ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-4{counter-increment:list-4}.ql-editor li[data-list=ordered].ql-indent-4>.ql-ui:before{content:counter(list-4,lower-alpha) '. '}.ql-editor li[data-list=ordered].ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-5{counter-increment:list-5}.ql-editor li[data-list=ordered].ql-indent-5>.ql-ui:before{content:counter(list-5,lower-roman) '. '}.ql-editor li[data-list=ordered].ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-6{counter-increment:list-6}.ql-editor li[data-list=ordered].ql-indent-6>.ql-ui:before{content:counter(list-6,decimal) '. '}.ql-editor li[data-list=ordered].ql-indent-6{counter-reset:list-7 list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-7{counter-increment:list-7}.ql-editor li[data-list=ordered].ql-indent-7>.ql-ui:before{content:counter(list-7,lower-alpha) '. '}.ql-editor li[data-list=ordered].ql-indent-7{counter-reset:list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-8{counter-increment:list-8}.ql-editor li[data-list=ordered].ql-indent-8>.ql-ui:before{content:counter(list-8,lower-roman) '. '}.ql-editor li[data-list=ordered].ql-indent-8{counter-reset:list-9}.ql-editor li[data-list=ordered].ql-indent-9{counter-increment:list-9}.ql-editor li[data-list=ordered].ql-indent-9>.ql-ui:before{content:counter(list-9,decimal) '. '}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor li.ql-direction-rtl{padding-right:1.5em}.ql-editor li.ql-direction-rtl>.ql-ui:before{margin-left:.3em;margin-right:-1.5em;text-align:left}.ql-editor table{table-layout:fixed;width:100%}.ql-editor table td{outline:0}.ql-editor .ql-code-block-container{font-family:monospace}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor .ql-ui{position:absolute}.ql-editor.ql-blank::before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-snow .ql-toolbar:after,.ql-snow.ql-toolbar:after{clear:both;content:'';display:table}.ql-snow .ql-toolbar button,.ql-snow.ql-toolbar button{background:0 0;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-snow .ql-toolbar button svg,.ql-snow.ql-toolbar button svg{float:left;height:100%}.ql-snow .ql-toolbar button:active:hover,.ql-snow.ql-toolbar button:active:hover{outline:0}.ql-snow .ql-toolbar input.ql-image[type=file],.ql-snow.ql-toolbar input.ql-image[type=file]{display:none}.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar button.ql-active,.ql-snow .ql-toolbar button:focus,.ql-snow .ql-toolbar button:hover,.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover{color:#06c}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill{fill:#06c}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter{stroke:#06c}@media (pointer:coarse){.ql-snow .ql-toolbar button:hover:not(.ql-active),.ql-snow.ql-toolbar button:hover:not(.ql-active){color:#444}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#444}}.ql-snow{box-sizing:border-box}.ql-snow *{box-sizing:border-box}.ql-snow .ql-hidden{display:none}.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{visibility:hidden}.ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-snow .ql-formats{display:inline-block;vertical-align:middle}.ql-snow .ql-formats:after{clear:both;content:'';display:table}.ql-snow .ql-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-snow .ql-stroke-miter{fill:none;stroke:#444;stroke-miterlimit:10;stroke-width:2}.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-empty{fill:none}.ql-snow .ql-even{fill-rule:evenodd}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1}.ql-snow .ql-transparent{opacity:.4}.ql-snow .ql-direction svg:last-child{display:none}.ql-snow .ql-direction.ql-active svg:last-child{display:inline}.ql-snow .ql-direction.ql-active svg:first-child{display:none}.ql-snow .ql-editor h1{font-size:2em}.ql-snow .ql-editor h2{font-size:1.5em}.ql-snow .ql-editor h3{font-size:1.17em}.ql-snow .ql-editor h4{font-size:1em}.ql-snow .ql-editor h5{font-size:.83em}.ql-snow .ql-editor h6{font-size:.67em}.ql-snow .ql-editor a{text-decoration:underline}.ql-snow .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-snow .ql-editor .ql-code-block-container,.ql-snow .ql-editor code{background-color:#f0f0f0;border-radius:3px}.ql-snow .ql-editor .ql-code-block-container{margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.ql-snow .ql-editor .ql-code-block-container{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-snow .ql-editor img{max-width:100%}.ql-snow .ql-picker{color:#444;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-snow .ql-picker-label::before{display:inline-block;line-height:22px}.ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#ccc;z-index:2}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{width:28px}.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before{content:attr(data-label)}.ql-snow .ql-picker.ql-header{width:98px}.ql-snow .ql-picker.ql-header .ql-picker-item::before,.ql-snow .ql-picker.ql-header .ql-picker-label::before{content:'Normal'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before{content:'Heading 1'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before{content:'Heading 2'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before{content:'Heading 3'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before{content:'Heading 4'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before{content:'Heading 5'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before{content:'Heading 6'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before{font-size:2em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before{font-size:1.5em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before{font-size:1.17em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before{font-size:1em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before{font-size:.83em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before{font-size:.67em}.ql-snow .ql-picker.ql-font{width:108px}.ql-snow .ql-picker.ql-font .ql-picker-item::before,.ql-snow .ql-picker.ql-font .ql-picker-label::before{content:'Sans Serif'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before{content:'Serif'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before{content:'Monospace'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before{font-family:Georgia,Times New Roman,serif}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before{font-family:Monaco,Courier New,monospace}.ql-snow .ql-picker.ql-size{width:98px}.ql-snow .ql-picker.ql-size .ql-picker-item::before,.ql-snow .ql-picker.ql-size .ql-picker-label::before{content:'Normal'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before{content:'Small'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before{content:'Large'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before{content:'Huge'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before{font-size:18px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before{font-size:32px}.ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-code-block-container{position:relative}.ql-code-block-container .ql-ui{right:5px;top:5px}.ql-toolbar.ql-snow{border:1px solid #ccc;box-sizing:border-box;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;padding:8px}.ql-toolbar.ql-snow .ql-formats{margin-right:15px}.ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:rgba(0,0,0,.2) 0 2px 8px}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label{border-color:#ccc}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#ccc}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0}.ql-snow .ql-tooltip{background-color:#fff;border:1px solid #ccc;box-shadow:0 0 5px #ddd;color:#444;padding:5px 12px;white-space:nowrap}.ql-snow .ql-tooltip::before{content:\"Visit URL:\";line-height:26px;margin-right:8px}.ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #ccc;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.ql-snow .ql-tooltip a.ql-action::after{border-right:1px solid #ccc;content:'Edit';margin-left:16px;padding-right:8px}.ql-snow .ql-tooltip a.ql-remove::before{content:'Remove';margin-left:8px}.ql-snow .ql-tooltip a{line-height:26px}.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.ql-snow .ql-tooltip.ql-editing a.ql-action::after{border-right:0;content:'Save';padding-right:0}.ql-snow .ql-tooltip[data-mode=link]::before{content:\"Enter link:\"}.ql-snow .ql-tooltip[data-mode=formula]::before{content:\"Enter formula:\"}.ql-snow .ql-tooltip[data-mode=video]::before{content:\"Enter video:\"}.ql-snow a{color:#06c}.ql-container.ql-snow{border:1px solid #ccc}\n        \n        body, html{\n         font-family: \""+v+'", sans-serif !important;\n        -webkit-user-select: text !important;\n        margin:0px !important;\n        background-color:'+u+";\n        color: "+t+";\n        }\n        .ql-font-roboto {\n           font-family: '"+s+"', sans-serif;\n          }\n        .ql-editor.ql-blank::before{\n         font-family: \""+s+'", sans-serif !important;\n        -webkit-user-select: text !important;\n          padding-left:'+r+b3+q+b4+p+b5+o+"px !important;\n          position: center;\n          left:0px;\n          text-align: "+m.b+b6+n+b7+l+b8+k+";\n          font-style: "+i.b+b9+j+';\n          \n        }\n        .ql-container.ql-snow{\n         font-family: "'+h+'", sans-serif !important;\n        -webkit-user-select: text !important;\n          white-space:nowrap !important;\n          margin-top:0px !important;\n          margin-bottom:0px !important;\n          margin:0px !important;\n          width:100%;\n          border:none;\n          font-style: '+f.b+b6+g+b7+e+b8+d+b9+a0+";\n          padding-left:"+a1+"px;\n          padding-right:"+a2+"px;\n          padding-top:"+a3+"px;\n          padding-bottom:"+a4+'px;\n          min-height:100%;\n        \n          contenteditable: true !important;\n          data-gramm: false !important;\n         \n        }\n        .ql-editor { \n         font-family: "'+a5+'", sans-serif !important;\n          -webkit-user-select: text !important;\n          padding-left:'+a6+b3+a7+b4+a8+b5+a9+"px !important;\n        }\n        .ql-toolbar { \n          position: absolute; \n          top: 0;\n          left:0;\n          right:0\n        }\n        .ql-tooltip{\n          display:none; \n        }\n        \n        .ql-editor.ql-blank:focus::before {\n          content: '';\n          }\n        #toolbar-container{\n         display:none;\n        }     \n        #scrolling-container {  \n        overflow-y: scroll  !important;\n          min-height: "+b0+'px !important;\n          -webkit-user-select: text !important;\n           scrollbar-width: none !important; \n         } \n         #scroll-container::-webkit-scrollbar {\n            display: none !important; /* For Chrome, Safari, and Opera */\n          }\n         ::-webkit-scrollbar {\n          width: 0;  /* Remove scrollbar space */\n          background: transparent;  /* Optional: just make scrollbar invisible */\n          } \n        </style>\n   \n        </head>\n        <body>\n         <script>\n           const resizeObserver = new ResizeObserver(entries =>{\n            ///console.log("Offset height has changed:", (entries[0].target.clientHeight).toString())\n                if(true) {\n                  EditorResizeCallback((entries[0].target.clientHeight).toString());\n                } else {\n                  EditorResizeCallback.postMessage((entries[0].target.clientHeight).toString());\n                }            \n            })\n            resizeObserver.observe(document.body)\n          </script>\n         <script>\n          let isTextSelectionInProgress = false;\n\n          // Event handler for text selection start\n          function handleTextSelectionStart() {\n              isTextSelectionInProgress = true;\n             // console.log("Text selection started.");\n          }\n  \n          // Event handler for text selection end\n          function handleTextSelectionEnd() {\n              isTextSelectionInProgress = false;\n             // console.log("Text selection ended.");\n          }\n  \n          // Check if text is being selected while dragging the mouse\n          function handleMouseMove(event) {\n              if (isTextSelectionInProgress) {\n                  // Do something when the text is being selected (dragging the mouse while text is selected)\n                  window.getSelection();\n              }\n          }\n  \n          // Attach event listeners\n          document.addEventListener("mousedown", handleTextSelectionStart);\n          document.addEventListener("mouseup", handleTextSelectionEnd);\n          document.addEventListener("mousemove", handleMouseMove);\n         \n         </script> \n        <!-- Create the toolbar container -->\n        <div id="scrolling-container">\n        <div id="toolbar-container"></div>\n        \n        <!-- Create the editor container -->\n        <div style="position:relative;margin-top:0em;">\n        <div id="editorcontainer" style= "min-height:'+b0+'px;margin-top:0em;">\n        <div id="editor" style="min-height:'+b0+"px; width:100%;\"></div>\n        </div>\n        </div> \n        </div>\n      \n        <!-- Initialize Quill editor -->\n        <script>\n      \n            let fullWindowHeight = window.innerHeight;\n            let keyboardIsProbablyOpen = false;\n            window.addEventListener(\"resize\", function() {\n              if(window.innerHeight == fullWindowHeight) {\n                keyboardIsProbablyOpen = false;\n              } else if(window.innerHeight < fullWindowHeight * 0.9) {\n                keyboardIsProbablyOpen = true;\n              }\n            });\n            \n            function resizeElementHeight(element, ratio) {\n              var height = 0;\n              var body = window.document.body;\n              if(window.innerHeight) {\n                height = window.innerHeight;\n              } else if(body.parentElement.clientHeight) {\n                height = body.parentElement.clientHeight;\n              } else if(body && body.clientHeight) {\n                height = body.clientHeight;\n              }\n              let isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)\n              if(isIOS) {\n                element.style.height = ((height / ratio - element.offsetTop) + \"px\");\n              } else {\n                element.style.height = ((height - element.offsetTop) + \"px\");\n              }  \n            }\n            \n            \n          function replaceSelection(replaceText) {\n              try{\n              var range = quilleditor.getSelection(true);\n                    if (range) {\n                      if (range.length == 0) {\n                       // console.log('User cursor is at index', range.index);\n                      } else {\n                       quilleditor.deleteText(range.index, range.length);\n                       quilleditor.insertText(range.index, replaceText);\n                      \n                      /// replace text with format will be coming in future release\n                      /// quilleditor.insertText(range.index, replaceText, JSON.parse(format));\n                      }\n                    } else {\n                     // console.log('User cursor is not in editor');\n                    }\n                }\n                 catch(e) {\n                    console.log('replaceSelection', e);\n                 } \n            }\n            // Retrieve the Quill editor container element by its ID\n            var quillContainer = document.getElementById('scrolling-container');\n            \n            // Add the focusout event listener to the Quill editor container\n            quillContainer.addEventListener('focusout', function() {\n                 if(true) {\n                FocusChanged(false);\n              } else {\n                FocusChanged.postMessage(false);\n              }\n            });\n            \n             quillContainer.addEventListener('focusin', () => {\n               if(true) {\n                FocusChanged(true);\n              } else {\n                FocusChanged.postMessage(true);\n              }\n             })\n             quillContainer.addEventListener('click', function() {\n              quilleditor.focus(); // Set focus on the Quill editor\n              });\n             \n             /*quilleditor.root.addEventListener(\"blur\", function() {\n               if(true) {\n                FocusChanged(false);\n                } else {\n                var focus  = quilleditor.hasFocus();\n                  FocusChanged.postMessage(isQuillFocused());\n                }\n            });\n            \n            quilleditor.root.addEventListener(\"focus\", function() {\n               if(true) {\n                FocusChanged(true);\n              } else {\n              var focus  = quilleditor.hasFocus();\n                FocusChanged.postMessage(isQuillFocused());\n              }\n            });*/\n            \n            function isQuillFocused() {\n                // Retrieve the Quill editor container element by its ID\n                var quillContainer = document.getElementById('scrolling-container');\n              \n                // Check if the Quill editor container or any of its descendants have focus\n                return quillContainer.contains(document.activeElement);\n              }\n            \n            function getSelectedText() {\n            let text = '';\n              try{\n                var range = quilleditor.getSelection(true);\n                    if (range) {\n                      if (range.length == 0) {\n                       // console.log('User cursor is at index', range.index);\n                      } else {\n                         text = quilleditor.getText(range.index, range.length);\n                      }\n                    } else {\n                    //  console.log('User cursor is not in editor');\n                    }\n                }\n                 catch(e) {\n                    console.log('getSelectedText', e);\n                  } \n                return text;  \n            }\n              \n         \n            function applyGoogleKeyboardWorkaround(editor) {\n              try {\n              \n                let isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)\n\n                if(true || isIOS){\n                  return;\n                }\n                if(editor.applyGoogleKeyboardWorkaround) {\n                  return\n                }\n                editor.applyGoogleKeyboardWorkaround = true\n                editor.on('editor-change', function(eventName, ...args) {\n                  try {\n                    // args[0] will be delta\n                    var ops = args[0]['ops']\n                    if(ops === null) {\n                      return\n                    }\n                    var oldSelection = editor.getSelection(true)\n                    var oldPos = oldSelection.index\n                    var oldSelectionLength = oldSelection.length\n                    if( ops[0][\"retain\"] === undefined || !ops[1] || !ops[1][\"insert\"] || !ops[1][\"insert\"] || ops[1][\"list\"] === \"bullet\" || ops[1][\"list\"] === \"ordered\" || ops[1][\"insert\"] != \"\\n\" || oldSelectionLength > 0) {\n                      return\n                    }\n                    \n                    setTimeout(function() {\n                      var newPos = editor.getSelection(true).index\n                      if(newPos === oldPos) {\n                      console.log('newPos oldPos');\n                        editor.setSelection(editor.getSelection(true).index + 1, 0)\n                      }\n                    }, 30);\n                    //onRangeChanged();\n                  } catch(e) {\n                    console.log('applyGoogleKeyboardWorkaround - editor-change', e);\n                  }\n                });\n              } catch(e) {\n                console.log('applyGoogleKeyboardWorkaround', e);\n              } \n            }\n            \n            /// observer to listen to the editor div changes \n            // select the target node\n            var target = document.querySelector('#editor');\n            \n            // create an observer instance\n            var tempText = \"\";\n            var observer = new MutationObserver(function(mutations) {\n                 var text = quilleditor.root.innerHTML; \n                 if(text != tempText){\n                      tempText = text;\n                     if(true) {\n                      OnTextChanged(text);\n                    } else {\n                      OnTextChanged.postMessage(text);\n                    }\n                     onRangeChanged(); \n                     quilleditor.focus();\n                 }\n            });\n\n            // configuration of the observer:\n            var config = { attributes: true, childList: true, characterData: true, subtree: true };\n\n            // pass in the target node, as well as the observer options\n            observer.observe(target, config);\n    \n           // stops the listener\n           //// observer.disconnect();\n          \n        \n           //// to accept all link formats \n           var Link = Quill.import('formats/link');\n              Link.sanitize = function(url) {\n                // modify url if desired\n                return url;\n              }\n             Quill.register(Link, true);\n           \n            /// quill custom font import\n            var FontStyle = Quill.import('attributors/class/font');\n            Quill.register(FontStyle, true);\n            \n            const Inline = Quill.import('blots/inline');\n            class RequirementBlot extends Inline {}\n            RequirementBlot.blotName = 'requirement';\n            RequirementBlot.tagName = 'requirement';\n            Quill.register(RequirementBlot);\n            \n            class ResponsibilityBlot extends Inline {}\n            ResponsibilityBlot.blotName = 'responsibility';\n            ResponsibilityBlot.tagName = 'responsibility';\n            Quill.register(ResponsibilityBlot);\n            \n             ///// quill shift enter key binding      \n              var bindings = {\n                  linebreak: {\n                      key: 13,\n                      shiftKey: true,\n                      handler: function(range) {\n                          this.quill.insertEmbed(range.index, 'breaker', true, Quill.sources.USER);\n                          this.quill.setSelection(range.index + 1, Quill.sources.SILENT);\n                          return false;\n                      }\n                  },\n                  enter: {\n                      key: 'Enter',\n                      handler: () => {\n                         if(true) {\n                          OnEditingCompleted(quilleditor.root.innerHTML);\n                          } else {\n                          OnEditingCompleted.postMessage(quilleditor.root.innerHTML);\n                          }\n                      }\n                  }\n              };\n              \n              let Embed = Quill.import('blots/embed');\n              \n              class Breaker extends Embed {\n                  static tagName = 'br';\n                  static blotName = 'breaker';\n              }\n              Quill.register(Breaker);\n\n            var quilleditor = new Quill('#editor', {\n              modules: {\n                toolbar: '#toolbar-container',\n                table: true,\n                 keyboard:  {},\n                history: {\n                  delay: 2000,\n                  maxStack: 500,\n                  userOnly: false\n                }\n              },\n              theme: 'snow',\n             scrollingContainer: '#scrolling-container', \n              placeholder: 'Description',\n              clipboard: {\n                matchVisual: true\n              }\n            });\n            \n          \n            const table = quilleditor.getModule('table');\n            quilleditor.enable(true);\n        \n           applyGoogleKeyboardWorkaround(quilleditor);\n            \n            let editorLoaded = false;\n            quilleditor.on('editor-change', function(eventName, ...args) {\n      \n             if (!editorLoaded) {\n                if(true) {\n                    EditorLoaded(true);\n                } else {\n                    EditorLoaded.postMessage(true);\n                }\n                  editorLoaded = true;\n                }\n             \n            });\n            \n            quilleditor.on('selection-change', function(range, oldRange, source)  {\n             /// console.log('selection changed');\n              onRangeChanged();\n              if(true){\n              OnSelectionChanged(getSelectionRange());\n              }else{\n              OnSelectionChanged.postMessage(getSelectionRange());\n              }     \n              \n            });\n                  \n            function onRangeChanged() { \n              try {\n                var range = quilleditor.getSelection(true);\n                if(range != null) {\n                  if(range.length == 0) {\n                    var format = quilleditor.getFormat();\n                    formatParser(format);\n                  } else {\n                    var format = quilleditor.getFormat(range.index, range.length);\n                    formatParser(format);\n                  }\n                } else {\n                 // console.log('Cursor not in the editor');\n                }\n              } catch(e) {\n              ///  console.log(e);\n              }\n            }\n            \n             function redo(){\n              quilleditor.history.redo();\n              return '';\n             }\n             \n             function undo(){\n              quilleditor.history.undo();\n              return '';\n             }\n             function clearHistory(){\n               quilleditor.history.clear();\n               return '';\n             }\n            \n            \n            function formatParser(format) {\n              var formatMap = {};\n              formatMap['bold'] = format['bold'];\n              formatMap['italic'] = format['italic'];\n              formatMap['underline'] = format['underline'];\n              formatMap['strike'] = format['strike'];\n              formatMap['blockqoute'] = format['blockqoute'];\n              formatMap['background'] = format['background'];\n              formatMap['code-block'] = format['code-block'];\n              formatMap['indent'] = format['indent'];\n              formatMap['direction'] = format['direction'];\n              formatMap['size'] = format['size'];\n              formatMap['header'] = format['header'];\n              formatMap['color'] = format['color'];\n              formatMap['font'] = format['font'];\n              formatMap['align'] = format['align'];\n              formatMap['list'] = format['list'];\n              formatMap['image'] = format['image'];\n              formatMap['video'] = format['video'];\n              formatMap['clean'] = format['clean'];\n              formatMap['link'] = format['link'];\n              if(true) {\n                UpdateFormat(JSON.stringify(formatMap));\n              } else {\n                UpdateFormat.postMessage(JSON.stringify(formatMap));\n              }\n            }\n     \n           \n            function getHtmlText() {\n              return quilleditor.root.innerHTML;\n            }\n \n            function getPlainText() {\n              var text = \"\";\n              try{\n                 text =  toPlaintext(quilleditor.getContents());\n              }catch(e){\n                 text = \"\";\n              }\n              return text; \n            }\n            \n            function toPlaintext(delta) {\n              return delta.reduce(function (text, op) {\n                if (!op.insert) throw new TypeError('only `insert` operations can be transformed!');\n                if (typeof op.insert !== 'string') return text + ' ';\n                return text + op.insert;\n              }, '');\n            };\n            \n            function getSelection() {\n            try{\n              var range = quilleditor.getSelection(true);\n              if(range) {\n                return range.length;\n              }\n                }catch(e){\n                console.log('getSelection', e);\n              }\n              return -1;\n            }\n            \n            function getSelectionHtml() {\n              var selection = quilleditor.getSelection(true);\n              if(selection){\n              var selectedContent = quilleditor.getContents(selection.index, selection.length);\n              var tempContainer = document.createElement('div')\n              var tempQuill = new Quill(tempContainer);\n              tempQuill.setContents(selectedContent);\n              return tempContainer.querySelector('.ql-editor').innerHTML;\n              }\n              return '';\n            }\n            \n            function getSelectionRange() {\n              var range = quilleditor.getSelection(true);\n              if(range) {\n                var rangeMap = {};\n                rangeMap['length'] = range.length;\n                rangeMap['index'] = range.index;\n                return JSON.stringify(rangeMap);\n              }\n              return {};\n            }\n            \n            function setSelection(index, length) {\n            try{\n              setTimeout(() => quilleditor.setSelection(index, length), 1);\n              }catch(e){\n                console.log('setSelection', e);\n              }\n              return '';\n            }\n            \n            function setHtmlText(htmlString) {\n            try{\n               quilleditor.enable(false);\n               quilleditor.clipboard.dangerouslyPasteHTML(htmlString);   \n            }catch(e){\n               console.log('setHtmlText', e);\n            }\n             setTimeout(() =>   quilleditor.enable(true), 10);  \n              return '';\n            }\n            \n          \n            function setDeltaContent(deltaMap) {   \n              try{\n                  quilleditor.enable(false);\n                  const obj = JSON.parse(deltaMap);\n                  quilleditor.setContents(obj);\n                }catch(e){\n                  console.log('setDeltaContent', e);\n                }\n               setTimeout(() =>   quilleditor.enable(true), 10);  \n              return '';\n            }\n            \n            function getDelta() {\n              return JSON.stringify(quilleditor.getContents()); \n            }\n\n            function requestFocus() {\n              try{\n              var htmlString = quilleditor.root.innerHTML;\n               setTimeout(() => {\n                    quilleditor.setSelection(htmlString.length + 1, htmlString.length + 1);\n                    quilleditor.focus();\n               }, 600);\n              }catch(e){\n                console.log('requestFocus',e);\n              }\n            \n              return '';\n            }\n            \n            function unFocus() {\n              quilleditor.root.blur()\n              return '';\n            }\n  \n            function insertTable(row,column) {\n              table.insertTable(row, column);\n              return '';\n            }\n            \n            function modifyTable(type) {\n                if(type ==\"insertRowAbove\"){\n                 table.insertRowAbove();\n                }else if(type == \"insertRowBelow\"){\n                  table.insertRowBelow();\n                }else if(type == \"insertColumnLeft\"){\n                  table.insertColumnLeft();\n                }else if(type == \"insertColumnRight\"){\n                  table.insertColumnRight();\n                }else if(type == \"deleteRow\"){\n                  table.deleteRow();\n                }else if(type == \"deleteColumn\"){\n                  table.deleteColumn();\n                }else if(type == \"deleteTable\"){\n                  table.deleteTable();\n                }\n              return '';\n            }\n            \n            function insertHtmlText(htmlString, index) {\n              if(index == null) {\n                var range = quilleditor.getSelection(true);\n                if(range) {\n                  quilleditor.clipboard.dangerouslyPasteHTML(range.index, htmlString);\n                }\n              } else {\n                quilleditor.clipboard.dangerouslyPasteHTML(index, htmlString);\n              }\n              return '';\n            }\n            \n            function embedVideo(videoUrl) {\n              var range = quilleditor.getSelection(true);\n              if(range) {\n                quilleditor.insertEmbed(range.index, 'video', videoUrl);\n              }\n              return '';\n            }\n            \n            function embedImage(img) {\n              var range = quilleditor.getSelection(true);\n              if(range) {\n                quilleditor.insertEmbed(range.index, 'image', img);\n              }\n              return '';\n            }\n            \n            function enableEditor(isEnabled) {\n              quilleditor.enable(isEnabled);\n              return '';\n            }\n            \n            function setFormat(format, value) {\n            try{\n              if(format == 'clean') {\n                var range = quilleditor.getSelection(true);\n                if(range) {\n                  if(range.length == 0) {\n                    quilleditor.removeFormat(range.index, quilleditor.root.innerHTML.length);\n                  } else {\n                    quilleditor.removeFormat(range.index, range.length);\n                  }\n                } else {\n                  quilleditor.format('clean');\n                }\n              } else {\n                \n                quilleditor.format(format, value);\n              }\n            }catch(e){\n            console.log('setFormat',e);\n            }\n              return '';\n            } \n        </script>\n        </body>\n        </html>\n       "}}
A.aCm.prototype={
amV(){var w,v=this,u=null
v.a=new B.aU(A.d5h(15),x.h)
v.b=new B.aU(A.d5h(15),x.U)
w=x.N
v.c=B.hs(u,u,u,u,!1,w)
v.d=B.hs(u,u,u,u,!1,w)},
Lb(){var w=0,v=B.k(x.N),u,t=2,s=[],r=this,q,p,o,n
var $async$Lb=B.f(function(d,e){if(d===1){s.push(e)
w=t}while(true)switch(w){case 0:t=4
p=r.a.ga0()
p=p==null?null:p.W2()
w=7
return B.d(x.F.b(p)?p:B.c9(p,x.T),$async$Lb)
case 7:q=e
if(J.q(q,"<p><br></p>")){p=q
p.toString
p=B.dt(p,"<p><br></p>","")
u=p
w=1
break}p=q
if(p==null)p=""
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
u=""
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.i(u,v)
case 2:return B.h(s.at(-1),v)}})
return B.j($async$Lb,v)},
Lw(d){return this.aRX(d)},
aRX(d){var w=0,v=B.k(x.z),u,t=this,s
var $async$Lw=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:s=t.a.ga0()
s=s==null?null:s.Ol(d)
w=3
return B.d(x._.b(s)?s:B.c9(s,x.z),$async$Lw)
case 3:u=f
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$Lw,v)},
QR(d,e){return this.bNj(d,e)},
bNj(d,e){var w=0,v=B.k(x.z),u,t=this,s
var $async$QR=B.f(function(f,g){if(f===1)return B.h(g,v)
while(true)switch(w){case 0:s=t.a.ga0()
s=s==null?null:s.WJ(e,d)
w=3
return B.d(x._.b(s)?s:B.c9(s,x.z),$async$QR)
case 3:u=g
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$QR,v)},
a1g(d){return this.bQ_(d)},
bQ_(d){var w=0,v=B.k(x.z),u,t=this,s
var $async$a1g=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:s=t.a.ga0()
s=s==null?null:s.X4(d)
w=3
return B.d(x._.b(s)?s:B.c9(s,x.z),$async$a1g)
case 3:u=f
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$a1g,v)},
a_I(d){return this.bJ4(d)},
bJ4(d){var w=0,v=B.k(x.z),u,t=this,s,r
var $async$a_I=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:r=A.du4(d)
if(r==null){w=1
break}s=t.a.ga0()
s=s==null?null:s.VF(r)
w=3
return B.d(x._.b(s)?s:B.c9(s,x.z),$async$a_I)
case 3:u=f
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$a_I,v)},
a_H(d){return this.bJ3(d)},
bJ3(d){var w=0,v=B.k(x.z),u,t=this,s
var $async$a_H=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:s=t.a.ga0()
s=s==null?null:s.VE(d)
w=3
return B.d(x._.b(s)?s:B.c9(s,x.z),$async$a_H)
case 3:u=f
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$a_H,v)},
a_J(d){return this.bJ7(!0)},
bJ7(d){var w=0,v=B.k(x.H),u=this,t
var $async$a_J=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:u.e=!0
t=u.a.ga0()
t=t==null?null:t.VG(!0)
w=2
return B.d(x._.b(t)?t:B.c9(t,x.z),$async$a_J)
case 2:return B.i(null,v)}})
return B.j($async$a_J,v)},
Tj(){var w=0,v=B.k(x.n),u,t=this,s,r
var $async$Tj=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:r=t.a.ga0()
r=r==null?null:r.Wb()
w=3
return B.d(x._.b(r)?r:B.c9(r,x.z),$async$Tj)
case 3:s=e
u=s!=null?A.d0v(C.aH.ue(0,s,null)):new A.FH(0,0)
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$Tj,v)},
U5(d,e,f){return this.aRG(0,e,f)},
aRG(d,e,f){var w=0,v=B.k(x.z),u,t=this,s
var $async$U5=B.f(function(g,h){if(g===1)return B.h(h,v)
while(true)switch(w){case 0:s=t.a.ga0()
s=s==null?null:s.Y0(e,f)
w=3
return B.d(x._.b(s)?s:B.c9(s,x.z),$async$U5)
case 3:u=h
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$U5,v)},
N(d){var w=0,v=B.k(x.H),u=this,t
var $async$N=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:t=u.a.ga0()
t=t==null?null:t.Ol("")
w=2
return B.d(x._.b(t)?t:B.c9(t,x.z),$async$N)
case 2:return B.i(null,v)}})
return B.j($async$N,v)},
ws(d,e){return this.aQY(d,e)},
aQY(d,e){var w=0,v=B.k(x.H),u=this,t
var $async$ws=B.f(function(f,g){if(f===1)return B.h(g,v)
while(true)switch(w){case 0:t=u.a.ga0()
if(t!=null)t.XZ(d,e)
return B.i(null,v)}})
return B.j($async$ws,v)},
RE(d){var w,v,u
try{w=this.c
v=(w.b&1)===0
if(v)new B.cN(w,B.t(w).i("cN<1>")).en(new A.bF7(d))}catch(u){}return},
bQU(d){var w,v,u
try{w=this.d
v=(w.b&1)===0
if(v)new B.cN(w,B.t(w).i("cN<1>")).en(new A.bF6(d))}catch(u){}return},
l(){this.c.aD(0)
this.d.aD(0)},
tv(){var w=0,v=B.k(x.H),u=this,t
var $async$tv=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:t=u.a.ga0()
t=t==null?null:t.Xy()
w=2
return B.d(x._.b(t)?t:B.c9(t,x.z),$async$tv)
case 2:return B.i(null,v)}})
return B.j($async$tv,v)},
tl(){var w=0,v=B.k(x.H),u=this,t
var $async$tl=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:t=u.a.ga0()
t=t==null?null:t.Xx()
w=2
return B.d(x._.b(t)?t:B.c9(t,x.z),$async$tl)
case 2:return B.i(null,v)}})
return B.j($async$tl,v)},
ZQ(){var w=0,v=B.k(x.H),u=this,t
var $async$ZQ=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:t=u.a.ga0()
t=t==null?null:t.Va()
w=2
return B.d(x._.b(t)?t:B.c9(t,x.z),$async$ZQ)
case 2:return B.i(null,v)}})
return B.j($async$ZQ,v)}}
A.FH.prototype={
gA(d){return this.b}}
A.aaC.prototype={
M(){return new A.aaD(B.a([],x.c),B.I(x.N,x.z),C.eo)}}
A.aaD.prototype={
T(){var w,v,u,t,s,r,q=this,p=x.q
q.f=new B.aU("fontBgColorKey"+C.c.j(B.dU(q.a.d)),p)
q.r=new B.aU("fontColorKey"+C.c.j(B.dU(q.a.d)),p)
q.w=new B.aU("_tablePickerKey"+C.c.j(B.dU(q.a.d)),p)
p=q.a
q.x=p.y
for(p=p.c,w=0;w<7;++w){v=p[w]
u=q.d
t=q.a
s=t.x
r=t.r
t=t.f
u.push(new A.MK(v,!1,null,q.x,t,r,s,null))}q.ah()},
B(d){var w=null,v=this.a,u=v.w
v=v.z
u=B.mW(B.ar(w,B.dv(B.dlY(this.b9N(d),C.k,C.H,v,w,C.f,C.i,0,w,w,C.m),w,C.r,w,w,w,v),C.k,w,w,new B.b3(u,w,w,w,w,w,w,C.L),w,w,w,w,w,w,w,17976931348623157e292),!1,w)
return u},
bX0(d){var w,v,u,t,s,r,q=this,p="direction",o="color",n="align",m="background"
q.e=d
for(w=J.a1(d),v=0;u=q.d,v<u.length;++v){t=u[v]
switch(t.c.a){case 0:u[v]=t.iZ(J.q(w.h(d,"bold"),!0))
break
case 1:u[v]=t.iZ(J.q(w.h(d,"italic"),!0))
break
case 2:u[v]=t.iZ(J.q(w.h(d,"underline"),!0))
break
case 3:u[v]=t.iZ(J.q(w.h(d,"strike"),!0))
break
case 4:u[v]=t.iZ(J.q(w.h(d,"blockquote"),!0))
break
case 5:u[v]=t.iZ(J.q(w.h(d,"code-block"),!0))
break
case 6:u[v]=t.iZ(w.h(d,"indent")!=null)
break
case 7:u[v]=t.iZ(w.h(d,"indent")!=null)
break
case 8:u[v]=t.iZ(J.q(w.h(d,p),"rtl"))
break
case 9:u[v]=t.iZ(!J.q(w.h(d,p),"rtl"))
break
case 17:u[v]=t.iZ(w.h(d,"size")!=null)
break
case 10:u[v]=t.iZ(J.q(w.h(d,"header"),1))
break
case 11:u[v]=t.iZ(J.q(w.h(d,"header"),2))
break
case 12:u[v]=t.iZ(w.h(d,o)!=null)
try{if(w.h(d,o)!=null){u=B.mF(J.aA(w.h(d,o)).a,null)
t=q.e
s=J.cY(t)
if(u==="List<dynamic>")s.m(t,o,J.v(w.h(d,o),0))
else s.m(t,o,w.h(d,o))}}catch(r){}break
case 14:if(w.h(d,n)==null)w.m(d,n,"")
u=q.d
u[v]=u[v].iZ(w.h(d,n)!=null)
break
case 15:u[v]=t.iZ(J.q(w.h(d,"list"),"ordered"))
break
case 16:u[v]=t.iZ(J.q(w.h(d,"list"),"bullet"))
break
case 19:u[v]=t.iZ(w.h(d,"image")!=null)
break
case 20:u[v]=t.iZ(w.h(d,"video")!=null)
break
case 21:u[v]=t.iZ(w.h(d,"clean")!=null)
break
case 13:u[v]=t.iZ(w.h(d,m)!=null)
try{if(w.h(d,m)!=null){u=B.mF(J.aA(w.h(d,m)).a,null)
t=q.e
s=J.cY(t)
if(u==="List<dynamic>")s.m(t,m,J.v(w.h(d,m),0))
else s.m(t,m,w.h(d,m))}}catch(r){}break
case 18:J.bZ(q.e,"link",w.h(d,"link"))
break
case 22:case 23:case 26:case 25:case 24:case 27:break}}q.u(new A.bUF())},
b9N(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.a([],x.p)
for(w=0;v=p.d,w<v.length;++w){u={}
t=u.a=v[w]
v=t.c
if(v===D.bLC)n.push(B.hG(new B.a0(p.x,p.b9u(),o),o,o,o,v.c,o,o,o,o,o,o,E.fn))
else if(v===D.aeE){u=p.x
s=p.a.f
n.push(B.hG(new B.a0(u,new B.ao(s,s,p.b0X(),o),o),o,o,o,v.c,o,o,o,o,o,o,E.fn))}else if(v===D.bLG){u=p.x
s=p.a.f
n.push(B.hG(new B.a0(u,new B.ao(s,s,p.bat(w),o),o),o,o,o,v.c,o,o,o,o,o,o,E.fn))}else if(v===D.bLF){u=p.x
s=p.a
r=s.f-2
s=G.a3a("packages/quill_html_editor/assets/camera_roll_icon.png",s.r,o,o,o)
J.v(p.e,"video")
n.push(B.hG(new B.a0(u,new A.RZ(new A.bUp(p),D.bOc,p.a.d,new B.ao(r,r,s,o),o),o),o,o,o,v.c,o,o,o,o,o,o,E.fn))}else if(v===D.aeG){u=p.x
s=p.a
s=B.aL(D.ayG,s.r,o,s.f)
J.v(p.e,"link")
n.push(B.hG(new B.a0(u,new A.RZ(new A.bUq(p),D.bOd,p.a.d,s,o),o),o,o,o,v.c,o,o,o,o,o,o,E.fn))}else if(v===D.bLD){u=p.x
s=p.a.f
n.push(B.hG(new B.a0(u,new B.ao(s,s,p.bas(w),o),o),o,o,o,v.c,o,o,o,o,o,o,E.fn))}else if(v===D.bLs){u=p.x
s=p.a.f
n.push(B.hG(new B.a0(u,new B.ao(s,s,p.bb3(w,d),o),o),o,o,o,v.c,o,o,o,o,o,o,E.fn))}else if(v===D.bLv){u=p.x
s=p.a
r=s.r
q=s.f
n.push(B.hG(new A.a1n(s.w,r,q,u,new A.bUr(p),o),o,o,o,v.c,o,o,o,o,o,o,E.fn))}else if(v===D.bLE){u=p.a
s=u.z
v=v.c
r=p.x
q=u.f
u=u.r
if(s===C.a6)n.push(B.hG(new B.a0(r,B.ar(o,o,C.k,u,o,o,o,q,o,o,o,o,o,0.8),o),o,o,o,v,o,o,o,o,o,o,E.fn))
else n.push(B.hG(new B.a0(r,B.ar(o,o,C.k,u,o,o,o,0.8,o,o,o,o,o,q),o),o,o,o,v,o,o,o,o,o,o,E.fn))}else{s=p.a
r=s.x
q=s.r
s=s.f
n.push(B.hG(new A.MK(v,t.d,new A.bUs(u,p),p.x,s,q,r,o),o,o,o,v.c,o,o,o,o,o,o,E.fn))}}p.a.toString
return n},
bau(d,e){switch(d.a){case 0:return B.y(["format","bold","value",e],x.N,x.z)
case 1:return B.y(["format","italic","value",e],x.N,x.z)
case 2:return B.y(["format","underline","value",e],x.N,x.z)
case 3:return B.y(["format","strike","value",e],x.N,x.z)
case 4:return B.y(["format","blockquote","value",e],x.N,x.z)
case 5:return B.y(["format","code-block","value",e],x.N,x.z)
case 7:return B.y(["format","indent","value","+1"],x.N,x.z)
case 6:return B.y(["format","indent","value","-1"],x.N,x.z)
case 8:return B.y(["format","direction","value","rtl"],x.N,x.z)
case 9:return B.y(["format","direction","value",""],x.N,x.z)
case 17:return B.y(["format","size","value","small"],x.N,x.z)
case 12:return B.y(["format","color","value","red"],x.N,x.z)
case 14:return B.y(["format","align","value","right"],x.N,x.z)
case 15:return B.y(["format","list","value",e?"ordered":""],x.N,x.z)
case 16:return B.y(["format","list","value",e?"bullet":""],x.N,x.z)
case 19:return B.y(["format","image","value",""],x.N,x.z)
case 20:return B.y(["format","video","value",""],x.N,x.z)
case 21:return B.y(["format","clean","value",""],x.N,x.z)
case 10:return B.y(["format","header","value",e?1:4],x.N,x.z)
case 11:return B.y(["format","header","value",e?2:4],x.N,x.z)
case 13:return B.y(["format","background","value","red"],x.N,x.z)
case 18:return B.y(["format","link","value",""],x.N,x.z)
case 22:case 23:case 24:case 26:case 25:case 27:return B.y(["format","undo","value",""],x.N,x.z)}},
b9u(){var w,v=this,u=null,t=v.a.w,s=J.v(v.e,"size")
if(s==null)s="normal"
w=B.af(u,u,v.a.r,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u)
return N.atu(C.O,new B.zE(A.cVh(!0,A.cWO(C.by,t,u,u,!0,B.a([v.VT(8,"Small"),v.VT(12,"Normal"),v.VT(16,"Large"),v.VT(20,"Huge")],x.g),new A.bUl(v),new A.bUm(v),w,s,x.z),C.N),u),C.k,C.hs)},
VT(d,e){var w=null,v=J.q(J.v(this.e,"size"),e.toLowerCase()),u=this.a
return B.vd(new A.qf(B.H(e,w,w,w,w,w,w,w,B.af(w,w,v?u.x:u.r,w,w,w,w,w,w,w,w,d,w,w,C.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w,w,w),w),e.toLowerCase(),x.z)},
VS(d){var w=null,v=this.a
return new B.ao(w,w,B.H(d,w,w,w,w,w,w,w,B.af(w,w,d.toLowerCase()!=="normal"?v.x:v.r,w,w,w,w,w,w,w,w,14,w,w,C.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w,w,w),w)},
b0X(){var w=this,v="align",u=w.a.w,t=J.q(J.v(w.e,v),"")||J.v(w.e,v)==null?"left":J.v(w.e,v)
return new B.zE(A.cVh(!1,A.cWO(C.cB,u,C.C,D.bDg,!0,B.a([w.VY("left"),w.VY("center"),w.VY("right"),w.VY("justify")],x.G),new A.bUj(w),null,null,t,x.N),C.N),null)},
VY(d){var w,v,u
if(d==="center")w=D.ayv
else if(d==="right")w=D.ayy
else w=d==="justify"?D.ayw:D.ayx
v=J.q(J.v(this.e,"align"),d)
u=this.a
v=v?u.x:u.r
return B.vd(new A.qf(B.aL(w,v,null,u.f),null),d,x.N)},
bat(d){var w,v,u,t=this,s=null,r="color",q=t.r
q===$&&B.b()
w=t.a.f
v=J.v(t.e,r)
u=t.a
v=v!=null?u.x:u.r
u=B.bc(B.H("A",s,s,1,s,s,s,s,B.af(s,s,v,s,s,s,s,s,s,s,s,u.f-5,s,s,C.U,s,s,!0,s,s,s,s,s,s,s,s),s,s,s,s,s),1,s)
v=J.v(t.e,r)!=null?A.bp1(J.v(t.e,r)):C.n
return A.asS(B.ft(C.M,!0,s,new B.ao(w,w,B.ae(B.a([u,B.ar(s,s,C.k,v,s,s,s,3,s,s,s,s,s,t.a.f-3)],x.p),C.j,C.bm,C.P,0,s,C.m),s),C.k,C.C,0,s,s,s,s,s,C.bE),C.l,new A.a_z(new A.bUx(t,d),s),10,q,new A.bUy(t))},
bas(d){var w,v,u,t,s,r=this,q=null,p="background",o=r.f
o===$&&B.b()
w=B.fz(C.n,C.B,0.1)
v=J.v(r.e,p)!=null?A.bp1(J.v(r.e,p)):C.C
u=r.a.f
t=J.v(r.e,p)
s=r.a
t=t!=null?s.x:s.r
return A.asS(B.ft(C.M,!0,q,B.ar(C.O,N.atu(C.O,B.H("A",q,q,1,q,q,q,q,B.af(q,q,t,q,q,q,q,q,q,q,q,s.f-1,q,q,C.eT,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.k,C.ajm),C.k,q,q,new B.b3(v,q,w,q,q,q,q,C.L),q,u,q,q,q,q,q,u),C.k,C.C,0,q,q,q,q,q,C.bE),C.l,new A.a_z(new A.bUu(r,d),q),10,o,new A.bUv(r))},
bb3(d,e){var w,v=this,u=null,t=v.a,s=t.w,r=v.w
r===$&&B.b()
w=t.f
return A.asS(new B.ao(w,w,G.a3a(y.b,t.r,u,u,u),u),s,new B.ao(u,200,new A.Va(new A.bUz(v),6,u),u),0,r,new A.bUA(v,e))},
bvX(d){var w=null
B.e7(w,w,!0,w,new A.bUE(this),d,w,!0,!0,x.z)}}
A.MK.prototype={
B(d){var w=this,v=null,u=w.c
return B.hG(B.hP(!1,v,!0,new B.a0(w.f,new B.ao(v,v,w.baA(u),v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.e,v,v,v,v,v,v,v),v,v,v,u.c,v,v,v,v,v,v,E.fn)},
baA(d){var w=this
switch(d.a){case 0:return w.lT(D.Oq)
case 1:return w.lT(D.azi)
case 2:return w.lT(D.azp)
case 3:return w.lT(D.azm)
case 4:return w.lT(D.azl)
case 5:return w.lT(H.tq)
case 7:return w.lT(D.azh)
case 6:return w.lT(D.azg)
case 8:return w.lT(D.azo)
case 9:return w.lT(D.azn)
case 12:return w.lT(D.Oq)
case 14:return w.lT(D.aze)
case 21:return w.lT(D.azf)
case 15:return w.lT(D.azk)
case 16:return w.lT(D.azj)
case 10:return w.aro("packages/quill_html_editor/assets/h1_dark.png")
case 11:return w.aro("packages/quill_html_editor/assets/h2_dark.png")
case 13:return w.lT(D.azd)
case 19:return w.lT(U.Oc)
case 22:return w.lT(D.azs)
case 23:return w.lT(D.azr)
case 24:return w.lT(D.azq)
case 18:case 20:case 17:case 25:case 26:case 27:return C.cR}},
lT(d){var w=this,v=w.d?w.x:w.w
return B.aL(d,v,null,w.r)},
aro(d){var w=this,v=null,u=w.r
return new B.ao(u,u,G.a3a(d,w.d?w.x:w.w,v,v,v),v)},
iZ(d){var w=this
return A.dvV(w.x,w.w,w.r,d,null,w.f,w.c)}}
A.k3.prototype={
J(){return"ToolBarStyle."+this.b}}
A.av5.prototype={}
A.a_z.prototype={
B(d){var w=null
return B.ar(w,B.a2C(w,C.r,D.bDD,new A.b7O(this),19,w,L.mk,w,C.G,!0),C.k,C.l,w,w,w,120,w,w,w,w,w,120)}}
A.a1n.prototype={
M(){return new A.aOC()},
bRm(d){return this.r.$1(d)}}
A.aOC.prototype={
T(){this.d=new B.aU("fontBgColorKey"+J.ap(this.a.a),x.q)
this.ah()},
B(d){var w,v,u,t,s=this,r=null,q=s.a,p=q.f,o=q.e
q=q.c
w=s.d
w===$&&B.b()
v=s.aqp(!1,d)
u=s.a
t=u.e
return new B.a0(p,new B.ao(o,o,A.asS(new B.ao(t,t,G.a3a("packages/quill_html_editor/assets/edit_table.png",u.d,r,r,r),r),q,v,0,w,new A.ca6(s,d)),r),r)},
a7t(d,e,f){var w,v,u,t,s=null,r="packages/quill_html_editor/assets/insert_row_below.png"
switch(d.a){case 0:w="Insert Row Above"
r=y.b
break
case 1:w="Insert Row Below"
break
case 4:w="Delete Row"
r="packages/quill_html_editor/assets/delete_row.png"
break
case 5:w="Delete Column"
r="packages/quill_html_editor/assets/delete_column.png"
break
case 2:w="Insert Column Left"
r="packages/quill_html_editor/assets/insert_column_left.png"
break
case 3:w="Insert Column Right"
r="packages/quill_html_editor/assets/insert_column_right.png"
break
case 6:w="Delete Table"
r="packages/quill_html_editor/assets/delete_table.png"
break
default:w=""}v=this.a
u=v.c
t=v.e
v=v.d
return new A.qf(B.lD(B.hP(!1,s,!0,new B.a0(C.fZ,B.aq(B.a([new B.ao(t,t,G.a3a(r,v,s,s,s),s),P.bJ,B.bc(B.H(w,s,s,s,s,s,s,s,B.af(s,s,v,s,s,s,s,s,s,s,s,s,s,s,C.be,s,s,!0,s,s,s,s,s,s,s,s),s,s,s,s,s),1,s)],x.p),C.j,C.f,C.P,0,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new A.ca4(this,d,f,e),s,s,s,s,s,s,s),s,u,s,s,s),s)},
bvH(d,e){var w=null
B.e7(w,w,!0,w,new A.ca5(this,!0),e,w,!0,!0,x.z)},
aqp(d,e){var w,v=null
if(d)return M.h4(v,v,v,new A.qf(new B.eK(new A.ca2(this,!0),v),v),C.N,v,v,new B.d0(B.bs(8),C.x),v,v,v)
w=B.aB(e,v,x.w).w.a.a<450?350:v
return new B.ao(200,w,B.kn(!0,!0,!0,v,C.v,v,C.r,new A.ca3(this,!1),7,v,v,C.N,v,v,v,!0,C.G,!0),v)}}
A.tk.prototype={
J(){return"EditTableEnum."+this.b}}
A.a1r.prototype={
M(){var w=null,v=x.M
return new A.a1s(D.Ni,new B.tN(B.a([],v),w,w),new B.tN(B.a([],v),w,w))}}
A.a1s.prototype={
a_m(){},
l(){$.au.m9(this)
this.ai()},
T(){var w=this
w.ah()
w.w=new B.aU(J.ap(w.a.a),x.A)
$.au.RG$.push(new A.bhS(w))
$.au.dz$.push(w)},
bay(d){var w=this,v=w.w
v===$&&B.b()
v=$.au.b2$.x.h(0,v)
v=v==null?null:v.gan()
x.r.a(v)
if(w.c!=null)w.u(new A.bhM(w,v))},
bku(d){var w,v=this,u=v.c
u.toString
u=B.Ag(u,x.u)
u.toString
v.x=u
w=B.pU(new A.bhO(v),!1,!1)
v.r=w
u.jn(0,w)},
N3(){var w,v,u=this.c
if(u!=null){w=x.r.a(u.gan())
v=B.dp(w.cp(0,null),C.o)
return new A.hM(w.gD(0).a,w.gD(0).b,v.a,v.b)}this.xO()
return D.Ni},
aaj(d){return this.bvN(d)},
bvN(d){var w=0,v=B.k(x.H),u=this,t,s,r,q,p
var $async$aaj=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:p=B.Ag(d,x.u)
p.toString
u.y=p
p=u.e
t=u.N3()
s=u.c
s.toString
r=x.w
s=B.aB(s,null,r).w
q=u.c
q.toString
r=B.pU(new A.bhR(u,new A.aBL(D.awz,t,p,new A.hM(s.a.a,B.aB(q,null,r).w.a.b,0,0),u.a.f,8).bON(0,D.Nh)),!1,!1)
u.f=r
p=u.y
p.jn(0,r)
u.a.toString
return B.i(null,v)}})
return B.j($async$aaj,v)},
xO(){var w=this.f
if(w!=null){w.hX(0)
this.f=null}},
B(d){var w=null,v=this.a,u=v.Q
return B.cF(w,v.c,C.r,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,u,w,w,w,w,w,w,w,w,!1,C.aa)},
LA(){var w,v=this
v.a.toString
if(v.f!=null)v.xO()
else{w=v.c
w.toString
v.aaj(w)}}}
A.aOK.prototype={}
A.an2.prototype={
bba(){var w,v=this,u=null,t=1,s=1,r=!1,q=0
switch(v.d.a){case 0:break
case 1:r=!0
break
case 2:t=-1
break
case 6:s=-1
break
case 7:r=!0
q=2
break
case 8:t=-1
s=-1
break
case 9:s=-1
q=3
break
case 10:r=!0
q=3
break
case 11:q=3
break
case 3:q=1
break
case 4:r=!0
q=1
break
case 5:s=-1
q=1
break}w=v.c
w=r?new A.aHl(w,u):new A.apg(w,u)
return B.bUQ(new B.Fy(q,B.i_(u,u,!1,u,w,new B.W(v.e,v.f)),u),u,t,s)},
B(d){return this.bba()}}
A.ZY.prototype={
M(){return new A.aMn()}}
A.aMn.prototype={
B(d){var w=null,v=this.a,u=v.r,t=v.c,s=v.d
return B.ft(C.M,!0,w,B.n2(B.ar(w,v.w,C.k,w,new B.ab(0,300,0,1/0),new B.b3(t,w,w,u,w,w,w,C.L),w,w,w,w,new B.aj(s,s,s,s),w,w,w),1),C.k,C.C,0,w,w,w,w,w,C.bE)}}
A.hM.prototype={}
A.pw.prototype={
J(){return"ElTooltipPosition."+this.b}}
A.azU.prototype={
B(d){var w=null,v=this.d
v=B.cF(w,B.ar(w,w,C.k,B.c0(C.e.aI(255*this.e),v.S()>>>16&255,v.S()>>>8&255,v.S()&255),w,w,w,w,w,w,w,w,w,w),C.r,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.f,w,w,w,w,w,w,w,w,!1,C.aa)
return v}}
A.apg.prototype={
b0(d,e){var w,v,u,t,s,r,q,p,o,n="cubicTo"
$.ax()
w=B.bm()
B.cz()
v=this.b
w.r=v.gn(v)
u=B.cz()
v=e.b
t=v*0.69
s=u.a
s===$&&B.b()
s.a.lineTo(0,t)
r=e.a
q=r*0.31
p=v*0.93
o=s.a
o.toString
B.fU(o,n,[0,v*0.95,r*0.18,v*1.09,q,p])
v=s.a
v.toString
B.fU(v,n,[q,p,r,0,r,0])
p=s.a
p.toString
B.fU(p,n,[r,0,0,0,0,0])
r=s.a
r.toString
B.fU(r,n,[0,0,0,t,0,t])
s=s.a
s.toString
B.fU(s,n,[0,t,0,t,0,t])
d.a.eI(u,w)},
h9(d){return!0}}
A.aHl.prototype={
b0(d,e){var w,v,u,t,s,r,q,p,o,n="cubicTo"
$.ax()
w=B.bm()
w.f=!0
v=this.b
w.r=v.gn(v)
u=B.cz()
v=e.a
t=v*0.66
s=e.b
r=s*0.86
q=u.a
q===$&&B.b()
q.a.lineTo(t,r)
s*=1.05
p=v*0.34
o=q.a
o.toString
B.fU(o,n,[v*0.58,s,v*0.42,s,p,r])
s=q.a
s.toString
B.fU(s,n,[p,r,0,0,0,0])
p=q.a
p.toString
B.fU(p,n,[0,0,v,0,v,0])
p=q.a
p.toString
B.fU(p,n,[v,0,t,r,t,r])
q=q.a
q.toString
B.fU(q,n,[t,r,t,r,t,r])
d.a.eI(u,w)},
h9(d){return!0}}
A.aBL.prototype={
aw0(){var w,v,u,t,s,r=this,q=r.c,p=q.a
q=q.b
w=r.b
v=w.c+w.a*0.5
w=w.d
u=r.e
t=r.a.b
s=r.f
return new A.o8(new A.hM(p,q,v,w-q-u-t),new A.hM(p,q,Math.floor(v),Math.floor(w-u-t)),D.awo,new B.dX(new B.bh(s,s),new B.bh(s,s),C.V,new B.bh(s,s)))},
YD(){var w,v,u,t,s,r,q=this,p=q.a,o=p.a
p=p.b
w=q.b
v=w.c+w.a*0.5
w=w.d
u=q.e
t=q.c
s=t.a
t=t.b
r=q.f
return new A.o8(new A.hM(s,t,v-s*0.5,w-t-u-p),new A.hM(o,p,Math.floor(v-o*0.5),Math.floor(w-u-p)),D.Nh,B.CV(new B.bh(r,r)))},
aw_(){var w,v,u,t,s,r,q=this,p=q.a,o=p.a
p=p.b
w=q.b
v=w.c
u=w.a*0.5
w=w.d
t=q.e
s=q.c
r=q.f
return new A.o8(new A.hM(o,p,v-s.a+u,w-s.b-t-p),new A.hM(o,p,Math.floor(v+u-o),Math.floor(w-t-p)),D.awr,new B.dX(new B.bh(r,r),new B.bh(r,r),new B.bh(r,r),C.V))},
avZ(){var w,v,u,t=this,s=t.c,r=s.a
s=s.b
w=t.b
v=w.c+w.a*0.5
w=w.d+w.b+t.e
u=t.f
return new A.o8(new A.hM(r,s,v,w+t.a.b),new A.hM(r,s,Math.ceil(v),Math.ceil(w)),D.awv,new B.dX(C.V,new B.bh(u,u),new B.bh(u,u),new B.bh(u,u)))},
anO(){var w,v,u,t,s,r=this,q=r.a,p=q.a
q=q.b
w=r.b
v=w.c+w.a*0.5
w=w.d+w.b+r.e
u=r.c
t=u.a
s=r.f
return new A.o8(new A.hM(t,u.b,v-t*0.5,w+q),new A.hM(p,q,Math.ceil(v-p*0.5),Math.ceil(w)),D.aww,B.CV(new B.bh(s,s)))},
avY(){var w,v,u,t,s=this,r=s.c,q=r.a
r=r.b
w=s.b
v=w.c+w.a*0.5
u=s.a
w=w.d+w.b+s.e
t=s.f
return new A.o8(new A.hM(q,r,v-q,w+u.b),new A.hM(q,r,v-u.a,Math.ceil(w)),D.awx,new B.dX(new B.bh(t,t),C.V,new B.bh(t,t),new B.bh(t,t)))},
au3(){var w,v,u,t=this,s=t.c,r=s.a,q=s.b,p=t.b
s=p.c-s.c
w=t.e
v=t.a.b
p=p.d+p.b*0.5
u=t.f
return new A.o8(new A.hM(r,q,s-r-w-v,p),new A.hM(r,q,Math.floor(s-w-v),p),D.awy,new B.dX(new B.bh(u,u),C.V,new B.bh(u,u),new B.bh(u,u)))},
au1(){var w,v,u,t,s=this,r=s.c,q=r.a,p=r.b,o=s.b
r=o.c-r.c
w=s.e
v=s.a
u=v.b
o=o.d+o.b*0.5
t=s.f
return new A.o8(new A.hM(q,p,r-q-w-u,o-p*0.5),new A.hM(q,p,Math.floor(r-w-u),Math.floor(o-v.a*0.5)),D.awp,B.CV(new B.bh(t,t)))},
au2(){var w,v,u,t,s=this,r=s.c,q=r.a,p=r.b,o=s.b
r=o.c-r.c
w=s.e
v=s.a
u=v.b
o=o.d+o.b*0.5
t=s.f
return new A.o8(new A.hM(q,p,r-q-w-u,o-p),new A.hM(q,p,Math.floor(r-w-u),Math.floor(o-v.a)),D.awq,new B.dX(new B.bh(t,t),new B.bh(t,t),new B.bh(t,t),C.V))},
awY(){var w,v,u,t,s,r=this,q=r.c,p=q.a
q=q.b
w=r.b
v=w.c+w.a+r.e
u=Math.floor(v)
w=w.d+w.b*0.5
t=Math.floor(w)
s=r.f
return new A.o8(new A.hM(p,q,Math.floor(v+r.a.b),Math.floor(w)),new A.hM(p,q,u,t),D.aws,new B.dX(C.V,new B.bh(s,s),new B.bh(s,s),new B.bh(s,s)))},
awW(){var w,v,u,t,s=this,r=s.c,q=r.a
r=r.b
w=s.b
v=w.c+w.a+s.e
w=w.d+w.b*0.5
u=s.a
t=s.f
return new A.o8(new A.hM(q,r,v+u.b,w-r*0.5),new A.hM(q,r,Math.floor(v),Math.floor(w-u.a*0.5)),D.awt,B.CV(new B.bh(t,t)))},
awX(){var w,v,u,t,s=this,r=s.c,q=r.a
r=r.b
w=s.b
v=w.c+w.a+s.e
w=w.d+w.b*0.5
u=s.a
t=s.f
return new A.o8(new A.hM(q,r,v+u.b,w-r),new A.hM(q,r,Math.floor(v),w-u.a),D.awu,new B.dX(new B.bh(t,t),new B.bh(t,t),C.V,new B.bh(t,t)))},
aqX(d){var w,v=d.a,u=v.c,t=!1
if(u>0){w=this.d
if(u+v.a<w.a){u=v.d
v=u>0&&u+v.b<w.b}else v=t}else v=t
if(v)return!0
return!1},
b9g(){var w,v,u=this,t=[u.gbyg(),u.gb1A(),u.gbka(),u.gbtm(),u.gbqY(),u.gbqX(),u.gbkc(),u.gbto(),u.gbkb(),u.gbtn(),u.gbqW(),u.gbqV()]
for(w=0;w<12;++w){v=t[w]
if(u.aqX(v.$0()))return v.$0()}return u.YD()},
bON(d,e){var w,v=this
switch(e.a){case 0:w=v.aw0()
break
case 1:w=v.YD()
break
case 2:w=v.aw_()
break
case 6:w=v.avZ()
break
case 7:w=v.anO()
break
case 8:w=v.avY()
break
case 9:w=v.au3()
break
case 10:w=v.au1()
break
case 11:w=v.au2()
break
case 3:w=v.awY()
break
case 4:w=v.awW()
break
case 5:w=v.awX()
break
default:w=v.YD()
break}return v.aqX(w)?w:v.b9g()}}
A.o8.prototype={}
A.bsy.prototype={
J(){return"InputAction."+this.b}}
A.brx.prototype={
a2j(){var w=0,v=B.k(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$a2j=B.f(function(d,e){if(d===1){t.push(e)
w=u}while(true)switch(w){case 0:u=3
w=6
return B.d($.cXc.c4().a2k(!1,C.axm,!0),$async$a2j)
case 6:r=e
if(r!=null){q=J.h3(r.a)
p=q.c
if(p!=null){o=C.ie.gm_().cm(p)
s.a.$1("data:image/"+B.n(C.b.gZ(q.b.split(".")))+";base64,"+B.n(o))}}u=1
w=5
break
case 3:u=2
j=t.pop()
k=B.ag(j)
if(k instanceof B.kq){n=k
B.hJ().$1("Unsupported operation "+B.n(n))}else{m=k
B.hJ().$1("File Picker "+J.ap(m))}w=5
break
case 2:w=1
break
case 5:return B.i(null,v)
case 1:return B.h(t.at(-1),v)}})
return B.j($async$a2j,v)}}
A.RZ.prototype={
M(){return new A.aQw(new B.aU(null,x.m))},
bS0(d,e){return this.c.$1(e)}}
A.aQw.prototype={
T(){this.f=new B.aU(C.c.j(B.dU(this.a.e)),x.q)
this.ah()},
B(d){return this.aP9(d)},
aP9(d){var w,v,u=this,t={}
t.a=null
w=u.f
w===$&&B.b()
v=u.bb5(!0,0,0,null,d)
return A.asS(u.a.r,C.l,v,10,w,new A.cic(t,u))},
bb5(d,e,f,g,h){var w,v,u,t=this,s=null,r={}
r.a=e
r.b=f
w=B.aB(h,s,x.w).w
v=A.bp1("#E7F0FE")
u=B.bs(10)
return new A.qf(B.qX(s,s,new B.a0(new B.aj(0,0,0,w.f.d),B.ar(C.O,B.aq(B.a([C.hi,new B.f_(1,C.bv,new B.a0(C.fp,B.ar(s,B.dN(s,!1,s,D.aBe,!1,s,s,s,s,1,1,!1,new A.ci8(t),s,s,s,s,!1,s,s,C.F,s,new A.ci9()),C.k,s,s,new B.b3(v,s,s,u,s,s,s,C.L),s,s,s,s,s,s,s,s),s),s),B.bN(s,s,s,s,s,s,D.aAw,s,s,s,new A.cia(r,t,g,!0,h),s,s,s,s,s),K.qa,B.bN(s,s,s,s,s,s,D.aA6,s,s,s,new A.cib(r,t,!0,h),s,s,s,s,s),K.qa],x.p),C.j,C.f,C.i,0,s),C.k,s,s,s,s,60,s,s,s,s,s,s),s),t.d,s),s)}}
A.aIl.prototype={
J(){return"UrlInputType."+this.b}}
A.Va.prototype={
M(){return new A.aix(B.aX(x.S),B.aX(x.e),new B.aU(null,x.A))},
bS1(d,e){return this.c.$2(d,e)}}
A.aix.prototype={
T(){this.ah()},
b6H(d){var w,v,u,t,s,r=this
r.b44()
w=$.au.b2$.x.h(0,r.w).Ap(x.r)
w.toString
v=B.a([],x.L)
u=new B.c7(new Float64Array(16))
u.fW()
if(w.f8(new B.x2(v,B.a([u],x.O),B.a([],x.b)),w.hx(d.gaO(d))))for(w=v.length,u=r.e,t=0;t<v.length;v.length===w||(0,B.M)(v),++t){s=v[t].a
if(s instanceof A.We&&!u.p(0,s)){u.t(0,s)
r.buw(s.G)}}},
buw(d){this.u(new A.czF(this,d))},
B(d){var w=this,v=null,u=w.gb6G(),t=w.a.d
return new A.qf(B.n_(C.cq,B.a2C(v,C.r,new I.u6(t,0,0,1),new A.czG(w),t*t,w.w,v,C.dx,C.a6,!0),v,v,u,v,u,v,v,w.gboz()),v)},
b44(){this.e.N(0)
this.u(new A.czD(this))},
boA(d){this.a.bS1(this.f+1,this.r+1)}}
A.Wf.prototype={
bb(d){var w=new A.We(this.e,null,new B.br(),B.aC(x.v))
w.be()
w.sbY(null)
return w},
bg(d,e){e.G=this.e}}
A.We.prototype={}
A.ac_.prototype={
gn(d){return this.c.a},
qs(d,e){var w=this.a
w===$&&B.b()
return B.dM(w.vw(d,e),x.z)},
Br(){var w=0,v=B.k(x.H),u=this,t
var $async$Br=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:t=u.c
t.c.OV(t.a)
t.a=t.b.kG(0)
B.cJ4("\x1b[34m[WebViewX]\x1b[0m "+("Current history: "+t.j(0))+"\x1b[0m",1024)
u.a5()
return B.i(null,v)}})
return B.j($async$Br,v)},
Bs(){var w=0,v=B.k(x.H),u=this,t
var $async$Bs=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:t=u.c
t.b.jT(0,t.a)
t.a=t.c.w9()
B.cJ4("\x1b[34m[WebViewX]\x1b[0m "+("Current history: "+t.j(0))+"\x1b[0m",1024)
u.a5()
return B.i(null,v)}})
return B.j($async$Bs,v)},
l(){var w=this.b
w.a6$=$.a9()
w.X$=0
this.fF()},
$iac0:1}
A.b9w.prototype={}
A.v4.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.v4&&e.a===this.a},
gv(d){return C.d.gv(this.a)}}
A.a1y.prototype={
J(){return"EmbedPosition."+this.b}}
A.a9s.prototype={
J(){return"SourceType."+this.b}}
A.ava.prototype={
j(d){return"\nHistoryStack:\nBack: "+this.b.j(0)+"\nCurrent: "+B.n(this.a)+"\nForward: "+this.c.j(0)+"\n"},
bBB(d){var w=this
if(d.k(0,w.a))return
w.b.jT(0,w.a)
w.a=d
w.c.N(0)}}
A.bZA.prototype={}
A.D1.prototype={
a_U(d,e,f,g){return this.bK2(d,e,f,g)},
bK2(d,e,f,g){var w=0,v=B.k(x.N),u,t=this,s,r
var $async$a_U=B.f(function(h,i){if(h===1)return B.h(i,v)
while(true)switch(w){case 0:s=B.dw(t.acu(B.rR(4,g,C.aA,!1)),0,null)
w=3
return B.d(f==="get"?B.cS5(s,e):B.b0p(s,d,null,e),$async$a_U)
case 3:r=i
u=t.aeL(B.mc(B.mb(r.e)).de(0,r.w))
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$a_U,v)}}
A.anY.prototype={
acu(d){return"https://cors.bridged.cc/"+d},
aeL(d){return d}}
A.aoV.prototype={
acu(d){return"https://api.codetabs.com/v1/proxy/?quest="+d},
aeL(d){return d}}
A.aJ_.prototype={
acu(d){return"https://we-cors-anywhere.herokuapp.com/"+d},
aeL(d){return d}}
A.qf.prototype={
B(d){return new A.a6w(this.c,!1,this.a)}}
A.Nq.prototype={
j(d){var w=this.d
return"WebViewContent:\nSource: "+this.a+"\nSourceType: "+this.b.b+"\nLast request Headers: none\nLast request Body: "+B.n(w==null?"none":w)+"\n"},
k(d,e){var w,v=this
if(e==null)return!1
if(e!==v){w=!1
if(e instanceof A.Nq)if(e.a===v.a)if(e.b===v.b)w=e.d==v.d}else w=!0
return w},
gv(d){var w=this
return(C.d.gv(w.a)^B.dU(w.b)^C.d3.gv(w.c)^J.V(w.d))>>>0}}
A.bt4.prototype={
J(){return"JavascriptMode."+this.b}}
A.b4b.prototype={
J(){return"AutoMediaPlaybackPolicy."+this.b}}
A.abZ.prototype={
M(){return new A.ajC()}}
A.ajC.prototype={
T(){var w,v,u,t,s,r=this,q=null
r.ah()
r.x=!1
r.a.toString
r.y=!1
w=E.kr.Bf()
r.e="_iframe"+("_"+B.dt(w,"-","_"))
r.d=r.b5a()
r.bsm(r.e)
w=r.a
v=w.c
w=w.d
u=r.y
t=$.a9()
u=new B.bL(u,t,x.Y)
s=x.o
t=new A.ac_(u,new A.ava(new A.Nq(v,w,q,q),B.nP(q,s),B.nP(q,s),x.K),t)
t.a1(0,r.gaB0())
u.a1(0,r.gasB())
r.w=t
w=r.a
v=w.d
u=!0
if(v!==D.adA)if(v!==D.adC)w=v===D.adB&&w.c==="about:blank"
else w=u
else w=u
if(w)r.b4A(r.gb3a())
else r.aot()
r.bsl()
B.hm(C.K,new A.cG4(r),x.P)},
bsm(d){$.Ct()
$.rZ().w6(d,new A.cG1(this),!0)},
b4A(d){var w=$.dc2(),v=this.e
v===$&&B.b()
w.m(0,"connect_js_to_flutter"+v,new A.cFX(this,d))},
bsl(){var w=this.d
w===$&&B.b()
this.f=B.cbX(w,"load",new A.cG0(this),!1,x.E.c)},
aot(){var w=this.a.w,v=this.w
v===$&&B.b()
w.$1(v)},
aos(d){this.a.at.$1(d)},
B(d){var w,v=null,u=this.a,t=u.f,s=u.r
u=u.a
w=this.e
w===$&&B.b()
u=B.amo(!0,new B.hT(new B.xy(w,v,v,C.jY,u),v))
w=this.y
w===$&&B.b()
u=B.a([new B.ao(t,s,u,v)],x.p)
if(w)u.push(B.pW(0,new A.a6w(B.ar(v,v,C.k,v,v,v,v,v,v,v,v,v,v,v),!1,v)))
else u.push(C.a2)
return new B.cj(C.ad,v,C.ac,C.v,u,v)},
b5a(){var w,v=this,u=document.createElement("iframe")
u.toString
w=v.e
w===$&&B.b()
u.id="id_"+w
u.name="name_"+v.e
w=u.style
w.border="none"
u.width=C.c.j(C.e.K(v.a.f))
u.height=C.c.j(C.e.K(v.a.r))
w=u.style
w.width="100%"
w=u.style
w.height="100%"
v.a.toString
u.allowFullscreen=!0
v.a.toString
w=u.sandbox
w.toString
C.b.aT(D.aRb,C.auu.gkw(w))
v.a.toString
u.sandbox.add("allow-scripts")
v.a.toString
u.allow=C.b.hw(D.aNU,new A.cFY())
return u},
bAK(){var w=this.w
w===$&&B.b()
w=w.c.a
this.aos(w.a)
this.aAy(w)},
bdK(){this.u(new A.cFZ(this))},
a6m(d,e){return this.b3H(d,e)},
b3H(d,e){var w=0,v=B.k(x.y),u,t=this
var $async$a6m=B.f(function(f,g){if(f===1)return B.h(g,v)
while(true)switch(w){case 0:t.a.toString
u=!0
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$a6m,v)},
aAy(d){var w,v,u=this,t=d.a
if(t.length===0){u.a.toString
return}w=d.b
switch(w.a){case 0:w=u.d
w===$&&B.b()
u.a.toString
v=u.e
v===$&&B.b()
w.srcdoc=A.cNO(t,!0,D.Hw,v)
break
case 1:case 2:if(t==="about:blank"){w=u.d
w===$&&B.b()
u.a.toString
v=u.e
v===$&&B.b()
w.srcdoc=A.cNO("<br>",!0,D.Hw,v)
break}if(!C.d.b8(t,B.bF("http[s]?://",!1,!1,!1))){u.a.toString
return}if(w===D.adB){w=u.d
w===$&&B.b()
w=B.dC0(w.contentWindow)
w.toString
J.deE(J.deh(w),t)}else u.bz3(d.c,"get",t)
break}},
Wo(d){return this.beP(d)},
beP(d){var w=0,v=B.k(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Wo=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:o=x.i.a(C.aH.ue(0,d,null))
n=J.a1(o)
m=B.b9(n.h(o,"href"))
n.j(o)
t.a.toString
s=t.w
s===$&&B.b()
w=3
return B.d(t.a6m(m,s.c.a.b),$async$Wo)
case 3:if(!f){t.a.toString
w=1
break}if(m==="javascript:history.back()"){t.w.Br()
w=1
break}else if(m==="javascript:history.forward()"){t.w.Bs()
w=1
break}r=B.b9(n.h(o,"method"))
q=n.h(o,"body")
if(q==null)p=null
else{n=x.N
p=B.I(n,n)
p.Zb(p,J.b7(x.j.a(q),new A.cG_(),x.J))}t.azr(p,t.w.c.a.c,r,m)
case 1:return B.i(u,v)}})
return B.j($async$Wo,v)},
azr(d,e,f,g){this.a7c(d,e,f,g).aJ(new A.cG2(this,g,e,d),x.P).kU(new A.cG3(this,g))},
bz3(d,e,f){return this.azr(null,d,e,f)},
a7c(d,e,f,g){return this.b8P(d,e,f,g)},
b8P(d,e,f,g){var w=0,v=B.k(x.N),u,t=this,s,r,q,p,o,n,m
var $async$a7c=B.f(function(h,i){if(h===1)return B.h(i,v)
while(true)$async$outer:switch(w){case 0:t.a.toString
p=B.B(D.aHh,x.W)
C.b.aSC(p)
s=p
t.a.toString
for(r=0;r<J.bj(s);++r){q=J.v(s,r)
B.a_(q).j(0)
t.a.toString
try{o=q.a_U(d,e,f,g)
u=o
w=1
break $async$outer}catch(l){B.a_(q).j(0)
t.a.toString
if(J.q(r,J.bj(s)-1)){o=B.uB("None of the provided proxies were able to fetch the given page.",null)
m=new B.am($.aw,x.I)
m.oK(o)
u=m
w=1
break $async$outer}continue}}o=B.uB("Bad state",null)
m=new B.am($.aw,x.I)
m.oK(o)
u=m
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$a7c,v)},
l(){var w=this,v=w.f
v===$&&B.b()
v.a2(0)
v=w.w
v===$&&B.b()
v.O(0,w.gaB0())
w.w.b.O(0,w.gasB())
w.ai()}}
var z=a.updateTypes(["o8()","~()","~(q7)","S9(@)","JX<@>(@)","pM(@)","~(j9,tE,l)","~(FH)","e(G,fO<@>)","ac0<@>(ac0<@>)","X<@>(tk)","fN(G)","qf(G,m)","@(dg)","~(lW)","Wf(G,m)","aD(pM)","K?(K?)","K?(@)"])
A.cH2.prototype={
$1(d){var w=function(e,f,g){return function(){return e(f,g,this,Array.prototype.slice.apply(arguments))}}(A.dBF,d,!1)
A.cRh(w,$.OB(),d)
return w},
$S:44}
A.cH3.prototype={
$1(d){return new this.a(d)},
$S:44}
A.cIA.prototype={
$1(d){return new A.S9(d)},
$S:z+3}
A.cIB.prototype={
$1(d){return new A.JX(d,x.R)},
$S:z+4}
A.cIC.prototype={
$1(d){return new A.pM(d)},
$S:z+5}
A.bpR.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=d.w=J.ap(d.w),p=B.a([],x.d)
if(e.geZ(e)>0)p.push(F.a9Y(C.d.ag(q,0,e.geZ(e))))
w=e.pk(0)
w.toString
if(f.length===0&&C.d.b8(w,"www."))v="https://"+w
else v=w
u=F.cWV("a")
u.b.m(0,"href",f+v)
u.ghu(0).N(0)
w=F.a9Y(w)
u.ghu(0).t(0,w)
p.push(u)
t=e.ges(e)
if(t<q.length)p.push(F.a9Y(C.d.d8(q,t)))
w=F.bfX()
w.ghu(0).H(0,p)
s=d.a
if(s==null)B.a7(B.aH("Node must have a parent to replace it."))
s=s.ghu(0)
r=d.a.ghu(0)
s.m(0,r.di(r,d),w)},
$S:z+6}
A.bpS.prototype={
$1(d){var w=J.ap(d.w)
d.w=w
B.uE(w,this.a,new A.bpQ(this.b,d),null)},
$S:z+2}
A.bpQ.prototype={
$1(d){this.a.$3(this.b,d,"mailto:")
return""},
$S:67}
A.bpT.prototype={
$1(d){var w=J.ap(d.w)
d.w=w
B.uE(w,this.a,new A.bpP(this.b,d),null)},
$S:z+2}
A.bpP.prototype={
$1(d){this.a.$3(this.b,d,"")
return""},
$S:67}
A.bpU.prototype={
$1(d){var w=J.ap(d.w)
d.w=w
B.uE(w,this.a,new A.bpO(this.b,d),null)},
$S:z+2}
A.bpO.prototype={
$1(d){this.a.$3(this.b,d,"tel:")
return""},
$S:67}
A.cgD.prototype={
$1(d){this.a.a.toString},
$S:83}
A.cgE.prototype={
$0(){B.hJ().$1("Editor Loaded :)")},
$S:0}
A.cgF.prototype={
$0(){var w,v=this.a
v.u(new A.cgC(v))
w=v.d
w===$&&B.b()
if(w.length!==0)v.tD(w)},
$S:0}
A.cgC.prototype={
$0(){this.a.e=!1},
$S:0}
A.cgB.prototype={
$1(d){return this.a.e?D.an_:C.a2},
$S:347}
A.cgx.prototype={
$1(d){B.hJ().$1("has focus "+d)
this.a.u(new A.cgv())},
$S:121}
A.cgv.prototype={
$0(){},
$S:0}
A.cgw.prototype={
$1(d){return B.hJ().$1("widget text change "+d)},
$S:6}
A.cgA.prototype={
$0(){},
$S:0}
A.cgz.prototype={
$1(d){return B.hJ().$1("Editor resized "+B.n(d))},
$S:156}
A.cgy.prototype={
$1(d){return B.hJ().$1("index "+B.n(d.a)+", range "+B.n(d.b))},
$S:z+7}
A.bFn.prototype={
$2(d,e){var w=e.b
if(w!=null)this.a.x=w
if(e.a===X.oF)return B.iC(new A.bFm(this.a))
w=this.a.a.db.$1(d)
return w},
$S:z+8}
A.bFm.prototype={
$2(d,e){var w=this.a,v=e.b
w.e=w.as_(v)
return w.b24(d,v)},
$S:89}
A.bFk.prototype={
$1(d){this.a.as=!1},
$S:6}
A.bFj.prototype={
$1(d){return this.a.d=d},
$S:z+9}
A.bFl.prototype={
$1(d){B.hm(C.bo,null,x.z).aJ(new A.bF9(this.a),x.P)},
$S:6}
A.bF9.prototype={
$1(d){var w,v=this.a
v.as=!0
B.hJ().$1("_editorLoaded true")
if(v.c!=null)v.u(new A.bF8())
v.a.r.a_J(!0)
w=v.a
w.at.$0()
v.a.r.d.t(0,"")},
$S:12}
A.bF8.prototype={
$0(){},
$S:0}
A.bFc.prototype={
$1(d){var w,v,u=this.a,t=u.r
t===$&&B.b()
w=J.iK(d)
if(t===B.lf(w.j(d)))return
try{t=B.lf(w.j(d))
u.r=t==null?u.a.d:t}catch(v){u.r=u.a.d}finally{if(u.c!=null)u.u(new A.bFb(u))
u.a.as.$1(u.r)}},
$S:12}
A.bFb.prototype={
$0(){var w=this.a.r
w===$&&B.b()
return w},
$S:0}
A.bFd.prototype={
$1(d){var w,v
try{w=this.a.a.r.b.ga0()
if(w!=null)w.bX0(C.aH.ue(0,d,null))}catch(v){}},
$S:12}
A.bFe.prototype={
$1(d){var w,v,u,t,s
if(""===d)return
try{u=this.a
u.a.toString
w=""
t=B.bF("<[^>]*>|&[^;]+;",!0,!1,!1)
v=B.dt(d,t," ")
if(J.uM(v)==="")w=""
else w=d
u.a.w.$1(w)
u.a.r.c.t(0,w)}catch(s){}},
$S:12}
A.bFf.prototype={
$1(d){var w=this.a,v=(d==null?null:J.ap(d))==="true"
w.w=v
w.a.z.$1(v)
w.a.toString},
$S:12}
A.bFg.prototype={
$1(d){var w,v,u,t,s
if(""===d)return
try{u=this.a
u.a.toString
w=""
t=B.bF("<[^>]*>|&[^;]+;",!0,!1,!1)
v=B.dt(d,t," ")
if(J.uM(v)==="")w=""
else w=d
u=u.a
u.r.c.t(0,w)}catch(s){}},
$S:12}
A.bFh.prototype={
$1(d){var w,v,u
try{w=this.a
v=w.a
v.toString
if(!w.w){w.w=!0
v.z.$1(!0)}w=w.a.Q
w.$1(d!=null?A.d0v(C.aH.ue(0,d,null)):new A.FH(0,0))}catch(u){}},
$S:12}
A.bFi.prototype={
$1(d){var w=this.a
w.as=!0
if(w.c!=null)w.u(new A.bFa())},
$S:12}
A.bFa.prototype={
$0(){},
$S:0}
A.bF7.prototype={
$1(d){this.a.$1(d)},
$S:6}
A.bF6.prototype={
$1(d){this.a.$0()},
$S:6}
A.cHB.prototype={
$1(d){return"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890".charCodeAt($.dd2().AK(62))},
$S:74}
A.bUF.prototype={
$0(){},
$S:0}
A.bUp.prototype={
$1(d){this.a.a.d.a_I(d)},
$S:83}
A.bUq.prototype={
$1(d){this.a.a.d.ws("link",d)},
$S:83}
A.bUr.prototype={
$1(d){return this.a.a.d.a1g(d)},
$S:z+10}
A.bUs.prototype={
$0(){var w=0,v=B.k(x.H),u=this,t,s,r,q,p,o,n,m
var $async$$0=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:o=u.a
n=o.a
m=n.c
w=m===D.bLu?2:4
break
case 2:u.b.a.d.ZQ()
w=3
break
case 4:w=m===D.bLA?5:7
break
case 5:u.b.a.d.tv()
w=6
break
case 7:w=m===D.bLx?8:10
break
case 8:u.b.a.d.tl()
w=9
break
case 10:w=m===D.bLB?11:13
break
case 11:w=14
return B.d(new A.brx(new A.bUn(u.b)).a2j(),$async$$0)
case 14:w=12
break
case 13:if(m===D.aeI){t=B.a([],x.c)
for(n=u.b,m=n.d,s=m.length,r=0;r<m.length;m.length===s||(0,B.M)(m),++r)t.push(m[r].iZ(!1))
n.d=t}else if(m===D.aeF){for(n=u.b.d,m=n.length,r=0;r<n.length;n.length===m||(0,B.M)(n),++r){q=n[r]
if(q.c===D.aeH)q.iZ(!1)}n=o.a
o.a=n.iZ(!n.d)}else if(m===D.aeH){for(n=u.b.d,m=n.length,r=0;r<n.length;n.length===m||(0,B.M)(n),++r){q=n[r]
if(q.c===D.aeF)q.iZ(!1)}n=o.a
o.a=n.iZ(!n.d)}else o.a=n.iZ(!n.d)
case 12:case 9:case 6:case 3:n=u.b
o=o.a
p=n.bau(o.c,o.d)
n.a.d.ws(p.h(0,"format"),p.h(0,"value"))
if(J.q(J.v(n.e,"direction"),"rtl"))n.a.d.ws("align","right")
n.u(new A.bUo())
return B.i(null,v)}})
return B.j($async$$0,v)},
$S:2}
A.bUn.prototype={
$1(d){var w=this.a
J.bZ(w.e,"image",d)
w.a.d.a_H(d)},
$S:83}
A.bUo.prototype={
$0(){},
$S:0}
A.bUm.prototype={
$1(d){var w=this.a
return B.a([w.VS("Small"),w.VS("Normal"),w.VS("Large"),w.VS("Huge")],x.p)},
$S:1063}
A.bUl.prototype={
$1(d){var w,v=this.a
J.bZ(v.e,"size",d)
w=v.a.d
w.ws("size",d==="normal"?"":d)
v.u(new A.bUk())},
$S:28}
A.bUk.prototype={
$0(){},
$S:0}
A.bUj.prototype={
$1(d){var w="align",v=this.a,u=v.e
J.bZ(u,w,d==="left"?"":d)
v.a.d.ws(w,J.v(v.e,w))
v.u(new A.bUi())},
$S:11}
A.bUi.prototype={
$0(){},
$S:0}
A.bUy.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.b()
if(v.ga0()!=null)w.r.ga0().LA()},
$S:0}
A.bUx.prototype={
$1(d){var w,v,u="color",t=this.a
J.bZ(t.e,u,d)
w=t.d
v=this.b
w[v]=w[v].iZ(!0)
t.a.d.ws(u,J.v(t.e,u))
t.u(new A.bUw())
w=t.r
w===$&&B.b()
if(w.ga0()!=null)t.r.ga0().xO()},
$S:83}
A.bUw.prototype={
$0(){},
$S:0}
A.bUv.prototype={
$0(){var w=this.a,v=w.f
v===$&&B.b()
if(v.ga0()!=null)w.f.ga0().LA()},
$S:0}
A.bUu.prototype={
$1(d){var w,v,u="background",t=this.a
J.bZ(t.e,u,d)
w=t.d
v=this.b
w[v]=w[v].iZ(!0)
t.a.d.ws(u,J.v(t.e,u))
t.u(new A.bUt())
w=t.f
w===$&&B.b()
if(w.ga0()!=null)t.f.ga0().xO()},
$S:83}
A.bUt.prototype={
$0(){},
$S:0}
A.bUA.prototype={
$0(){var w,v=this.b
if(B.aB(v,null,x.w).w.a.a<480)this.a.bvX(v)
else{v=this.a
w=v.w
w===$&&B.b()
if(w.ga0()!=null)v.w.ga0().LA()}},
$S:0}
A.bUz.prototype={
$2(d,e){var w,v=this.a
v.a.d.QR(d,e)
w=v.w
w===$&&B.b()
if(w.ga0()!=null)v.w.ga0().xO()},
$S:345}
A.bUE.prototype={
$1(d){var w=null
return M.h4(w,w,w,new A.qf(new B.eK(new A.bUD(this.a),w),w),C.N,w,w,new B.d0(B.bs(8),C.x),w,w,w)},
$S:z+11}
A.bUD.prototype={
$1(d){var w=null,v=x.p
return new B.ao(300,310,B.ae(B.a([B.aq(B.a([D.bDj,D.awS,B.bN(w,w,w,w,w,w,Y.kO,w,w,w,new A.bUB(d),w,w,w,w,w)],v),C.j,C.f,C.P,0,w),B.bc(new A.Va(new A.bUC(this.a,d),8,w),1,w),C.fJ],v),C.j,C.bm,C.P,0,w,C.m),w)},
$S:343}
A.bUB.prototype={
$0(){return B.bt(this.a,!1).dr()},
$S:0}
A.bUC.prototype={
$2(d,e){this.a.a.d.QR(d,e)
B.bt(this.b,!1).dr()},
$S:345}
A.b7O.prototype={
$2(d,e){var w=null
return new A.qf(B.cF(w,new B.a0(C.fZ,B.ar(w,w,C.k,w,w,new B.b3(A.bp1(D.RT[e]),w,B.fz(C.n,C.B,0.3),w,w,w,w,C.L),w,40,w,w,w,w,w,40),w),C.r,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.b7N(this.a,e),w,w,w,w,w,w,w,w,!1,C.aa),w)},
$S:z+12}
A.b7N.prototype={
$0(){this.a.c.$1(D.RT[this.b])},
$S:0}
A.ca6.prototype={
$0(){var w,v=this.b
if(B.aB(v,null,x.w).w.a.a<480)this.a.bvH(!0,v)
else{v=this.a
w=v.d
w===$&&B.b()
if(w.ga0()!=null)v.d.ga0().LA()}},
$S:0}
A.ca4.prototype={
$0(){var w,v=this,u=v.a
u.a.bRm(v.b)
if(v.c)B.bt(v.d,!1).dr()
else{w=u.d
w===$&&B.b()
if(w.ga0()!=null)u.d.ga0().xO()}},
$S:0}
A.ca5.prototype={
$1(d){return this.a.aqp(this.b,d)},
$S:24}
A.ca2.prototype={
$1(d){var w,v=this,u=null,t=x.w
if(B.aB(d,u,t).w.a.a<380)t=B.kn(!0,!0,!0,u,C.v,u,C.r,new A.ca0(v.a,v.b),7,u,u,u,u,u,u,!1,C.G,!0)
else{w=B.a2C(u,C.r,new I.u6(B.aB(d,u,t).w.a.a<380?1:2,0,0,3.3333333333333335),new A.ca1(v.a,v.b),7,u,u,u,C.G,!0)
t=w}return new B.ao(400,u,B.ae(B.a([D.bAe,new B.f_(1,C.bv,new B.a0(C.cc,t,u),u),C.fJ],x.p),C.j,C.f,C.P,0,u,C.m),u)},
$S:343}
A.ca0.prototype={
$2(d,e){var w=B.a(D.EO.slice(0),x.x)
return this.a.a7t(w[e],d,this.b)},
$S:41}
A.ca1.prototype={
$2(d,e){var w=B.a(D.EO.slice(0),x.x)
return this.a.a7t(w[e],d,this.b)},
$S:41}
A.ca3.prototype={
$2(d,e){var w=B.a(D.EO.slice(0),x.x)
return this.a.a7t(w[e],d,this.b)},
$S:41}
A.bhS.prototype={
$1(d){var w=this.a,v=w.c
v.toString
return w.bku(v)},
$S:4}
A.bhM.prototype={
$0(){var w=this.a,v=this.b
w.e=new A.hM(v.gD(0).a,v.gD(0).b,0,0)
w=w.r
if(w!=null)w.hX(0)},
$S:0}
A.bhO.prototype={
$1(d){var w,v,u=this.a
$.au.RG$.push(new A.bhN(u,d))
w=u.w
w===$&&B.b()
v=u.N3()
return B.n2(B.bG(A.cVg(u.a.e,C.l,w,2,C.bh,v),null,null),0)},
$S:1066}
A.bhN.prototype={
$1(d){return this.a.bay(this.b)},
$S:4}
A.bhR.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a
q.a.toString
w=this.b
v=w.a
u=q.N3()
t=q.a
s=t.d
v=B.e0(r,A.cVg(t.e,s,r,2,w.d,u),r,r,v.c,r,v.d,r)
u=w.b
u=B.e0(r,new A.an2(s,w.c,16,10,r),r,r,u.c,r,u.d,r)
w=q.N3()
s=q.N3()
return new B.cj(C.ad,r,C.ac,C.v,B.a([new A.qf(new A.azU(!0,C.ax,0.7,new A.bhP(q),r),r),v,u,B.e0(r,B.cF(r,q.a.c,C.r,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.bhQ(),r,r,r,r,r,r,r,r,!1,C.aa),r,r,s.c,r,w.d,r)],x.p),r)},
$S:381}
A.bhP.prototype={
$0(){this.a.xO()},
$S:0}
A.bhQ.prototype={
$0(){},
$S:0}
A.cic.prototype={
$0(){var w=0,v=B.k(x.H),u=this,t,s,r
var $async$$0=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:s=u.b
r=u.a
w=2
return B.d(s.a.e.Tj(),$async$$0)
case 2:r.a=e
t=s.f
t===$&&B.b()
if(t.ga0()!=null)s.f.ga0().LA()
return B.i(null,v)}})
return B.j($async$$0,v)},
$S:2}
A.ci8.prototype={
$1(d){var w=this.a
w.u(new A.ci7(w,d))},
$S:6}
A.ci7.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.ci9.prototype={
$1(d){if(d==null||d.length===0)return"Can't be empty"
return null},
$S:58}
A.cia.prototype={
$0(){var w,v,u=this,t=Date.now(),s=u.a
if(t-s.a<500)return
s.a=t
t=u.b
if(t.d.ga0().jP()){s=u.c
if(s!=null){w=t.a.e
v=s.a
if(v==null)v=0
s=s.b
w.U5(0,v,s==null?0:s)}B.hm(R.MJ,null,x.z).aJ(new A.ci5(t,u.d,u.e),x.P)}else{t.e=null
t.u(new A.ci6())}},
$S:0}
A.ci5.prototype={
$1(d){var w,v=this.a,u=v.a
u.toString
w=v.e
u.bS0(0,w==null?"":w)
v=v.f
v===$&&B.b()
v.ga0().xO()},
$S:12}
A.ci6.prototype={
$0(){},
$S:0}
A.cib.prototype={
$0(){var w=Date.now(),v=this.a
if(w-v.b<500)return
v.b=w
w=this.b.f
w===$&&B.b()
w.ga0().xO()},
$S:0}
A.czF.prototype={
$0(){var w,v,u,t,s=this.a,r=s.d
r.t(0,this.b)
w=B.B(r,B.t(r).i("cE.E"))
C.b.dR(w,new A.czE())
s.r=C.e.hO(C.b.gZ(w),s.a.d)
s.f=C.e.au(C.b.gZ(w),s.a.d)
r.N(0)
for(v=0,u=0;u<s.a.d;++u)for(t=0;t<s.a.d;++t){if(u<=s.r&&t<=s.f)r.t(0,v);++v}},
$S:0}
A.czE.prototype={
$2(d,e){return d-e},
$S:263}
A.czG.prototype={
$2(d,e){var w=null,v=this.a.d,u=v.p(0,e)?H.Cj:C.C,t=v.p(0,e)?2:1
return new A.Wf(e,B.ar(w,w,C.k,w,w,new B.b3(u,w,B.fz(v.p(0,e)?H.M5:C.m7,C.B,t),w,w,w,w,C.L),w,w,w,L.mk,w,w,w,w),w)},
$S:z+15}
A.czD.prototype={
$0(){this.a.d.N(0)},
$S:0}
A.bq4.prototype={
$2(d,e){return d+C.d.aV("\n",2)+e},
$S:117}
A.bq5.prototype={
$1(d){var w=d.b[1]
w.toString
return"<"+this.a+w+"> \n"+this.b},
$S:67}
A.cG4.prototype={
$0(){var w=this.a,v=w.w
v===$&&B.b()
w.aAy(v.c.a)},
$S:7}
A.cG1.prototype={
$1(d){var w=this.a.d
w===$&&B.b()
return w},
$S:1067}
A.cFX.prototype={
$1(d){var w,v,u,t=this.a
t.r=d
for(w=t.a.y,w=B.ed(w,w.r,B.t(w).c),v=w.$ti.c;w.q();){u=w.d
if(u==null)u=v.a(u)
t.r.m(0,u.a,u.b)}t.r.m(0,"WebOnClickInsideIframe",new A.cFW(t))
w=t.w
w===$&&B.b()
w.a=t.r
this.b.$0()},
$S:z+16}
A.cFW.prototype={
$1(d){this.a.Wo(B.b9(d))},
$S:12}
A.cG0.prototype={
$1(d){var w,v,u=this.a
u.e===$&&B.b()
w=u.a
w.toString
v=u.x
v===$&&B.b()
if(!v){u.x=!0
w=u.w
w===$&&B.b()
u.aos(w.c.a.a)}else{u=u.w
u===$&&B.b()
w.ax.$1(u.c.a.a)}},
$S:197}
A.cFY.prototype={
$2(d,e){return d+"; "+e},
$S:117}
A.cFZ.prototype={
$0(){var w=this.a,v=w.w
v===$&&B.b()
w.y=v.b.a},
$S:0}
A.cG_.prototype={
$1(d){var w=J.a1(d)
return new B.bx(J.ap(w.h(d,0)),J.ap(w.h(d,1)),x.J)},
$S:1068}
A.cG2.prototype={
$1(d){var w,v=this,u=v.a,t=v.b,s=A.cY_(D.awE,d,'      <base href="'+t+"\">\n      <script>\n\n      document.addEventListener('click', e => {\n        if (frameElement && document.activeElement && document.activeElement.href) {\n          e.preventDefault()\n\n          var returnedObject = JSON.stringify({method: 'get', href: document.activeElement.href});\n          frameElement.contentWindow.WebOnClickInsideIframe && frameElement.contentWindow.WebOnClickInsideIframe(returnedObject)\n        }\n      })\n      document.addEventListener('submit', e => {\n        if (frameElement && document.activeElement && document.activeElement.form && document.activeElement.form.action) {\n          e.preventDefault()\n\n          if (document.activeElement.form.method === 'post') {\n            var formData = new FormData(document.activeElement.form);\n            \n            var returnedObject = JSON.stringify({method: 'post', href: document.activeElement.form.action, body: [...formData]});\n            frameElement.contentWindow.WebOnClickInsideIframe && frameElement.contentWindow.WebOnClickInsideIframe(returnedObject)\n          } else {\n            var urlWithQueryParams = document.activeElement.form.action + '?' + new URLSearchParams(new FormData(document.activeElement.form))\n\n            var returnedObject = JSON.stringify({method: 'get', href: urlWithQueryParams});\n            frameElement.contentWindow.WebOnClickInsideIframe && frameElement.contentWindow.WebOnClickInsideIframe(returnedObject)\n          }\n        }\n      })\n      </script>\n      "),r=u.d
r===$&&B.b()
u.a.toString
w=u.e
w===$&&B.b()
r.srcdoc=A.cNO(s,!0,D.Hw,w)
w=u.w
w===$&&B.b()
w.c.bBB(new A.Nq(t,D.adC,v.c,v.d))
u.a.toString},
$S:83}
A.cG3.prototype={
$1(d){var w=this.a
w.a.toString
B.n(d)
w.a.toString},
$S:12};(function aliases(){var w=A.pM.prototype
w.aUw=w.h
w.aUx=w.m
w=A.X1.prototype
w.amJ=w.m})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_1u
w(A,"dJT","cRc",17)
w(A,"dJS","cRb",18)
var t
v(t=A.aBL.prototype,"gbqY","aw0",0)
v(t,"gbyg","YD",0)
v(t,"gbqX","aw_",0)
v(t,"gbqW","avZ",0)
v(t,"gb1A","anO",0)
v(t,"gbqV","avY",0)
v(t,"gbkc","au3",0)
v(t,"gbka","au1",0)
v(t,"gbkb","au2",0)
v(t,"gbto","awY",0)
v(t,"gbtm","awW",0)
v(t,"gbtn","awX",0)
u(t=A.aix.prototype,"gb6G","b6H",13)
u(t,"gboz","boA",14)
v(A.ac_.prototype,"gfw","l",1)
v(t=A.ajC.prototype,"gb3a","aot",1)
v(t,"gaB0","bAK",1)
v(t,"gasB","bdK",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.ch,[A.cH2,A.cH3,A.cIA,A.cIB,A.cIC,A.bpR,A.bpS,A.bpQ,A.bpT,A.bpP,A.bpU,A.bpO,A.cgD,A.cgB,A.cgx,A.cgw,A.cgz,A.cgy,A.bFk,A.bFj,A.bFl,A.bF9,A.bFc,A.bFd,A.bFe,A.bFf,A.bFg,A.bFh,A.bFi,A.bF7,A.bF6,A.cHB,A.bUp,A.bUq,A.bUr,A.bUn,A.bUm,A.bUl,A.bUj,A.bUx,A.bUu,A.bUE,A.bUD,A.ca5,A.ca2,A.bhS,A.bhO,A.bhN,A.bhR,A.ci8,A.ci9,A.ci5,A.bq5,A.cG1,A.cFX,A.cFW,A.cG0,A.cG_,A.cG2,A.cG3])
u(B.K,[A.pM,A.aCm,A.FH,A.hM,A.aBL,A.o8,A.brx,A.b9w,A.v4,A.ava,A.bZA,A.D1,A.Nq])
u(A.pM,[A.S9,A.X1])
t(A.JX,A.X1)
t(A.HW,B.eQ)
u(B.ad,[A.Sx,A.a6w,A.MK,A.a_z,A.an2,A.azU,A.qf])
u(B.L,[A.a2T,A.a6Y,A.aaC,A.a1n,A.a1r,A.ZY,A.RZ,A.Va,A.abZ])
u(B.N,[A.aPX,A.a6Z,A.aaD,A.aOC,A.aOK,A.aMn,A.aQw,A.aix,A.ajC])
u(B.d_,[A.cgE,A.cgF,A.cgC,A.cgv,A.cgA,A.bF8,A.bFb,A.bFa,A.bUF,A.bUs,A.bUo,A.bUk,A.bUi,A.bUy,A.bUw,A.bUv,A.bUt,A.bUA,A.bUB,A.b7N,A.ca6,A.ca4,A.bhM,A.bhP,A.bhQ,A.cic,A.ci7,A.cia,A.ci6,A.cib,A.czF,A.czD,A.cG4,A.cFZ])
u(B.ey,[A.bFn,A.bFm,A.bUz,A.bUC,A.b7O,A.ca0,A.ca1,A.ca3,A.czE,A.czG,A.bq4,A.cFY])
u(B.fm,[A.k3,A.tk,A.pw,A.bsy,A.aIl,A.a1y,A.a9s,A.bt4,A.b4b])
t(A.av5,B.O)
t(A.a1s,A.aOK)
u(B.tc,[A.apg,A.aHl])
t(A.Wf,B.bB)
t(A.We,B.vV)
t(A.ac_,B.hK)
u(A.D1,[A.anY,A.aoV,A.aJ_])
w(A.X1,B.a4)
v(A.aOK,B.eH)})()
B.ce(b.typeUniverse,JSON.parse('{"S9":{"pM":[]},"JX":{"a4":["1"],"D":["1"],"b2":["1"],"pM":[],"w":["1"],"a4.E":"1","w.E":"1"},"HW":{"eQ":[],"bz":[],"bq":[],"e":[]},"Sx":{"ad":[],"e":[]},"a2T":{"L":[],"e":[]},"aPX":{"N":["a2T"]},"a6w":{"ad":[],"e":[]},"a6Y":{"L":[],"e":[]},"a6Z":{"N":["a6Y"]},"aaC":{"L":[],"e":[]},"aaD":{"N":["aaC"]},"MK":{"ad":[],"e":[]},"av5":{"O":[]},"a_z":{"ad":[],"e":[]},"a1n":{"L":[],"e":[]},"aOC":{"N":["a1n"]},"a1r":{"L":[],"e":[]},"a1s":{"N":["a1r"],"eH":[]},"an2":{"ad":[],"e":[]},"ZY":{"L":[],"e":[]},"aMn":{"N":["ZY"]},"azU":{"ad":[],"e":[]},"apg":{"ay":[]},"aHl":{"ay":[]},"RZ":{"L":[],"e":[]},"aQw":{"N":["RZ"]},"Va":{"L":[],"e":[]},"Wf":{"bB":[],"aP":[],"e":[]},"We":{"Z":[],"bu":["Z"],"Y":[],"aQ":[]},"aix":{"N":["Va"]},"ac_":{"ay":[],"ac0":["pM"]},"anY":{"D1":[]},"aoV":{"D1":[]},"aJ_":{"D1":[]},"qf":{"ad":[],"e":[]},"abZ":{"L":[],"e":[]},"ajC":{"N":["abZ"]}}'))
B.wI(b.typeUniverse,JSON.parse('{"X1":1,"ac0":1}'))
var y={b:"packages/quill_html_editor/assets/insert_table.png"}
var x=(function rtii(){var w=B.E
return{B:w("z5"),W:w("D1"),v:w("eZ"),C:w("v4"),k:w("aF"),D:w("cU"),Z:w("mT"),_:w("X<@>"),F:w("X<l?>"),K:w("ava<Nq>"),t:w("JK"),G:w("u<jS<l>>"),g:w("u<jS<@>>"),x:w("u<tk>"),L:w("u<pE<aQ>>"),O:w("u<c7>"),d:w("u<j9>"),M:w("u<tM>"),s:w("u<l>"),c:w("u<MK>"),f:w("u<k3>"),p:w("u<e>"),b:w("u<Oi>"),a:w("u<b8>"),R:w("JX<@>"),l:w("Sb"),q:w("aU<a1s>"),m:w("aU<pB>"),h:w("aU<a6Z>"),A:w("aU<N<L>>"),U:w("aU<aaD>"),j:w("D<@>"),J:w("bx<l,l>"),i:w("A<l,@>"),w:w("hB"),V:w("cX"),P:w("aD"),u:w("tN"),r:w("Z"),n:w("FH"),N:w("l"),Q:w("jw"),X:w("ck<l>"),Y:w("bL<x>"),o:w("Nq"),aX:w("df<q7>"),cg:w("Nr"),bj:w("yo"),e:w("We"),E:w("aOM<cU>"),I:w("am<l>"),y:w("x"),z:w("@"),S:w("m"),T:w("l?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bT8=new A.b4b(0,"requireUserActionForAllMediaTypes")
D.akV=new A.anY()
D.akZ=new A.aoV()
D.amu=new A.aJ_()
D.aHh=B.a(w([D.akV,D.akZ,D.amu]),B.E("u<D1>"))
D.aRb=B.a(w(["allow-downloads","allow-forms","allow-modals","allow-orientation-lock","allow-pointer-lock","allow-popups","allow-popups-to-escape-sandbox","allow-presentation","allow-same-origin"]),x.s)
D.aNU=B.a(w(["accelerometer","clipboard-write","encrypted-media","gyroscope","picture-in-picture"]),x.s)
D.bTh=new A.b9w()
D.amw=new A.bZA()
D.an7=new B.qI(C.qA,0.4,null,null,null,null,null,null,null,null,null)
D.an_=new B.l1(C.O,null,null,D.an7,null)
D.avC=new B.aj(10,10,0,0)
D.awo=new A.pw(0,"topStart")
D.Nh=new A.pw(1,"topCenter")
D.awp=new A.pw(10,"leftCenter")
D.awq=new A.pw(11,"leftEnd")
D.awr=new A.pw(2,"topEnd")
D.aws=new A.pw(3,"rightStart")
D.awt=new A.pw(4,"rightCenter")
D.awu=new A.pw(5,"rightEnd")
D.awv=new A.pw(6,"bottomStart")
D.aww=new A.pw(7,"bottomCenter")
D.awx=new A.pw(8,"bottomEnd")
D.awy=new A.pw(9,"leftStart")
D.Ni=new A.hM(0,0,0,0)
D.awz=new A.hM(16,10,0,0)
D.awD=new A.a1y(1,"aboveBodyCloseTag")
D.awE=new A.a1y(2,"belowHeadOpenTag")
D.awF=new A.a1y(3,"aboveHeadCloseTag")
D.bG3=new B.a6(!0,null,null,null,null,null,16,C.eT,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJD=new B.cx("Select Rows x Columns",null,D.bG3,null,null,null,null,null,null,null,null,null,null,null,null)
D.awS=new B.oB(1,C.h0,D.bJD,null)
D.ayv=new B.az(58027,"MaterialIcons",null,!1)
D.ayw=new B.az(58028,"MaterialIcons",null,!1)
D.ayx=new B.az(58029,"MaterialIcons",null,!1)
D.ayy=new B.az(58030,"MaterialIcons",null,!1)
D.ayG=new B.az(58240,"MaterialIcons",null,!1)
D.azd=new B.az(59812,"MaterialIcons",null,!1)
D.aze=new B.az(59816,"MaterialIcons",null,!1)
D.Oq=new B.az(59818,"MaterialIcons",null,!1)
D.azf=new B.az(59819,"MaterialIcons",null,!1)
D.azg=new B.az(59823,"MaterialIcons",null,!0)
D.azh=new B.az(59824,"MaterialIcons",null,!0)
D.azi=new B.az(59825,"MaterialIcons",null,!1)
D.azj=new B.az(59827,"MaterialIcons",null,!0)
D.azk=new B.az(59829,"MaterialIcons",null,!1)
D.azl=new B.az(59831,"MaterialIcons",null,!1)
D.azm=new B.az(59834,"MaterialIcons",null,!1)
D.azn=new B.az(59835,"MaterialIcons",null,!1)
D.azo=new B.az(59836,"MaterialIcons",null,!1)
D.azp=new B.az(59837,"MaterialIcons",null,!1)
D.azq=new B.az(60007,"MaterialIcons",null,!1)
D.azr=new B.az(60424,"MaterialIcons",null,!0)
D.azs=new B.az(60802,"MaterialIcons",null,!0)
D.azL=new B.az(63047,"MaterialIcons",null,!1)
D.aA6=new B.cV(D.azL,null,C.de,null,null)
D.azK=new B.az(63030,"MaterialIcons",null,!1)
D.aAw=new B.cV(D.azK,null,C.fD,null,null)
D.bTK=new A.bsy(0,"newline")
D.bHB=new B.a6(!0,null,null,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aBe=new B.pK(null,null,null,null,null,null,null,null,null,null," Type URL",null,D.bHB,null,null,null,!0,!0,null,null,null,null,null,null,null,C.Nb,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,C.dF,null,null,null,null,C.dF,!0,null,!0,null)
D.bTN=new A.bt4(1,"unrestricted")
D.RT=B.a(w(["#000000","#FFFFFF","#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"]),x.s)
D.awh=new A.tk(0,"insertRowAbove")
D.awi=new A.tk(1,"insertRowBelow")
D.awj=new A.tk(2,"insertColumnLeft")
D.awk=new A.tk(3,"insertColumnRight")
D.awl=new A.tk(4,"deleteRow")
D.awm=new A.tk(5,"deleteColumn")
D.awn=new A.tk(6,"deleteTable")
D.EO=B.a(w([D.awh,D.awi,D.awj,D.awk,D.awl,D.awm,D.awn]),x.x)
D.bK4=new B.cx("Edit Table",null,Q.Iw,null,null,null,null,null,null,null,null,null,null,null,null)
D.bwQ=new B.a0(O.j3,D.bK4,null)
D.awT=new B.oB(1,C.h0,D.bwQ,null)
D.aL9=B.a(w([D.awT,V.anb]),x.p)
D.bAe=new B.kS(C.a6,C.f,C.i,C.j,null,C.m,null,C.k,0,D.aL9,null)
D.Hw=new B.hx(C.df,0,B.E("hx<dOP>"))
D.bDg=new B.ao(0,null,null,null)
D.bDj=new B.ao(15,null,null,null)
D.bDD=new I.u6(4,0,0,1)
D.adA=new A.a9s(0,"html")
D.adB=new A.a9s(1,"url")
D.adC=new A.a9s(2,"urlBypass")
D.bI0=new B.a6(!0,null,null,'"PT Sans", Calibri, Tahoma, sans-serif',null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJ8=new B.a6(!0,C.cK,null,null,null,null,18,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLs=new A.k3("Add a table",25,"addTable")
D.aeE=new A.k3("Alignment",14,"align")
D.aeF=new A.k3("Header H1",10,"headerOne")
D.bLt=new A.k3("Bold",0,"bold")
D.bLu=new A.k3("Clear History",24,"clearHistory")
D.aeG=new A.k3("Hyperlink",18,"link")
D.bLv=new A.k3("Edit table",26,"editTable")
D.bLw=new A.k3("Italic",1,"italic")
D.bLx=new A.k3("Redo",23,"redo")
D.bLy=new A.k3("Strikethrough",3,"strike")
D.bLz=new A.k3("Underline",2,"underline")
D.bLA=new A.k3("Undo",22,"undo")
D.bLB=new A.k3("Insert image",19,"image")
D.bLC=new A.k3("Font Size",17,"size")
D.aeH=new A.k3("Header H2",11,"headerTwo")
D.bLD=new A.k3("Background color",13,"background")
D.aeI=new A.k3("Clears all formats",21,"clean")
D.bLE=new A.k3("separator",27,"separator")
D.bLF=new A.k3("Insert Youtube/Url",20,"video")
D.bLG=new A.k3("Font color",12,"color")
D.bOc=new A.aIl(0,"video")
D.bOd=new A.aIl(1,"hyperlink")})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"dUs","dc2",()=>A.d6c(self))
w($,"dTq","cTD",()=>B.d6S("_$dart_dartObject"))
w($,"dUw","cTL",()=>function DartObject(d){this.o=d})
v($,"dVY","dd2",()=>B.cPf(null))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_280",e:"endPart",h:b})})($__dart_deferred_initializers__,"4B0lHy926XvdrfSxTOYqSFirSBI=");