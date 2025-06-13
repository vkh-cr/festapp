((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_277",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,K,O,L,P,M,Q,H,I,R,S,T,U,A={
dzn(d,e,f,g){var w,v
if(e){w=[f]
C.b.H(w,g)
g=w}v=x.z
return A.cPh(B.dkm(d,B.aV(J.bf(g,A.dHB(),v),!0,v),null))},
dm1(d,e,f){var w=null
if(d<0||d>f)throw B.o(B.fG(d,0,f,w,w))
if(e<d||e>f)throw B.o(B.fG(e,d,f,w,w))},
cPm(d,e,f){var w
try{if(Object.isExtensible(d)&&!Object.prototype.hasOwnProperty.call(d,e)){Object.defineProperty(d,e,{value:f})
return!0}}catch(w){}return!1},
d3d(d,e){if(Object.prototype.hasOwnProperty.call(d,e))return d[e]
return null},
cPh(d){if(d==null||typeof d=="string"||typeof d=="number"||B.kv(d))return d
if(d instanceof A.pF)return d.a
if(A.d51(d))return d
if(x.Q.b(d))return d
if(x.k.b(d))return B.n_(d)
if(x.Z.b(d))return A.d3c(d,"$dart_jsFunction",new A.cFh())
return A.d3c(d,"_$dart_jsObject",new A.cFi($.cRK()))},
d3c(d,e,f){var w=A.d3d(d,e)
if(w==null){w=f.$1(d)
A.cPm(d,e,w)}return w},
cPg(d){if(d==null||typeof d=="string"||typeof d=="number"||typeof d=="boolean")return d
else if(d instanceof Object&&A.d51(d))return d
else if(d instanceof Object&&x.Q.b(d))return d
else if(d instanceof Date)return new B.aI(B.jQ(d.getTime(),0,!1),0,!1)
else if(d.constructor===$.cRK())return d.o
else return A.d49(d)},
d49(d){if(typeof d=="function")return A.cPy(d,$.Os(),new A.cGQ())
if(d instanceof Array)return A.cPy(d,$.cRC(),new A.cGR())
return A.cPy(d,$.cRC(),new A.cGS())},
cPy(d,e,f){var w=A.d3d(d,e)
if(w==null||!(d instanceof Object)){w=f.$1(d)
A.cPm(d,e,w)}return w},
cFh:function cFh(){},
cFi:function cFi(d){this.a=d},
cGQ:function cGQ(){},
cGR:function cGR(){},
cGS:function cGS(){},
pF:function pF(d){this.a=d},
S_:function S_(d){this.a=d},
JQ:function JQ(d,e){this.a=d
this.$ti=e},
WS:function WS(){},
cTi(d,e,f){var w=null
return new A.HQ(B.cKC(d,w,w,w,w,36,w,w,C.Kn,w,88,f,w,w,C.Bo),e,w)},
HQ:function HQ(d,e,f){this.w=d
this.b=e
this.a=f},
Sp:function Sp(d,e,f,g,h){var _=this
_.c=d
_.y=e
_.dx=f
_.fx=g
_.a=h},
cW_(d){var w=B.bD("(background-color|color)\\s*:\\s*[^;]+;?\\s*",!1,!1,!1)
return B.dt(d,w,"")},
cVZ(d){var w,v,u,t,s,r,q,p,o,n=B.bD("\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b",!0,!1,!1),m=B.bD("\\b((http|https)://|www\\.)[^\\s/$.?#].\\S*",!1,!1,!1),l=B.bD("\\b(\\+?[0-9]{1,4}[-.\\s]+)?(\\(?\\d{2,3}\\)?[-.\\s]+)?\\d{3}[-.\\s]+\\d{3}[-.\\s]+\\d{3,4}\\b",!0,!1,!1),k=W.Yr(d),j=new A.boU(),i=k.gqp(0)
i.toString
i=F.Yt(i,"*")
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
q=r.c=new F.hm(r,p)}p=B.B(new B.df(q,v),u)
C.b.aT(p,new A.boV(n,j))}i=k.gqp(0)
i.toString
i=F.Yt(i,"*")
w=i.length
s=0
for(;s<i.length;i.length===w||(0,B.M)(i),++s){r=i[s]
if(r.x==="a")continue
q=r.c
if(q===$){p=B.a([],t)
r.c!==$&&B.ac()
q=r.c=new F.hm(r,p)}p=B.B(new B.df(q,v),u)
C.b.aT(p,new A.boW(m,j))}i=k.gqp(0)
i.toString
i=F.Yt(i,"*")
w=i.length
s=0
for(;s<i.length;i.length===w||(0,B.M)(i),++s){r=i[s]
if(r.x==="a")continue
q=r.c
if(q===$){p=B.a([],t)
r.c!==$&&B.ac()
q=r.c=new F.hm(r,p)}p=B.B(new B.df(q,v),u)
C.b.aT(p,new A.boX(l,j))}o=new B.dd("")
k.gqp(0).UE(o)
i=o.a
return i.charCodeAt(0)==0?i:i},
boU:function boU(){},
boV:function boV(d,e){this.a=d
this.b=e},
boT:function boT(d,e){this.a=d
this.b=e},
boW:function boW(d,e){this.a=d
this.b=e},
boS:function boS(d,e){this.a=d
this.b=e},
boX:function boX(d,e){this.a=d
this.b=e},
boR:function boR(d,e){this.a=d
this.b=e},
cVY(d,e){return new A.a2I(e,d,null)},
a2I:function a2I(d,e,f){this.c=d
this.d=e
this.a=f},
aPz:function aPz(d,e){var _=this
_.d=$
_.e=!0
_.f=d
_.r=e
_.c=_.a=null},
ceT:function ceT(d){this.a=d},
ceU:function ceU(){},
ceV:function ceV(d){this.a=d},
ceS:function ceS(d){this.a=d},
ceR:function ceR(d){this.a=d},
ceN:function ceN(d){this.a=d},
ceL:function ceL(){},
ceM:function ceM(){},
ceQ:function ceQ(){},
ceP:function ceP(){},
ceO:function ceO(){},
a6l:function a6l(d,e,f){this.c=d
this.e=e
this.a=f},
cZx(d){var w=new A.FA(null,null),v=J.a0(d)
w.a=v.h(d,"index")
w.b=v.h(d,"length")
return w},
d3e(d){return B.fg(B.JM(d,new A.cFQ(),x.S),0,null)},
a6P:function a6P(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
a6Q:function a6Q(){var _=this
_.d=$
_.e=""
_.f=!0
_.r=$
_.w=!1
_.x=""
_.Q=_.z=_.y=$
_.as=!1
_.c=_.a=null},
bE8:function bE8(d){this.a=d},
bE7:function bE7(d){this.a=d},
bE5:function bE5(d){this.a=d},
bE4:function bE4(d){this.a=d},
bE6:function bE6(d){this.a=d},
bDV:function bDV(d){this.a=d},
bDU:function bDU(){},
bDY:function bDY(d){this.a=d},
bDX:function bDX(d){this.a=d},
bDZ:function bDZ(d){this.a=d},
bE_:function bE_(d){this.a=d},
bE0:function bE0(d,e){this.a=d
this.b=e},
bE1:function bE1(d){this.a=d},
bE2:function bE2(d){this.a=d},
bE3:function bE3(d){this.a=d},
bDW:function bDW(){},
aBT:function aBT(){var _=this
_.d=_.c=_.b=_.a=null
_.e=!0},
bDT:function bDT(d){this.a=d},
bDS:function bDS(d){this.a=d},
FA:function FA(d,e){this.a=d
this.b=e},
cFQ:function cFQ(){},
dtv(d,e,f,g,h,i,j){return new A.MB(j,g,h,i,f,e,d,null)},
aao:function aao(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aap:function aap(d,e,f){var _=this
_.d=d
_.e=e
_.w=_.r=_.f=$
_.x=f
_.c=_.a=null},
bSY:function bSY(){},
bSI:function bSI(d){this.a=d},
bSJ:function bSJ(d){this.a=d},
bSK:function bSK(d){this.a=d},
bSL:function bSL(d,e){this.a=d
this.b=e},
bSG:function bSG(d){this.a=d},
bSH:function bSH(){},
bSF:function bSF(d){this.a=d},
bSE:function bSE(d){this.a=d},
bSD:function bSD(){},
bSC:function bSC(d){this.a=d},
bSB:function bSB(){},
bSR:function bSR(d){this.a=d},
bSQ:function bSQ(d,e){this.a=d
this.b=e},
bSP:function bSP(){},
bSO:function bSO(d){this.a=d},
bSN:function bSN(d,e){this.a=d
this.b=e},
bSM:function bSM(){},
bST:function bST(d,e){this.a=d
this.b=e},
bSS:function bSS(d){this.a=d},
bSX:function bSX(d){this.a=d},
bSW:function bSW(d){this.a=d},
bSU:function bSU(d){this.a=d},
bSV:function bSV(d,e){this.a=d
this.b=e},
MB:function MB(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
k0:function k0(d,e,f){this.c=d
this.a=e
this.b=f},
dkV(d){var w=B.bD("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",!0,!1,!1)
if(!w.b.test(d.toLowerCase()))return C.C.R()
d=B.dt(d.toUpperCase(),"#","")
return B.dp(d.length===6?"FF"+d:d,16)},
bo4(d){var w=A.dkV(d)
return new A.auD((C.c.W(w,24)&255)/255,(C.c.W(w,16)&255)/255,(C.c.W(w,8)&255)/255,(w&255)/255,C.h)},
aak(d){var w,v=""
try{v="rgba("+C.b.bw(B.a([d.gS4(),d.gLd(),d.gOZ(),B.p8(C.e.bk(d.geZ(d),1))],x.a),",")+")"}catch(w){v="rgba(0,0,0,0)"}return v},
auD:function auD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a_q:function a_q(d,e){this.c=d
this.a=e},
b7o:function b7o(d){this.a=d},
b7n:function b7n(d,e){this.a=d
this.b=e},
a1f:function a1f(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aOd:function aOd(){this.d=$
this.c=this.a=null},
c8M:function c8M(d,e){this.a=d
this.b=e},
c8K:function c8K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c8L:function c8L(d,e){this.a=d
this.b=e},
c8I:function c8I(d,e){this.a=d
this.b=e},
c8G:function c8G(d,e){this.a=d
this.b=e},
c8H:function c8H(d,e){this.a=d
this.b=e},
c8J:function c8J(d,e){this.a=d
this.b=e},
ta:function ta(d,e){this.a=d
this.b=e},
asq(d,e,f,g,h,i){return new A.a1j(d,e,f,g,i,h)},
a1j:function a1j(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.Q=h
_.a=i},
a1k:function a1k(d,e,f){var _=this
_.e=d
_.r=_.f=null
_.w=$
_.x=e
_.y=f
_.c=_.a=null},
bha:function bha(d){this.a=d},
bh4:function bh4(d,e){this.a=d
this.b=e},
bh6:function bh6(d){this.a=d},
bh5:function bh5(d,e){this.a=d
this.b=e},
bh9:function bh9(d,e){this.a=d
this.b=e},
bh7:function bh7(d){this.a=d},
bh8:function bh8(){},
aOl:function aOl(){},
amI:function amI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cTh(d,e,f,g,h,i){return new A.ZP(e,g,h,d,f)},
ZP:function ZP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.a=h},
aLX:function aLX(){this.c=this.a=null},
hI:function hI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
pp:function pp(d,e){this.a=d
this.b=e},
azs:function azs(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aoW:function aoW(d,e){this.b=d
this.a=e},
aGS:function aGS(d,e){this.b=d
this.a=e},
aBi:function aBi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
o0:function o0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
brx:function brx(d,e){this.a=d
this.b=e},
bqA:function bqA(d){this.a=d},
RP:function RP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aQ8:function aQ8(d){var _=this
_.d=d
_.e=""
_.f=$
_.c=_.a=null},
cgr:function cgr(d,e){this.a=d
this.b=e},
cgn:function cgn(d){this.a=d},
cgm:function cgm(d,e){this.a=d
this.b=e},
cgo:function cgo(){},
cgp:function cgp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cgk:function cgk(d,e,f){this.a=d
this.b=e
this.c=f},
cgl:function cgl(){},
cgq:function cgq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aHS:function aHS(d,e){this.a=d
this.b=e},
V2:function V2(d,e,f){this.c=d
this.d=e
this.a=f},
aie:function aie(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=f
_.c=_.a=null},
cxU:function cxU(d,e){this.a=d
this.b=e},
cxT:function cxT(){},
cxV:function cxV(d){this.a=d},
cxS:function cxS(d){this.a=d},
W6:function W6(d,e,f){this.e=d
this.c=e
this.a=f},
W5:function W5(d,e,f,g){var _=this
_.G=d
_.E$=e
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
abL:function abL(d,e,f){var _=this
_.a=$
_.b=d
_.c=e
_.Y$=0
_.a7$=f
_.am$=_.bf$=0},
b95:function b95(){},
uY:function uY(d,e){this.a=d
this.b=e},
cLX(d,e,f,g){var w,v,u,t=C.d.bm(d).toLowerCase()
if(!(C.d.b8(t,B.bD("<!DOCTYPE html>",!1,!1,!1))&&C.d.p(t,B.bD("<html",!1,!1,!1))&&C.d.p(t,B.bD("</html>",!1,!1,!1))))t='    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>IFrame '+g+"</title>\n    </head>\n    <body>\n    "+d+"\n    </body>\n    </html>\n    "
else t=d
w=x.N
t=A.cW1(t,B.dy(["parent.connect_js_to_flutter"+g+" && parent.connect_js_to_flutter"+g+"(window)"],w),D.awv)
if(f.gda(f)){v=B.aU(w)
for(w=f.gaa(f);w.q();){u=w.gL(0)
u.gbNw()
v.t(0,u.gbNw())}t=A.cW1(t,v,D.awt)}return t},
cW1(d,e,f){return A.cW0(f,d,"\n<script>\n"+e.hs(0,new A.bp7())+"\n</script>\n")},
cW2(d,e,f){var w=B.bD("<"+d+"([^>]*)>",!1,!1,!1)
B.TA(0,0,e.length,"startIndex")
return B.dJi(e,w,new A.bp8(d,f),0)},
cW0(d,e,f){var w
switch(d.a){case 2:return A.cW2("head",e,f)
case 0:return A.cW2("body",e,f)
case 3:w=C.d.dj(e,"</head>")
return C.d.ag(e,0,w)+f+"\n"+C.d.d4(e,w)
case 1:w=C.d.dj(e,"</body>")
return C.d.ag(e,0,w)+f+"\n"+C.d.d4(e,w)}},
a1q:function a1q(d,e){this.a=d
this.b=e},
bp7:function bp7(){},
bp8:function bp8(d,e){this.a=d
this.b=e},
a9e:function a9e(d,e){this.a=d
this.b=e},
auI:function auI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
bYf:function bYf(){},
CX:function CX(){},
anD:function anD(){},
aoA:function aoA(){},
aIz:function aIz(){},
qa:function qa(d,e){this.c=d
this.a=e},
Nh:function Nh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bs3:function bs3(d,e){this.a=d
this.b=e},
b3N:function b3N(d,e){this.a=d
this.b=e},
abK:function abK(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aji:function aji(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cEj:function cEj(d){this.a=d},
cEg:function cEg(d){this.a=d},
cEb:function cEb(d,e){this.a=d
this.b=e},
cEa:function cEa(d){this.a=d},
cEf:function cEf(d){this.a=d},
cEc:function cEc(){},
cEd:function cEd(d){this.a=d},
cEe:function cEe(){},
cEh:function cEh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cEi:function cEi(d,e){this.a=d
this.b=e},
d51(d){return x.B.b(d)||x.D.b(d)||x.l.b(d)||x.t.b(d)||x.V.b(d)||x.cg.b(d)||x.bj.b(d)},
cUP(d,e,f,g,h,i,j,k,l,m,n){var w=null
return new B.Dn(i,m,w,w,j,w,k,8,l,g,w,w,24,!0,!1,48,f,w,!1,e,w,w,w,d,w,w,!1,w,n.i("Dn<0>"))},
ZT(d,e){var w=null,v=B.bx(8)
return new B.a1(C.au,new A.Sp(d,C.aw,B.L(e,w,w,w,w,w,w,w,B.af(w,w,C.fj,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w,w,w),new B.d9(v,C.y),w),w)},
d_9(d){var w=C.a2B.h(0,(d==null?C.a9:d).a)
w.toString
return B.dt(w,"w","")},
drG(d){var w=B.dv(d,0,null)
if(C.d.p(w.goW(w).toLowerCase(),"youtube"))return A.drF(d)
else if(C.d.p(w.goW(w).toLowerCase(),"vimeo"))return A.drE(d)
else return d},
drF(d){var w,v,u,t
if(!C.d.p(d,"http")&&d.length===11)return d
C.d.bm(d)
for(w=[B.bD("^https:\\/\\/(?:www\\.|m\\.)?youtube\\.com\\/watch\\?v=([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bD("^https:\\/\\/(?:music\\.)?youtube\\.com\\/watch\\?v=([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bD("^https:\\/\\/(?:www\\.|m\\.)?youtube\\.com\\/shorts\\/([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bD("^https:\\/\\/(?:www\\.|m\\.)?youtube(?:-nocookie)?\\.com\\/embed\\/([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bD("^https:\\/\\/youtu\\.be\\/([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1)],v=null,u=0;u<5;++u){t=w[u].rY(d)
if(t!=null&&t.b.length-1>=1)v=t.b[1]}if(v==null)return null
return"https://www.youtube.com/embed/"+v},
drE(d){var w=B.bD("(?:http|https)?:?\\/?\\/?(?:www\\.)?(?:player\\.)?vimeo\\.com\\/(?:channels\\/(?:\\w+\\/)?|groups\\/(?:[^\\/]*)\\/videos\\/|video\\/|)(\\d+)(?:|\\/\\?)",!1,!1,!1).rY(d),v=w==null?null:w.b[1]
if(v==null)return null
return"https://player.vimeo.com/video/"+v}},D,V,F,E,N,G,W,X,Y
J=c[1]
B=c[0]
C=c[2]
K=c[184]
O=c[205]
L=c[155]
P=c[233]
M=c[219]
Q=c[267]
H=c[300]
I=c[114]
R=c[308]
S=c[135]
T=c[185]
U=c[301]
A=a.updateHolder(c[43],A)
D=c[305]
V=c[309]
F=c[156]
E=c[306]
N=c[161]
G=c[138]
W=c[124]
X=c[307]
Y=c[268]
A.pF.prototype={
h(d,e){if(typeof e!="string"&&typeof e!="number")throw B.o(B.ci("property is not a String or num",null))
return A.cPg(this.a[e])},
m(d,e,f){if(typeof e!="string"&&typeof e!="number")throw B.o(B.ci("property is not a String or num",null))
this.a[e]=A.cPh(f)},
k(d,e){if(e==null)return!1
return e instanceof A.pF&&this.a===e.a},
j(d){var w,v
try{w=String(this.a)
return w}catch(v){w=this.r3(0)
return w}},
xj(d,e){var w=this.a,v=e==null?null:B.aV(new B.J(e,A.dHC(),B.U(e).i("J<1,@>")),!0,x.z)
return A.cPg(w[d].apply(w,v))},
bD5(d){return this.xj(d,null)},
gu(d){return 0}}
A.S_.prototype={}
A.JQ.prototype={
aoj(d){var w=d<0||d>=this.gA(0)
if(w)throw B.o(B.fG(d,0,this.gA(0),null,null))},
h(d,e){if(B.hb(e))this.aoj(e)
return this.aU3(0,e)},
m(d,e,f){if(B.hb(e))this.aoj(e)
this.amp(0,e,f)},
gA(d){var w=this.a.length
if(typeof w==="number"&&w>>>0===w)return w
throw B.o(B.ag("Bad JsArray length"))},
sA(d,e){this.amp(0,"length",e)},
t(d,e){this.xj("push",[e])},
H(d,e){this.xj("push",e instanceof Array?e:B.aV(e,!0,x.z))},
kD(d){if(this.gA(0)===0)throw B.o(B.j5(-1))
return this.bD5("pop")},
ei(d,e,f,g,h){var w,v
A.dm1(e,f,this.gA(0))
w=f-e
if(w===0)return
if(h<0)throw B.o(B.ci(h,null))
v=[e,w]
C.b.H(v,J.Hy(g,h).n2(0,w))
this.xj("splice",v)},
i8(d,e,f,g){return this.ei(0,e,f,g,0)},
dQ(d,e){this.xj("sort",e==null?[]:[e])},
$ib2:1,
$iw:1,
$iC:1}
A.WS.prototype={
m(d,e,f){return this.aU4(0,e,f)}}
A.HQ.prototype={
uN(d,e,f){return new A.HQ(this.w,f,null)},
ee(d){return!this.w.k(0,d.w)}}
A.Sp.prototype={
gkh(d){return this.c!=null},
B(d){var w,v,u,t,s=this,r=null,q=B.D(d),p=B.cKD(d),o=p.aj4(s),n=q.ok.as
n.toString
n=n.ce(p.a4_(s))
w=p.y
if(w==null)w=p.a4_(s).P(0.12)
v=p.z
if(v==null)v=p.a4_(s).P(0.04)
u=p.aOj(s)
t=new B.aa(p.a,1/0,p.b,1/0).aDM(r,r)
return S.cYW(C.M,!1,s.dx,C.k,t,0,2,!0,o,w,4,r,q.cx,8,v,4,q.f,r,r,r,s.c,u,s.fx,q.id,n,q.Q)}}
A.a2I.prototype={
M(){return new A.aPz(B.a([D.bL6,D.bL9,D.bLc,D.bLb,D.aew,D.aeA,D.aey],x.f),C.fj)}}
A.aPz.prototype={
S(){var w,v=this
v.ah()
w=v.a
v.d=w.c
w.d.Rt(new A.ceT(v))
v.a.d.bQ1(new A.ceU())
B.de(C.j_,new A.ceV(v))},
l(){this.a.d.l()
this.ai()},
B(d){var w=this,v=null,u=w.a.d,t=x.p,s=B.a([],t),r=u.b,q=w.a.d
return B.ar(B.a([new B.ao(50,v,new A.aao(w.f,u,s,25,C.aw,w.r,T.BL,C.au,C.I,C.j,r),v),new B.f9(1,C.fX,new A.a6P(200,v,!0,q,new A.ceM(),C.ax,new A.ceN(w),new A.ceO(),new A.ceP(),new A.ceQ(),D.bHE,D.avt,D.bIM,C.F,C.avM,!1,new A.ceR(w),q.a),v)],t),C.J,C.f,C.i,0,v)},
tz(d){return this.aQB(d)},
aQB(d){var w=0,v=B.l(x.H),u=this
var $async$tz=B.f(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:w=2
return B.d(u.a.d.Lt(d),$async$tz)
case 2:return B.j(null,v)}})
return B.k($async$tz,v)}}
A.a6l.prototype={
B(d){return $.d86().aCp(this.c,!1,this.a)}}
A.a6P.prototype={
M(){return new A.a6Q()}}
A.a6Q.prototype={
S(){var w,v=this
v.y=$.OB().aI0("packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js")
w=v.a.ax.d
if(w==null)w="Roboto"
v.z=w
v.Q=B.rH(4,w,C.aA,!1)
w=v.a
w.toString
v.f=!0
v.r=w.d
v.ah()},
l(){var w,v=this.d
v===$&&B.b()
w=v.b
w.a7$=$.a8()
w.Y$=0
v.fD()
this.ai()},
B(d){var w=this.y
w===$&&B.b()
return F.cLN(new A.bE8(this),w,x.z)},
b1z(d,e){var w,v,u,t,s,r,q=this
q.e=q.arC(e)
w=C.c.j(B.dT(q.a.r.b))
v=q.e
u=q.r
u===$&&B.b()
t=B.dy([new A.uY("EditorResizeCallback",new A.bDY(q)),new A.uY("UpdateFormat",new A.bDZ(q)),new A.uY("OnTextChanged",new A.bE_(q)),new A.uY("FocusChanged",new A.bE0(q,d)),new A.uY("OnEditingCompleted",new A.bE1(q)),new A.uY("OnSelectionChanged",new A.bE2(q)),new A.uY("EditorLoaded",new A.bE3(q))],x.C)
s=q.as
r=q.a.db.$1(d)
return new B.ch(C.ad,null,C.ac,C.v,B.a([new A.abK(v,D.adr,e,u,new A.bE4(q),t,!1,new A.bE5(q),new A.bE6(q),D.amn,new B.cp(w,x.X)),B.ju(r,!s)],x.p),null)},
VR(){var w=0,v=B.l(x.N),u,t=this,s
var $async$VR=B.f(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qr("getHtmlText",[]),$async$VR)
case 3:u=e
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$VR,v)},
W_(){var w=0,v=B.l(x.z),u,t=this,s
var $async$W_=B.f(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qr("getSelectionRange",[]),$async$W_)
case 3:u=e
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$W_,v)},
XO(d,e){return this.bun(d,e)},
bun(d,e){var w=0,v=B.l(x.z),u,t=this,s
var $async$XO=B.f(function(f,g){if(f===1)return B.i(g,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qr("setSelection",[d,e]),$async$XO)
case 3:u=g
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$XO,v)},
XM(d){return this.buf(d)},
buf(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$XM=B.f(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qr("setHtmlText",[d]),$async$XM)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$XM,v)},
Vt(d){return this.b7y(d)},
b7y(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$Vt=B.f(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qr("embedVideo",[d]),$async$Vt)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Vt,v)},
Vs(d){return this.b7x(d)},
b7x(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$Vs=B.f(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qr("embedImage",[d]),$async$Vs)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Vs,v)},
Vu(d){return this.b7F(!0)},
b7F(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$Vu=B.f(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qr("enableEditor",[!0]),$async$Vu)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Vu,v)},
XL(d,e){return this.bue(d,e)},
bue(d,e){var w=0,v=B.l(x.z),u,t=2,s=[],r=this,q,p,o,n
var $async$XL=B.f(function(f,g){if(f===1){s.push(g)
w=t}while(true)switch(w){case 0:t=4
p=r.d
p===$&&B.b()
w=7
return B.d(p.qr("setFormat",[d,e]),$async$XL)
case 7:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=B.ai(n)
J.as(q)
w=6
break
case 3:w=2
break
case 6:case 1:return B.j(u,v)
case 2:return B.i(s.at(-1),v)}})
return B.k($async$XL,v)},
Wv(d,e){return this.biU(d,e)},
biU(d,e){var w=0,v=B.l(x.z),u,t=this,s
var $async$Wv=B.f(function(f,g){if(f===1)return B.i(g,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qr("insertTable",[e,d]),$async$Wv)
case 3:u=g
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Wv,v)},
WR(d){return this.bl0(d)},
bl0(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$WR=B.f(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qr("modifyTable",[d.b]),$async$WR)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$WR,v)},
Xj(){var w=0,v=B.l(x.z),u,t=this,s
var $async$Xj=B.f(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qr("undo",[]),$async$Xj)
case 3:u=e
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Xj,v)},
Xi(){var w=0,v=B.l(x.z),u,t=this,s
var $async$Xi=B.f(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qr("redo",[]),$async$Xi)
case 3:u=e
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Xi,v)},
UZ(){var w=0,v=B.l(x.z),u,t=this,s
var $async$UZ=B.f(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qr("clearHistory",[]),$async$UZ)
case 3:u=e
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$UZ,v)},
arC(c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2="0",b3="px !important;\n          padding-right:",b4="px !important;\n          padding-top:",b5="px !important;\n          padding-bottom:",b6=";\n          font-size: ",b7="px;\n          color:",b8=";\n          background-color:",b9=";\n          font-weight: ",c0=b1.Q
c0===$&&B.b()
w=b1.x
v=b1.z
v===$&&B.b()
u=A.aak(b1.a.y)
t=A.aak(b1.a.y)
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
l=A.aak(l==null?C.n:l)
k=A.aak(b1.a.y)
j=b1.a.ch
i=j.x
if(i==null)i=E.Dt
j=A.d_9(j.w)
h=b1.z
g=b1.a.ax
f=g.x
if(f==null)f=E.Dt
g=g.r
g=B.n(g==null?"14":g)
e=b1.a.ax.b
e=A.aak(e==null?C.n:e)
d=A.aak(b1.a.y)
a0=b1.a.ax
a0=A.d_9(a0.w)
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
A.aBT.prototype={
amB(){var w,v=this,u=null
v.a=new B.aW(A.d3e(15),x.h)
v.b=new B.aW(A.d3e(15),x.U)
w=x.N
v.c=B.ho(u,u,u,u,!1,w)
v.d=B.ho(u,u,u,u,!1,w)},
L8(){var w=0,v=B.l(x.N),u,t=2,s=[],r=this,q,p,o,n
var $async$L8=B.f(function(d,e){if(d===1){s.push(e)
w=t}while(true)switch(w){case 0:t=4
p=r.a.ga0()
p=p==null?null:p.VR()
w=7
return B.d(x.F.b(p)?p:B.cc(p,x.T),$async$L8)
case 7:q=e
if(J.p(q,"<p><br></p>")){p=q
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
case 6:case 1:return B.j(u,v)
case 2:return B.i(s.at(-1),v)}})
return B.k($async$L8,v)},
Lt(d){return this.aRu(d)},
aRu(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$Lt=B.f(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.a.ga0()
s=s==null?null:s.XM(d)
w=3
return B.d(x._.b(s)?s:B.cc(s,x.z),$async$Lt)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Lt,v)},
QF(d,e){return this.bMs(d,e)},
bMs(d,e){var w=0,v=B.l(x.z),u,t=this,s
var $async$QF=B.f(function(f,g){if(f===1)return B.i(g,v)
while(true)switch(w){case 0:s=t.a.ga0()
s=s==null?null:s.Wv(e,d)
w=3
return B.d(x._.b(s)?s:B.cc(s,x.z),$async$QF)
case 3:u=g
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$QF,v)},
a12(d){return this.bP7(d)},
bP7(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$a12=B.f(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.a.ga0()
s=s==null?null:s.WR(d)
w=3
return B.d(x._.b(s)?s:B.cc(s,x.z),$async$a12)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a12,v)},
a_v(d){return this.bIe(d)},
bIe(d){var w=0,v=B.l(x.z),u,t=this,s,r
var $async$a_v=B.f(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:r=A.drG(d)
if(r==null){w=1
break}s=t.a.ga0()
s=s==null?null:s.Vt(r)
w=3
return B.d(x._.b(s)?s:B.cc(s,x.z),$async$a_v)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a_v,v)},
a_u(d){return this.bId(d)},
bId(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$a_u=B.f(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.a.ga0()
s=s==null?null:s.Vs(d)
w=3
return B.d(x._.b(s)?s:B.cc(s,x.z),$async$a_u)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a_u,v)},
a_w(d){return this.bIh(!0)},
bIh(d){var w=0,v=B.l(x.H),u=this,t
var $async$a_w=B.f(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:u.e=!0
t=u.a.ga0()
t=t==null?null:t.Vu(!0)
w=2
return B.d(x._.b(t)?t:B.cc(t,x.z),$async$a_w)
case 2:return B.j(null,v)}})
return B.k($async$a_w,v)},
T8(){var w=0,v=B.l(x.n),u,t=this,s,r
var $async$T8=B.f(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:r=t.a.ga0()
r=r==null?null:r.W_()
w=3
return B.d(x._.b(r)?r:B.cc(r,x.z),$async$T8)
case 3:s=e
u=s!=null?A.cZx(C.aH.u9(0,s,null)):new A.FA(0,0)
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$T8,v)},
TV(d,e,f){return this.aRd(0,e,f)},
aRd(d,e,f){var w=0,v=B.l(x.z),u,t=this,s
var $async$TV=B.f(function(g,h){if(g===1)return B.i(h,v)
while(true)switch(w){case 0:s=t.a.ga0()
s=s==null?null:s.XO(e,f)
w=3
return B.d(x._.b(s)?s:B.cc(s,x.z),$async$TV)
case 3:u=h
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$TV,v)},
wo(d,e){return this.aQv(d,e)},
aQv(d,e){var w=0,v=B.l(x.H),u=this,t
var $async$wo=B.f(function(f,g){if(f===1)return B.i(g,v)
while(true)switch(w){case 0:t=u.a.ga0()
if(t!=null)t.XL(d,e)
return B.j(null,v)}})
return B.k($async$wo,v)},
Rt(d){var w,v,u
try{w=this.c
v=(w.b&1)===0
if(v)new B.cJ(w,B.t(w).i("cJ<1>")).em(new A.bDT(d))}catch(u){}return},
bQ1(d){var w,v,u
try{w=this.d
v=(w.b&1)===0
if(v)new B.cJ(w,B.t(w).i("cJ<1>")).em(new A.bDS(d))}catch(u){}return},
l(){this.c.aC(0)
this.d.aC(0)},
tr(){var w=0,v=B.l(x.H),u=this,t
var $async$tr=B.f(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:t=u.a.ga0()
t=t==null?null:t.Xj()
w=2
return B.d(x._.b(t)?t:B.cc(t,x.z),$async$tr)
case 2:return B.j(null,v)}})
return B.k($async$tr,v)},
ti(){var w=0,v=B.l(x.H),u=this,t
var $async$ti=B.f(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:t=u.a.ga0()
t=t==null?null:t.Xi()
w=2
return B.d(x._.b(t)?t:B.cc(t,x.z),$async$ti)
case 2:return B.j(null,v)}})
return B.k($async$ti,v)},
ZC(){var w=0,v=B.l(x.H),u=this,t
var $async$ZC=B.f(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:t=u.a.ga0()
t=t==null?null:t.UZ()
w=2
return B.d(x._.b(t)?t:B.cc(t,x.z),$async$ZC)
case 2:return B.j(null,v)}})
return B.k($async$ZC,v)}}
A.FA.prototype={
gA(d){return this.b}}
A.aao.prototype={
M(){return new A.aap(B.a([],x.c),B.H(x.N,x.z),C.eo)}}
A.aap.prototype={
S(){var w,v,u,t,s,r,q=this,p=x.q
q.f=new B.aW("fontBgColorKey"+C.c.j(B.dT(q.a.d)),p)
q.r=new B.aW("fontColorKey"+C.c.j(B.dT(q.a.d)),p)
q.w=new B.aW("_tablePickerKey"+C.c.j(B.dT(q.a.d)),p)
p=q.a
q.x=p.y
for(p=p.c,w=0;w<7;++w){v=p[w]
u=q.d
t=q.a
s=t.x
r=t.r
t=t.f
u.push(new A.MB(v,!1,null,q.x,t,r,s,null))}q.ah()},
B(d){var w=null,v=this.a,u=v.w
v=v.z
u=B.mP(B.ap(w,B.dA(B.djE(this.b9c(d),C.k,C.J,v,w,C.f,C.i,0,w,w,C.m),w,C.q,w,w,w,v),C.k,w,w,new B.b1(u,w,w,w,w,w,w,C.L),w,w,w,w,w,w,w,17976931348623157e292),!1,w)
return u},
bW7(d){var w,v,u,t,s,r,q=this,p="direction",o="color",n="align",m="background"
q.e=d
for(w=J.a0(d),v=0;u=q.d,v<u.length;++v){t=u[v]
switch(t.c.a){case 0:u[v]=t.iY(J.p(w.h(d,"bold"),!0))
break
case 1:u[v]=t.iY(J.p(w.h(d,"italic"),!0))
break
case 2:u[v]=t.iY(J.p(w.h(d,"underline"),!0))
break
case 3:u[v]=t.iY(J.p(w.h(d,"strike"),!0))
break
case 4:u[v]=t.iY(J.p(w.h(d,"blockquote"),!0))
break
case 5:u[v]=t.iY(J.p(w.h(d,"code-block"),!0))
break
case 6:u[v]=t.iY(w.h(d,"indent")!=null)
break
case 7:u[v]=t.iY(w.h(d,"indent")!=null)
break
case 8:u[v]=t.iY(J.p(w.h(d,p),"rtl"))
break
case 9:u[v]=t.iY(!J.p(w.h(d,p),"rtl"))
break
case 17:u[v]=t.iY(w.h(d,"size")!=null)
break
case 10:u[v]=t.iY(J.p(w.h(d,"header"),1))
break
case 11:u[v]=t.iY(J.p(w.h(d,"header"),2))
break
case 12:u[v]=t.iY(w.h(d,o)!=null)
try{if(w.h(d,o)!=null){u=B.my(J.aA(w.h(d,o)).a,null)
t=q.e
s=J.cW(t)
if(u==="List<dynamic>")s.m(t,o,J.v(w.h(d,o),0))
else s.m(t,o,w.h(d,o))}}catch(r){}break
case 14:if(w.h(d,n)==null)w.m(d,n,"")
u=q.d
u[v]=u[v].iY(w.h(d,n)!=null)
break
case 15:u[v]=t.iY(J.p(w.h(d,"list"),"ordered"))
break
case 16:u[v]=t.iY(J.p(w.h(d,"list"),"bullet"))
break
case 19:u[v]=t.iY(w.h(d,"image")!=null)
break
case 20:u[v]=t.iY(w.h(d,"video")!=null)
break
case 21:u[v]=t.iY(w.h(d,"clean")!=null)
break
case 13:u[v]=t.iY(w.h(d,m)!=null)
try{if(w.h(d,m)!=null){u=B.my(J.aA(w.h(d,m)).a,null)
t=q.e
s=J.cW(t)
if(u==="List<dynamic>")s.m(t,m,J.v(w.h(d,m),0))
else s.m(t,m,w.h(d,m))}}catch(r){}break
case 18:J.c_(q.e,"link",w.h(d,"link"))
break
case 22:case 23:case 26:case 25:case 24:case 27:break}}q.v(new A.bSY())},
b9c(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.a([],x.p)
for(w=0;v=p.d,w<v.length;++w){u={}
t=u.a=v[w]
v=t.c
if(v===D.bLf)n.push(B.hC(new B.a1(p.x,p.b8U(),o),o,o,o,v.c,o,o,o,o,o,o,E.fm))
else if(v===D.aew){u=p.x
s=p.a.f
n.push(B.hC(new B.a1(u,new B.ao(s,s,p.b0q(),o),o),o,o,o,v.c,o,o,o,o,o,o,E.fm))}else if(v===D.bLj){u=p.x
s=p.a.f
n.push(B.hC(new B.a1(u,new B.ao(s,s,p.b9T(w),o),o),o,o,o,v.c,o,o,o,o,o,o,E.fm))}else if(v===D.bLi){u=p.x
s=p.a
r=s.f-2
s=G.a2Z("packages/quill_html_editor/assets/camera_roll_icon.png",s.r,o,o,o)
J.v(p.e,"video")
n.push(B.hC(new B.a1(u,new A.RP(new A.bSI(p),D.bNQ,p.a.d,new B.ao(r,r,s,o),o),o),o,o,o,v.c,o,o,o,o,o,o,E.fm))}else if(v===D.aey){u=p.x
s=p.a
s=B.aS(D.ayw,s.r,o,s.f)
J.v(p.e,"link")
n.push(B.hC(new B.a1(u,new A.RP(new A.bSJ(p),D.bNR,p.a.d,s,o),o),o,o,o,v.c,o,o,o,o,o,o,E.fm))}else if(v===D.bLg){u=p.x
s=p.a.f
n.push(B.hC(new B.a1(u,new B.ao(s,s,p.b9S(w),o),o),o,o,o,v.c,o,o,o,o,o,o,E.fm))}else if(v===D.bL5){u=p.x
s=p.a.f
n.push(B.hC(new B.a1(u,new B.ao(s,s,p.bau(w,d),o),o),o,o,o,v.c,o,o,o,o,o,o,E.fm))}else if(v===D.bL8){u=p.x
s=p.a
r=s.r
q=s.f
n.push(B.hC(new A.a1f(s.w,r,q,u,new A.bSK(p),o),o,o,o,v.c,o,o,o,o,o,o,E.fm))}else if(v===D.bLh){u=p.a
s=u.z
v=v.c
r=p.x
q=u.f
u=u.r
if(s===C.a5)n.push(B.hC(new B.a1(r,B.ap(o,o,C.k,u,o,o,o,q,o,o,o,o,o,0.8),o),o,o,o,v,o,o,o,o,o,o,E.fm))
else n.push(B.hC(new B.a1(r,B.ap(o,o,C.k,u,o,o,o,0.8,o,o,o,o,o,q),o),o,o,o,v,o,o,o,o,o,o,E.fm))}else{s=p.a
r=s.x
q=s.r
s=s.f
n.push(B.hC(new A.MB(v,t.d,new A.bSL(u,p),p.x,s,q,r,o),o,o,o,v.c,o,o,o,o,o,o,E.fm))}}p.a.toString
return n},
b9U(d,e){switch(d.a){case 0:return B.x(["format","bold","value",e],x.N,x.z)
case 1:return B.x(["format","italic","value",e],x.N,x.z)
case 2:return B.x(["format","underline","value",e],x.N,x.z)
case 3:return B.x(["format","strike","value",e],x.N,x.z)
case 4:return B.x(["format","blockquote","value",e],x.N,x.z)
case 5:return B.x(["format","code-block","value",e],x.N,x.z)
case 7:return B.x(["format","indent","value","+1"],x.N,x.z)
case 6:return B.x(["format","indent","value","-1"],x.N,x.z)
case 8:return B.x(["format","direction","value","rtl"],x.N,x.z)
case 9:return B.x(["format","direction","value",""],x.N,x.z)
case 17:return B.x(["format","size","value","small"],x.N,x.z)
case 12:return B.x(["format","color","value","red"],x.N,x.z)
case 14:return B.x(["format","align","value","right"],x.N,x.z)
case 15:return B.x(["format","list","value",e?"ordered":""],x.N,x.z)
case 16:return B.x(["format","list","value",e?"bullet":""],x.N,x.z)
case 19:return B.x(["format","image","value",""],x.N,x.z)
case 20:return B.x(["format","video","value",""],x.N,x.z)
case 21:return B.x(["format","clean","value",""],x.N,x.z)
case 10:return B.x(["format","header","value",e?1:4],x.N,x.z)
case 11:return B.x(["format","header","value",e?2:4],x.N,x.z)
case 13:return B.x(["format","background","value","red"],x.N,x.z)
case 18:return B.x(["format","link","value",""],x.N,x.z)
case 22:case 23:case 24:case 26:case 25:case 27:return B.x(["format","undo","value",""],x.N,x.z)}},
b8U(){var w,v=this,u=null,t=v.a.w,s=J.v(v.e,"size")
if(s==null)s="normal"
w=B.af(u,u,v.a.r,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u)
return N.at1(C.N,new B.zv(A.cTi(!0,A.cUP(C.bx,t,u,u,!0,B.a([v.VH(8,"Small"),v.VH(12,"Normal"),v.VH(16,"Large"),v.VH(20,"Huge")],x.g),new A.bSE(v),new A.bSF(v),w,s,x.z),C.P),u),C.k,C.hn)},
VH(d,e){var w=null,v=J.p(J.v(this.e,"size"),e.toLowerCase()),u=this.a
return B.v5(new A.qa(B.L(e,w,w,w,w,w,w,w,B.af(w,w,v?u.x:u.r,w,w,w,w,w,w,w,w,d,w,w,C.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w,w,w),w),e.toLowerCase(),x.z)},
VG(d){var w=null,v=this.a
return new B.ao(w,w,B.L(d,w,w,w,w,w,w,w,B.af(w,w,d.toLowerCase()!=="normal"?v.x:v.r,w,w,w,w,w,w,w,w,14,w,w,C.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w,w,w),w)},
b0q(){var w=this,v="align",u=w.a.w,t=J.p(J.v(w.e,v),"")||J.v(w.e,v)==null?"left":J.v(w.e,v)
return new B.zv(A.cTi(!1,A.cUP(C.cB,u,C.C,D.bD_,!0,B.a([w.VM("left"),w.VM("center"),w.VM("right"),w.VM("justify")],x.G),new A.bSC(w),null,null,t,x.N),C.P),null)},
VM(d){var w,v,u
if(d==="center")w=D.ayl
else if(d==="right")w=D.ayo
else w=d==="justify"?D.aym:D.ayn
v=J.p(J.v(this.e,"align"),d)
u=this.a
v=v?u.x:u.r
return B.v5(new A.qa(B.aS(w,v,null,u.f),null),d,x.N)},
b9T(d){var w,v,u,t=this,s=null,r="color",q=t.r
q===$&&B.b()
w=t.a.f
v=J.v(t.e,r)
u=t.a
v=v!=null?u.x:u.r
u=B.bb(B.L("A",s,s,1,s,s,s,s,B.af(s,s,v,s,s,s,s,s,s,s,s,u.f-5,s,s,C.V,s,s,!0,s,s,s,s,s,s,s,s),s,s,s,s,s),1,s)
v=J.v(t.e,r)!=null?A.bo4(J.v(t.e,r)):C.n
return A.asq(B.fz(C.M,!0,s,new B.ao(w,w,B.ae(B.a([u,B.ap(s,s,C.k,v,s,s,s,3,s,s,s,s,s,t.a.f-3)],x.p),C.j,C.bm,C.R,0,s,C.m),s),C.k,C.C,0,s,s,s,s,s,C.bC),C.l,new A.a_q(new A.bSQ(t,d),s),10,q,new A.bSR(t))},
b9S(d){var w,v,u,t,s,r=this,q=null,p="background",o=r.f
o===$&&B.b()
w=B.fp(C.n,C.B,0.1)
v=J.v(r.e,p)!=null?A.bo4(J.v(r.e,p)):C.C
u=r.a.f
t=J.v(r.e,p)
s=r.a
t=t!=null?s.x:s.r
return A.asq(B.fz(C.M,!0,q,B.ap(C.N,N.at1(C.N,B.L("A",q,q,1,q,q,q,q,B.af(q,q,t,q,q,q,q,q,q,q,q,s.f-1,q,q,C.eT,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.k,C.ajd),C.k,q,q,new B.b1(v,q,w,q,q,q,q,C.L),q,u,q,q,q,q,q,u),C.k,C.C,0,q,q,q,q,q,C.bC),C.l,new A.a_q(new A.bSN(r,d),q),10,o,new A.bSO(r))},
bau(d,e){var w,v=this,u=null,t=v.a,s=t.w,r=v.w
r===$&&B.b()
w=t.f
return A.asq(new B.ao(w,w,G.a2Z(y.b,t.r,u,u,u),u),s,new B.ao(u,200,new A.V2(new A.bSS(v),6,u),u),0,r,new A.bST(v,e))},
bv9(d){var w=null
B.en(w,w,!0,w,new A.bSX(this),d,w,!0,!0,x.z)}}
A.MB.prototype={
B(d){var w=this,v=null,u=w.c
return B.hC(B.ib(!1,v,!0,new B.a1(w.f,new B.ao(v,v,w.ba_(u),v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.e,v,v,v,v,v,v,v),v,v,v,u.c,v,v,v,v,v,v,E.fm)},
ba_(d){var w=this
switch(d.a){case 0:return w.lR(D.Og)
case 1:return w.lR(D.az8)
case 2:return w.lR(D.azf)
case 3:return w.lR(D.azc)
case 4:return w.lR(D.azb)
case 5:return w.lR(H.ti)
case 7:return w.lR(D.az7)
case 6:return w.lR(D.az6)
case 8:return w.lR(D.aze)
case 9:return w.lR(D.azd)
case 12:return w.lR(D.Og)
case 14:return w.lR(D.az4)
case 21:return w.lR(D.az5)
case 15:return w.lR(D.aza)
case 16:return w.lR(D.az9)
case 10:return w.ar0("packages/quill_html_editor/assets/h1_dark.png")
case 11:return w.ar0("packages/quill_html_editor/assets/h2_dark.png")
case 13:return w.lR(D.az3)
case 19:return w.lR(U.O2)
case 22:return w.lR(D.azi)
case 23:return w.lR(D.azh)
case 24:return w.lR(D.azg)
case 18:case 20:case 17:case 25:case 26:case 27:return C.cP}},
lR(d){var w=this,v=w.d?w.x:w.w
return B.aS(d,v,null,w.r)},
ar0(d){var w=this,v=null,u=w.r
return new B.ao(u,u,G.a2Z(d,w.d?w.x:w.w,v,v,v),v)},
iY(d){var w=this
return A.dtv(w.x,w.w,w.r,d,null,w.f,w.c)}}
A.k0.prototype={
I(){return"ToolBarStyle."+this.b}}
A.auD.prototype={}
A.a_q.prototype={
B(d){var w=null
return B.ap(w,B.a2r(w,C.q,D.bDj,new A.b7o(this),19,w,M.mi,w,C.I,!0),C.k,C.l,w,w,w,120,w,w,w,w,w,120)}}
A.a1f.prototype={
M(){return new A.aOd()},
bQu(d){return this.r.$1(d)}}
A.aOd.prototype={
S(){this.d=new B.aW("fontBgColorKey"+J.as(this.a.a),x.q)
this.ah()},
B(d){var w,v,u,t,s=this,r=null,q=s.a,p=q.f,o=q.e
q=q.c
w=s.d
w===$&&B.b()
v=s.aq4(!1,d)
u=s.a
t=u.e
return new B.a1(p,new B.ao(o,o,A.asq(new B.ao(t,t,G.a2Z("packages/quill_html_editor/assets/edit_table.png",u.d,r,r,r),r),q,v,0,w,new A.c8M(s,d)),r),r)},
a7d(d,e,f){var w,v,u,t,s=null,r="packages/quill_html_editor/assets/insert_row_below.png"
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
return new A.qa(B.mf(B.ib(!1,s,!0,new B.a1(C.hs,B.ar(B.a([new B.ao(t,t,G.a2Z(r,v,s,s,s),s),P.bZ,B.bb(B.L(w,s,s,s,s,s,s,s,B.af(s,s,v,s,s,s,s,s,s,s,s,s,s,s,C.bb,s,s,!0,s,s,s,s,s,s,s,s),s,s,s,s,s),1,s)],x.p),C.j,C.f,C.R,0,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new A.c8K(this,d,f,e),s,s,s,s,s,s,s),s,u,s,s,s),s)},
buU(d,e){var w=null
B.en(w,w,!0,w,new A.c8L(this,!0),e,w,!0,!0,x.z)},
aq4(d,e){var w,v=null
if(d)return L.hr(v,v,v,new A.qa(new B.eS(new A.c8I(this,!0),v),v),C.P,v,v,new B.d9(B.bx(8),C.y),v,v,v)
w=B.aB(e,v,x.w).w.a.a<450?350:v
return new B.ao(200,w,B.kj(!0,!0,!0,v,C.v,v,C.q,new A.c8J(this,!1),7,v,v,C.P,v,v,v,!0,C.I,!0),v)}}
A.ta.prototype={
I(){return"EditTableEnum."+this.b}}
A.a1j.prototype={
M(){var w=null,v=x.M
return new A.a1k(D.N8,new B.tD(B.a([],v),w,w),new B.tD(B.a([],v),w,w))}}
A.a1k.prototype={
a_9(){},
l(){$.au.m6(this)
this.ai()},
S(){var w=this
w.ah()
w.w=new B.aW(J.as(w.a.a),x.A)
$.au.RG$.push(new A.bha(w))
$.au.dv$.push(w)},
b9Y(d){var w=this,v=w.w
v===$&&B.b()
v=$.au.b2$.x.h(0,v)
v=v==null?null:v.gan()
x.r.a(v)
if(w.c!=null)w.v(new A.bh4(w,v))},
bjQ(d){var w,v=this,u=v.c
u.toString
u=B.A9(u,x.u)
u.toString
v.x=u
w=B.pO(new A.bh6(v),!1,!1)
v.r=w
u.ji(0,w)},
MZ(){var w,v,u=this.c
if(u!=null){w=x.r.a(u.gan())
v=B.dn(w.cp(0,null),C.o)
return new A.hI(w.gD(0).a,w.gD(0).b,v.a,v.b)}this.xJ()
return D.N8},
aa0(d){return this.bv_(d)},
bv_(d){var w=0,v=B.l(x.H),u=this,t,s,r,q,p
var $async$aa0=B.f(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:p=B.A9(d,x.u)
p.toString
u.y=p
p=u.e
t=u.MZ()
s=u.c
s.toString
r=x.w
s=B.aB(s,null,r).w
q=u.c
q.toString
r=B.pO(new A.bh9(u,new A.aBi(D.awp,t,p,new A.hI(s.a.a,B.aB(q,null,r).w.a.b,0,0),u.a.f,8).bNV(0,D.N7)),!1,!1)
u.f=r
p=u.y
p.ji(0,r)
u.a.toString
return B.j(null,v)}})
return B.k($async$aa0,v)},
xJ(){var w=this.f
if(w!=null){w.hV(0)
this.f=null}},
B(d){var w=null,v=this.a,u=v.Q
return B.cD(w,v.c,C.q,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,u,w,w,w,w,w,w,w,w,!1,C.aa)},
Lx(){var w,v=this
v.a.toString
if(v.f!=null)v.xJ()
else{w=v.c
w.toString
v.aa0(w)}}}
A.aOl.prototype={}
A.amI.prototype={
baB(){var w,v=this,u=null,t=1,s=1,r=!1,q=0
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
w=r?new A.aGS(w,u):new A.aoW(w,u)
return B.cOb(new B.Fr(q,B.i7(u,u,!1,u,w,new B.W(v.e,v.f)),u),u,t,s)},
B(d){return this.baB()}}
A.ZP.prototype={
M(){return new A.aLX()}}
A.aLX.prototype={
B(d){var w=null,v=this.a,u=v.r,t=v.c,s=v.d
return B.fz(C.M,!0,w,B.pN(B.ap(w,v.w,C.k,w,new B.aa(0,300,0,1/0),new B.b1(t,w,w,u,w,w,w,C.L),w,w,w,w,new B.ak(s,s,s,s),w,w,w),1),C.k,C.C,0,w,w,w,w,w,C.bC)}}
A.hI.prototype={}
A.pp.prototype={
I(){return"ElTooltipPosition."+this.b}}
A.azs.prototype={
B(d){var w=null,v=this.d
v=B.cD(w,B.ap(w,w,C.k,B.c2(C.e.aI(255*this.e),v.R()>>>16&255,v.R()>>>8&255,v.R()&255),w,w,w,w,w,w,w,w,w,w),C.q,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.f,w,w,w,w,w,w,w,w,!1,C.aa)
return v}}
A.aoW.prototype={
b1(d,e){var w,v,u,t,s,r,q,p,o,n="cubicTo"
$.aw()
w=B.bl()
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
B.fR(o,n,[0,v*0.95,r*0.18,v*1.09,q,p])
v=s.a
v.toString
B.fR(v,n,[q,p,r,0,r,0])
p=s.a
p.toString
B.fR(p,n,[r,0,0,0,0,0])
r=s.a
r.toString
B.fR(r,n,[0,0,0,t,0,t])
s=s.a
s.toString
B.fR(s,n,[0,t,0,t,0,t])
d.a.eK(u,w)},
h6(d){return!0}}
A.aGS.prototype={
b1(d,e){var w,v,u,t,s,r,q,p,o,n="cubicTo"
$.aw()
w=B.bl()
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
B.fR(o,n,[v*0.58,s,v*0.42,s,p,r])
s=q.a
s.toString
B.fR(s,n,[p,r,0,0,0,0])
p=q.a
p.toString
B.fR(p,n,[0,0,v,0,v,0])
p=q.a
p.toString
B.fR(p,n,[v,0,t,r,t,r])
q=q.a
q.toString
B.fR(q,n,[t,r,t,r,t,r])
d.a.eK(u,w)},
h6(d){return!0}}
A.aBi.prototype={
avD(){var w,v,u,t,s,r=this,q=r.c,p=q.a
q=q.b
w=r.b
v=w.c+w.a*0.5
w=w.d
u=r.e
t=r.a.b
s=r.f
return new A.o0(new A.hI(p,q,v,w-q-u-t),new A.hI(p,q,Math.floor(v),Math.floor(w-u-t)),D.awe,new B.dW(new B.bh(s,s),new B.bh(s,s),C.U,new B.bh(s,s)))},
Yq(){var w,v,u,t,s,r,q=this,p=q.a,o=p.a
p=p.b
w=q.b
v=w.c+w.a*0.5
w=w.d
u=q.e
t=q.c
s=t.a
t=t.b
r=q.f
return new A.o0(new A.hI(s,t,v-s*0.5,w-t-u-p),new A.hI(o,p,Math.floor(v-o*0.5),Math.floor(w-u-p)),D.N7,B.CQ(new B.bh(r,r)))},
avC(){var w,v,u,t,s,r,q=this,p=q.a,o=p.a
p=p.b
w=q.b
v=w.c
u=w.a*0.5
w=w.d
t=q.e
s=q.c
r=q.f
return new A.o0(new A.hI(o,p,v-s.a+u,w-s.b-t-p),new A.hI(o,p,Math.floor(v+u-o),Math.floor(w-t-p)),D.awh,new B.dW(new B.bh(r,r),new B.bh(r,r),new B.bh(r,r),C.U))},
avB(){var w,v,u,t=this,s=t.c,r=s.a
s=s.b
w=t.b
v=w.c+w.a*0.5
w=w.d+w.b+t.e
u=t.f
return new A.o0(new A.hI(r,s,v,w+t.a.b),new A.hI(r,s,Math.ceil(v),Math.ceil(w)),D.awl,new B.dW(C.U,new B.bh(u,u),new B.bh(u,u),new B.bh(u,u)))},
anu(){var w,v,u,t,s,r=this,q=r.a,p=q.a
q=q.b
w=r.b
v=w.c+w.a*0.5
w=w.d+w.b+r.e
u=r.c
t=u.a
s=r.f
return new A.o0(new A.hI(t,u.b,v-t*0.5,w+q),new A.hI(p,q,Math.ceil(v-p*0.5),Math.ceil(w)),D.awm,B.CQ(new B.bh(s,s)))},
avA(){var w,v,u,t,s=this,r=s.c,q=r.a
r=r.b
w=s.b
v=w.c+w.a*0.5
u=s.a
w=w.d+w.b+s.e
t=s.f
return new A.o0(new A.hI(q,r,v-q,w+u.b),new A.hI(q,r,v-u.a,Math.ceil(w)),D.awn,new B.dW(new B.bh(t,t),C.U,new B.bh(t,t),new B.bh(t,t)))},
atH(){var w,v,u,t=this,s=t.c,r=s.a,q=s.b,p=t.b
s=p.c-s.c
w=t.e
v=t.a.b
p=p.d+p.b*0.5
u=t.f
return new A.o0(new A.hI(r,q,s-r-w-v,p),new A.hI(r,q,Math.floor(s-w-v),p),D.awo,new B.dW(new B.bh(u,u),C.U,new B.bh(u,u),new B.bh(u,u)))},
atF(){var w,v,u,t,s=this,r=s.c,q=r.a,p=r.b,o=s.b
r=o.c-r.c
w=s.e
v=s.a
u=v.b
o=o.d+o.b*0.5
t=s.f
return new A.o0(new A.hI(q,p,r-q-w-u,o-p*0.5),new A.hI(q,p,Math.floor(r-w-u),Math.floor(o-v.a*0.5)),D.awf,B.CQ(new B.bh(t,t)))},
atG(){var w,v,u,t,s=this,r=s.c,q=r.a,p=r.b,o=s.b
r=o.c-r.c
w=s.e
v=s.a
u=v.b
o=o.d+o.b*0.5
t=s.f
return new A.o0(new A.hI(q,p,r-q-w-u,o-p),new A.hI(q,p,Math.floor(r-w-u),Math.floor(o-v.a)),D.awg,new B.dW(new B.bh(t,t),new B.bh(t,t),new B.bh(t,t),C.U))},
awy(){var w,v,u,t,s,r=this,q=r.c,p=q.a
q=q.b
w=r.b
v=w.c+w.a+r.e
u=Math.floor(v)
w=w.d+w.b*0.5
t=Math.floor(w)
s=r.f
return new A.o0(new A.hI(p,q,Math.floor(v+r.a.b),Math.floor(w)),new A.hI(p,q,u,t),D.awi,new B.dW(C.U,new B.bh(s,s),new B.bh(s,s),new B.bh(s,s)))},
aww(){var w,v,u,t,s=this,r=s.c,q=r.a
r=r.b
w=s.b
v=w.c+w.a+s.e
w=w.d+w.b*0.5
u=s.a
t=s.f
return new A.o0(new A.hI(q,r,v+u.b,w-r*0.5),new A.hI(q,r,Math.floor(v),Math.floor(w-u.a*0.5)),D.awj,B.CQ(new B.bh(t,t)))},
awx(){var w,v,u,t,s=this,r=s.c,q=r.a
r=r.b
w=s.b
v=w.c+w.a+s.e
w=w.d+w.b*0.5
u=s.a
t=s.f
return new A.o0(new A.hI(q,r,v+u.b,w-r),new A.hI(q,r,Math.floor(v),w-u.a),D.awk,new B.dW(new B.bh(t,t),new B.bh(t,t),C.U,new B.bh(t,t)))},
aqB(d){var w,v=d.a,u=v.c,t=!1
if(u>0){w=this.d
if(u+v.a<w.a){u=v.d
v=u>0&&u+v.b<w.b}else v=t}else v=t
if(v)return!0
return!1},
b8G(){var w,v,u=this,t=[u.gbxs(),u.gb13(),u.gbjt(),u.gbsB(),u.gbqf(),u.gbqe(),u.gbjv(),u.gbsD(),u.gbju(),u.gbsC(),u.gbqd(),u.gbqc()]
for(w=0;w<12;++w){v=t[w]
if(u.aqB(v.$0()))return v.$0()}return u.Yq()},
bNV(d,e){var w,v=this
switch(e.a){case 0:w=v.avD()
break
case 1:w=v.Yq()
break
case 2:w=v.avC()
break
case 6:w=v.avB()
break
case 7:w=v.anu()
break
case 8:w=v.avA()
break
case 9:w=v.atH()
break
case 10:w=v.atF()
break
case 11:w=v.atG()
break
case 3:w=v.awy()
break
case 4:w=v.aww()
break
case 5:w=v.awx()
break
default:w=v.Yq()
break}return v.aqB(w)?w:v.b8G()}}
A.o0.prototype={}
A.brx.prototype={
I(){return"InputAction."+this.b}}
A.bqA.prototype={
a24(){var w=0,v=B.l(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$a24=B.f(function(d,e){if(d===1){t.push(e)
w=u}while(true)switch(w){case 0:u=3
w=6
return B.d($.cVc.c2().a25(!1,C.axc,!0),$async$a24)
case 6:r=e
if(r!=null){q=J.hF(r.a)
p=q.c
if(p!=null){o=C.ia.glY().cl(p)
s.a.$1("data:image/"+B.n(C.b.gZ(q.b.split(".")))+";base64,"+B.n(o))}}u=1
w=5
break
case 3:u=2
j=t.pop()
k=B.ai(j)
if(k instanceof B.km){n=k
B.hE().$1("Unsupported operation "+B.n(n))}else{m=k
B.hE().$1("File Picker "+J.as(m))}w=5
break
case 2:w=1
break
case 5:return B.j(null,v)
case 1:return B.i(t.at(-1),v)}})
return B.k($async$a24,v)}}
A.RP.prototype={
M(){return new A.aQ8(new B.aW(null,x.m))},
bR7(d,e){return this.c.$1(e)}}
A.aQ8.prototype={
S(){this.f=new B.aW(C.c.j(B.dT(this.a.e)),x.q)
this.ah()},
B(d){return this.aOH(d)},
aOH(d){var w,v,u=this,t={}
t.a=null
w=u.f
w===$&&B.b()
v=u.baw(!0,0,0,null,d)
return A.asq(u.a.r,C.l,v,10,w,new A.cgr(t,u))},
baw(d,e,f,g,h){var w,v,u,t=this,s=null,r={}
r.a=e
r.b=f
w=B.aB(h,s,x.w).w
v=A.bo4("#E7F0FE")
u=B.bx(10)
return new A.qa(B.ve(s,s,new B.a1(new B.ak(0,0,0,w.f.d),B.ap(C.N,B.ar(B.a([C.hd,new B.f9(1,C.by,new B.a1(C.fV,B.ap(s,B.eb(s,!1,s,D.aB_,!1,s,s,s,s,1,1,!1,new A.cgn(t),s,s,s,s,!1,s,s,C.F,s,new A.cgo()),C.k,s,s,new B.b1(v,s,s,u,s,s,s,C.L),s,s,s,s,s,s,s,s),s),s),B.bM(s,s,s,s,s,s,D.aAj,s,s,s,new A.cgp(r,t,g,!0,h),s,s,s,s,s),K.q4,B.bM(s,s,s,s,s,s,D.azW,s,s,s,new A.cgq(r,t,!0,h),s,s,s,s,s),K.q4],x.p),C.j,C.f,C.i,0,s),C.k,s,s,s,s,60,s,s,s,s,s,s),s),t.d,s),s)}}
A.aHS.prototype={
I(){return"UrlInputType."+this.b}}
A.V2.prototype={
M(){return new A.aie(B.aU(x.S),B.aU(x.e),new B.aW(null,x.A))},
bR8(d,e){return this.c.$2(d,e)}}
A.aie.prototype={
S(){this.ah()},
b67(d){var w,v,u,t,s,r=this
r.b3w()
w=$.au.b2$.x.h(0,r.w).Ak(x.r)
w.toString
v=B.a([],x.L)
u=new B.c6(new Float64Array(16))
u.fU()
if(w.f7(new B.wV(v,B.a([u],x.O),B.a([],x.b)),w.ht(d.gaN(d))))for(w=v.length,u=r.e,t=0;t<v.length;v.length===w||(0,B.M)(v),++t){s=v[t].a
if(s instanceof A.W5&&!u.p(0,s)){u.t(0,s)
r.btK(s.G)}}},
btK(d){this.v(new A.cxU(this,d))},
B(d){var w=this,v=null,u=w.gb66(),t=w.a.d
return new A.qa(B.mU(C.cq,B.a2r(v,C.q,new I.tY(t,0,0,1),new A.cxV(w),t*t,w.w,v,C.du,C.a5,!0),v,v,u,v,u,v,v,w.gbnR()),v)},
b3w(){this.e.V(0)
this.v(new A.cxS(this))},
bnS(d){this.a.bR8(this.f+1,this.r+1)}}
A.W6.prototype={
bb(d){var w=new A.W5(this.e,null,new B.br(),B.aC(x.v))
w.be()
w.sbY(null)
return w},
bg(d,e){e.G=this.e}}
A.W5.prototype={}
A.abL.prototype={
gn(d){return this.c.a},
qr(d,e){var w=this.a
w===$&&B.b()
return B.dP(w.xj(d,e),x.z)},
Bn(){var w=0,v=B.l(x.H),u=this,t
var $async$Bn=B.f(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:t=u.c
t.c.OK(t.a)
t.a=t.b.kD(0)
B.cHk("\x1b[34m[WebViewX]\x1b[0m "+("Current history: "+t.j(0))+"\x1b[0m",1024)
u.a5()
return B.j(null,v)}})
return B.k($async$Bn,v)},
Bo(){var w=0,v=B.l(x.H),u=this,t
var $async$Bo=B.f(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:t=u.c
t.b.jO(0,t.a)
t.a=t.c.w4()
B.cHk("\x1b[34m[WebViewX]\x1b[0m "+("Current history: "+t.j(0))+"\x1b[0m",1024)
u.a5()
return B.j(null,v)}})
return B.k($async$Bo,v)},
l(){var w=this.b
w.a7$=$.a8()
w.Y$=0
this.fD()},
$iabM:1}
A.b95.prototype={}
A.uY.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.uY&&e.a===this.a},
gu(d){return C.d.gu(this.a)}}
A.a1q.prototype={
I(){return"EmbedPosition."+this.b}}
A.a9e.prototype={
I(){return"SourceType."+this.b}}
A.auI.prototype={
j(d){return"\nHistoryStack:\nBack: "+this.b.j(0)+"\nCurrent: "+B.n(this.a)+"\nForward: "+this.c.j(0)+"\n"},
bAL(d){var w=this
if(d.k(0,w.a))return
w.b.jO(0,w.a)
w.a=d
w.c.V(0)}}
A.bYf.prototype={}
A.CX.prototype={
a_H(d,e,f,g){return this.bJc(d,e,f,g)},
bJc(d,e,f,g){var w=0,v=B.l(x.N),u,t=this,s,r
var $async$a_H=B.f(function(h,i){if(h===1)return B.i(i,v)
while(true)switch(w){case 0:s=B.dv(t.acc(B.rH(4,g,C.aA,!1)),0,null)
w=3
return B.d(f==="get"?B.cQ9(s,e):B.b00(s,d,null,e),$async$a_H)
case 3:r=i
u=t.aer(B.m8(B.m7(r.e)).dd(0,r.w))
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a_H,v)}}
A.anD.prototype={
acc(d){return"https://cors.bridged.cc/"+d},
aer(d){return d}}
A.aoA.prototype={
acc(d){return"https://api.codetabs.com/v1/proxy/?quest="+d},
aer(d){return d}}
A.aIz.prototype={
acc(d){return"https://we-cors-anywhere.herokuapp.com/"+d},
aer(d){return d}}
A.qa.prototype={
B(d){return new A.a6l(this.c,!1,this.a)}}
A.Nh.prototype={
j(d){var w=this.d
return"WebViewContent:\nSource: "+this.a+"\nSourceType: "+this.b.b+"\nLast request Headers: none\nLast request Body: "+B.n(w==null?"none":w)+"\n"},
k(d,e){var w,v=this
if(e==null)return!1
if(e!==v){w=!1
if(e instanceof A.Nh)if(e.a===v.a)if(e.b===v.b)w=e.d==v.d}else w=!0
return w},
gu(d){var w=this
return(C.d.gu(w.a)^B.dT(w.b)^C.d1.gu(w.c)^J.V(w.d))>>>0}}
A.bs3.prototype={
I(){return"JavascriptMode."+this.b}}
A.b3N.prototype={
I(){return"AutoMediaPlaybackPolicy."+this.b}}
A.abK.prototype={
M(){return new A.aji()}}
A.aji.prototype={
S(){var w,v,u,t,s,r=this,q=null
r.ah()
r.x=!1
r.a.toString
r.y=!1
w=E.kn.Bc()
r.e="_iframe"+("_"+B.dt(w,"-","_"))
r.d=r.b4C()
r.brB(r.e)
w=r.a
v=w.c
w=w.d
u=r.y
t=$.a8()
u=new B.bN(u,t,x.Y)
s=x.o
t=new A.abL(u,new A.auI(new A.Nh(v,w,q,q),B.nI(q,s),B.nI(q,s),x.K),t)
t.a2(0,r.gaAz())
u.a2(0,r.gase())
r.w=t
w=r.a
v=w.d
u=!0
if(v!==D.adr)if(v!==D.adt)w=v===D.ads&&w.c==="about:blank"
else w=u
else w=u
if(w)r.b41(r.gb2D())
else r.ao9()
r.brA()
B.hi(C.K,new A.cEj(r),x.P)},
brB(d){$.Co()
$.rQ().w1(d,new A.cEg(this),!0)},
b41(d){var w=$.d9Y(),v=this.e
v===$&&B.b()
w.m(0,"connect_js_to_flutter"+v,new A.cEb(this,d))},
brA(){var w=this.d
w===$&&B.b()
this.f=B.caB(w,"load",new A.cEf(this),!1,x.E.c)},
ao9(){var w=this.a.w,v=this.w
v===$&&B.b()
w.$1(v)},
ao8(d){this.a.at.$1(d)},
B(d){var w,v=null,u=this.a,t=u.f,s=u.r
u=u.a
w=this.e
w===$&&B.b()
u=B.am3(!0,new B.hO(new B.xo(w,v,v,C.jV,u),v))
w=this.y
w===$&&B.b()
u=B.a([new B.ao(t,s,u,v)],x.p)
if(w)u.push(B.pQ(0,new A.a6l(B.ap(v,v,C.k,v,v,v,v,v,v,v,v,v,v,v),!1,v)))
else u.push(C.a3)
return new B.ch(C.ad,v,C.ac,C.v,u,v)},
b4C(){var w,v=this,u=document.createElement("iframe")
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
C.b.aT(D.aQX,C.aul.gks(w))
v.a.toString
u.sandbox.add("allow-scripts")
v.a.toString
u.allow=C.b.hs(D.aNF,new A.cEc())
return u},
bzU(){var w=this.w
w===$&&B.b()
w=w.c.a
this.ao8(w.a)
this.aA7(w)},
bd4(){this.v(new A.cEd(this))},
a66(d,e){return this.b37(d,e)},
b37(d,e){var w=0,v=B.l(x.y),u,t=this
var $async$a66=B.f(function(f,g){if(f===1)return B.i(g,v)
while(true)switch(w){case 0:t.a.toString
u=!0
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a66,v)},
aA7(d){var w,v,u=this,t=d.a
if(t.length===0){u.a.toString
return}w=d.b
switch(w.a){case 0:w=u.d
w===$&&B.b()
u.a.toString
v=u.e
v===$&&B.b()
w.srcdoc=A.cLX(t,!0,D.Hk,v)
break
case 1:case 2:if(t==="about:blank"){w=u.d
w===$&&B.b()
u.a.toString
v=u.e
v===$&&B.b()
w.srcdoc=A.cLX("<br>",!0,D.Hk,v)
break}if(!C.d.b8(t,B.bD("http[s]?://",!1,!1,!1))){u.a.toString
return}if(w===D.ads){w=u.d
w===$&&B.b()
w=B.dzK(w.contentWindow)
w.toString
J.dcx(J.dcb(w),t)}else u.byf(d.c,"get",t)
break}},
Wb(d){return this.be7(d)},
be7(d){var w=0,v=B.l(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Wb=B.f(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:o=x.i.a(C.aH.u9(0,d,null))
n=J.a0(o)
m=B.b9(n.h(o,"href"))
n.j(o)
t.a.toString
s=t.w
s===$&&B.b()
w=3
return B.d(t.a66(m,s.c.a.b),$async$Wb)
case 3:if(!f){t.a.toString
w=1
break}if(m==="javascript:history.back()"){t.w.Bn()
w=1
break}else if(m==="javascript:history.forward()"){t.w.Bo()
w=1
break}r=B.b9(n.h(o,"method"))
q=n.h(o,"body")
if(q==null)p=null
else{n=x.N
p=B.H(n,n)
p.YY(p,J.bf(x.j.a(q),new A.cEe(),x.J))}t.az1(p,t.w.c.a.c,r,m)
case 1:return B.j(u,v)}})
return B.k($async$Wb,v)},
az1(d,e,f,g){this.a6X(d,e,f,g).aJ(new A.cEh(this,g,e,d),x.P).kR(new A.cEi(this,g))},
byf(d,e,f){return this.az1(null,d,e,f)},
a6X(d,e,f,g){return this.b8e(d,e,f,g)},
b8e(d,e,f,g){var w=0,v=B.l(x.N),u,t=this,s,r,q,p,o,n,m
var $async$a6X=B.f(function(h,i){if(h===1)return B.i(i,v)
while(true)$async$outer:switch(w){case 0:t.a.toString
p=B.B(D.aH3,x.W)
C.b.aS9(p)
s=p
t.a.toString
for(r=0;r<J.bp(s);++r){q=J.v(s,r)
B.a_(q).j(0)
t.a.toString
try{o=q.a_H(d,e,f,g)
u=o
w=1
break $async$outer}catch(l){B.a_(q).j(0)
t.a.toString
if(J.p(r,J.bp(s)-1)){o=B.wC("None of the provided proxies were able to fetch the given page.",null)
m=new B.am($.ax,x.I)
m.pq(o)
u=m
w=1
break $async$outer}continue}}o=B.wC("Bad state",null)
m=new B.am($.ax,x.I)
m.pq(o)
u=m
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a6X,v)},
l(){var w=this,v=w.f
v===$&&B.b()
v.a1(0)
v=w.w
v===$&&B.b()
v.N(0,w.gaAz())
w.w.b.N(0,w.gase())
w.ai()}}
var z=a.updateTypes(["o0()","~()","~(q1)","S_(@)","JQ<@>(@)","pF(@)","~(j3,tu,h)","~(FA)","e(G,fK<@>)","abM<@>(abM<@>)","X<@>(ta)","fJ(G)","qa(G,m)","@(dg)","~(lR)","W6(G,m)","aE(pF)","I?(I?)","I?(@)"])
A.cFh.prototype={
$1(d){var w=function(e,f,g){return function(){return e(f,g,this,Array.prototype.slice.apply(arguments))}}(A.dzn,d,!1)
A.cPm(w,$.Os(),d)
return w},
$S:40}
A.cFi.prototype={
$1(d){return new this.a(d)},
$S:40}
A.cGQ.prototype={
$1(d){return new A.S_(d)},
$S:z+3}
A.cGR.prototype={
$1(d){return new A.JQ(d,x.R)},
$S:z+4}
A.cGS.prototype={
$1(d){return new A.pF(d)},
$S:z+5}
A.boU.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=d.w=J.as(d.w),p=B.a([],x.d)
if(e.geX(e)>0)p.push(F.a9K(C.d.ag(q,0,e.geX(e))))
w=e.ph(0)
w.toString
if(f.length===0&&C.d.b8(w,"www."))v="https://"+w
else v=w
u=F.cUW("a")
u.b.m(0,"href",f+v)
u.ghq(0).V(0)
w=F.a9K(w)
u.ghq(0).t(0,w)
p.push(u)
t=e.ger(e)
if(t<q.length)p.push(F.a9K(C.d.d4(q,t)))
w=F.bff()
w.ghq(0).H(0,p)
s=d.a
if(s==null)B.a7(B.aJ("Node must have a parent to replace it."))
s=s.ghq(0)
r=d.a.ghq(0)
s.m(0,r.dj(r,d),w)},
$S:z+6}
A.boV.prototype={
$1(d){var w=J.as(d.w)
d.w=w
B.uv(w,this.a,new A.boT(this.b,d),null)},
$S:z+2}
A.boT.prototype={
$1(d){this.a.$3(this.b,d,"mailto:")
return""},
$S:66}
A.boW.prototype={
$1(d){var w=J.as(d.w)
d.w=w
B.uv(w,this.a,new A.boS(this.b,d),null)},
$S:z+2}
A.boS.prototype={
$1(d){this.a.$3(this.b,d,"")
return""},
$S:66}
A.boX.prototype={
$1(d){var w=J.as(d.w)
d.w=w
B.uv(w,this.a,new A.boR(this.b,d),null)},
$S:z+2}
A.boR.prototype={
$1(d){this.a.$3(this.b,d,"tel:")
return""},
$S:66}
A.ceT.prototype={
$1(d){this.a.a.toString},
$S:79}
A.ceU.prototype={
$0(){B.hE().$1("Editor Loaded :)")},
$S:0}
A.ceV.prototype={
$0(){var w,v=this.a
v.v(new A.ceS(v))
w=v.d
w===$&&B.b()
if(w.length!==0)v.tz(w)},
$S:0}
A.ceS.prototype={
$0(){this.a.e=!1},
$S:0}
A.ceR.prototype={
$1(d){return this.a.e?D.amS:C.a3},
$S:293}
A.ceN.prototype={
$1(d){B.hE().$1("has focus "+d)
this.a.v(new A.ceL())},
$S:124}
A.ceL.prototype={
$0(){},
$S:0}
A.ceM.prototype={
$1(d){return B.hE().$1("widget text change "+d)},
$S:6}
A.ceQ.prototype={
$0(){},
$S:0}
A.ceP.prototype={
$1(d){return B.hE().$1("Editor resized "+B.n(d))},
$S:127}
A.ceO.prototype={
$1(d){return B.hE().$1("index "+B.n(d.a)+", range "+B.n(d.b))},
$S:z+7}
A.bE8.prototype={
$2(d,e){var w=e.b
if(w!=null)this.a.x=w
if(e.a===X.oB)return B.iu(new A.bE7(this.a))
w=this.a.a.db.$1(d)
return w},
$S:z+8}
A.bE7.prototype={
$2(d,e){var w=this.a,v=e.b
w.e=w.arC(v)
return w.b1z(d,v)},
$S:90}
A.bE5.prototype={
$1(d){this.a.as=!1},
$S:6}
A.bE4.prototype={
$1(d){return this.a.d=d},
$S:z+9}
A.bE6.prototype={
$1(d){B.hi(C.bl,null,x.z).aJ(new A.bDV(this.a),x.P)},
$S:6}
A.bDV.prototype={
$1(d){var w,v=this.a
v.as=!0
B.hE().$1("_editorLoaded true")
if(v.c!=null)v.v(new A.bDU())
v.a.r.a_w(!0)
w=v.a
w.at.$0()
v.a.r.d.t(0,"")},
$S:12}
A.bDU.prototype={
$0(){},
$S:0}
A.bDY.prototype={
$1(d){var w,v,u=this.a,t=u.r
t===$&&B.b()
w=J.iE(d)
if(t===B.ld(w.j(d)))return
try{t=B.ld(w.j(d))
u.r=t==null?u.a.d:t}catch(v){u.r=u.a.d}finally{if(u.c!=null)u.v(new A.bDX(u))
u.a.as.$1(u.r)}},
$S:12}
A.bDX.prototype={
$0(){var w=this.a.r
w===$&&B.b()
return w},
$S:0}
A.bDZ.prototype={
$1(d){var w,v
try{w=this.a.a.r.b.ga0()
if(w!=null)w.bW7(C.aH.u9(0,d,null))}catch(v){}},
$S:12}
A.bE_.prototype={
$1(d){var w,v,u,t,s
if(""===d)return
try{u=this.a
u.a.toString
w=""
t=B.bD("<[^>]*>|&[^;]+;",!0,!1,!1)
v=B.dt(d,t," ")
if(J.uE(v)==="")w=""
else w=d
u.a.w.$1(w)
u.a.r.c.t(0,w)}catch(s){}},
$S:12}
A.bE0.prototype={
$1(d){var w=this.a,v=(d==null?null:J.as(d))==="true"
w.w=v
w.a.z.$1(v)
w.a.toString},
$S:12}
A.bE1.prototype={
$1(d){var w,v,u,t,s
if(""===d)return
try{u=this.a
u.a.toString
w=""
t=B.bD("<[^>]*>|&[^;]+;",!0,!1,!1)
v=B.dt(d,t," ")
if(J.uE(v)==="")w=""
else w=d
u=u.a
u.r.c.t(0,w)}catch(s){}},
$S:12}
A.bE2.prototype={
$1(d){var w,v,u
try{w=this.a
v=w.a
v.toString
if(!w.w){w.w=!0
v.z.$1(!0)}w=w.a.Q
w.$1(d!=null?A.cZx(C.aH.u9(0,d,null)):new A.FA(0,0))}catch(u){}},
$S:12}
A.bE3.prototype={
$1(d){var w=this.a
w.as=!0
if(w.c!=null)w.v(new A.bDW())},
$S:12}
A.bDW.prototype={
$0(){},
$S:0}
A.bDT.prototype={
$1(d){this.a.$1(d)},
$S:6}
A.bDS.prototype={
$1(d){this.a.$0()},
$S:6}
A.cFQ.prototype={
$1(d){return"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890".charCodeAt($.daY().AF(62))},
$S:77}
A.bSY.prototype={
$0(){},
$S:0}
A.bSI.prototype={
$1(d){this.a.a.d.a_v(d)},
$S:79}
A.bSJ.prototype={
$1(d){this.a.a.d.wo("link",d)},
$S:79}
A.bSK.prototype={
$1(d){return this.a.a.d.a12(d)},
$S:z+10}
A.bSL.prototype={
$0(){var w=0,v=B.l(x.H),u=this,t,s,r,q,p,o,n,m
var $async$$0=B.f(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:o=u.a
n=o.a
m=n.c
w=m===D.bL7?2:4
break
case 2:u.b.a.d.ZC()
w=3
break
case 4:w=m===D.bLd?5:7
break
case 5:u.b.a.d.tr()
w=6
break
case 7:w=m===D.bLa?8:10
break
case 8:u.b.a.d.ti()
w=9
break
case 10:w=m===D.bLe?11:13
break
case 11:w=14
return B.d(new A.bqA(new A.bSG(u.b)).a24(),$async$$0)
case 14:w=12
break
case 13:if(m===D.aeA){t=B.a([],x.c)
for(n=u.b,m=n.d,s=m.length,r=0;r<m.length;m.length===s||(0,B.M)(m),++r)t.push(m[r].iY(!1))
n.d=t}else if(m===D.aex){for(n=u.b.d,m=n.length,r=0;r<n.length;n.length===m||(0,B.M)(n),++r){q=n[r]
if(q.c===D.aez)q.iY(!1)}n=o.a
o.a=n.iY(!n.d)}else if(m===D.aez){for(n=u.b.d,m=n.length,r=0;r<n.length;n.length===m||(0,B.M)(n),++r){q=n[r]
if(q.c===D.aex)q.iY(!1)}n=o.a
o.a=n.iY(!n.d)}else o.a=n.iY(!n.d)
case 12:case 9:case 6:case 3:n=u.b
o=o.a
p=n.b9U(o.c,o.d)
n.a.d.wo(p.h(0,"format"),p.h(0,"value"))
if(J.p(J.v(n.e,"direction"),"rtl"))n.a.d.wo("align","right")
n.v(new A.bSH())
return B.j(null,v)}})
return B.k($async$$0,v)},
$S:2}
A.bSG.prototype={
$1(d){var w=this.a
J.c_(w.e,"image",d)
w.a.d.a_u(d)},
$S:79}
A.bSH.prototype={
$0(){},
$S:0}
A.bSF.prototype={
$1(d){var w=this.a
return B.a([w.VG("Small"),w.VG("Normal"),w.VG("Large"),w.VG("Huge")],x.p)},
$S:1054}
A.bSE.prototype={
$1(d){var w,v=this.a
J.c_(v.e,"size",d)
w=v.a.d
w.wo("size",d==="normal"?"":d)
v.v(new A.bSD())},
$S:28}
A.bSD.prototype={
$0(){},
$S:0}
A.bSC.prototype={
$1(d){var w="align",v=this.a,u=v.e
J.c_(u,w,d==="left"?"":d)
v.a.d.wo(w,J.v(v.e,w))
v.v(new A.bSB())},
$S:11}
A.bSB.prototype={
$0(){},
$S:0}
A.bSR.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.b()
if(v.ga0()!=null)w.r.ga0().Lx()},
$S:0}
A.bSQ.prototype={
$1(d){var w,v,u="color",t=this.a
J.c_(t.e,u,d)
w=t.d
v=this.b
w[v]=w[v].iY(!0)
t.a.d.wo(u,J.v(t.e,u))
t.v(new A.bSP())
w=t.r
w===$&&B.b()
if(w.ga0()!=null)t.r.ga0().xJ()},
$S:79}
A.bSP.prototype={
$0(){},
$S:0}
A.bSO.prototype={
$0(){var w=this.a,v=w.f
v===$&&B.b()
if(v.ga0()!=null)w.f.ga0().Lx()},
$S:0}
A.bSN.prototype={
$1(d){var w,v,u="background",t=this.a
J.c_(t.e,u,d)
w=t.d
v=this.b
w[v]=w[v].iY(!0)
t.a.d.wo(u,J.v(t.e,u))
t.v(new A.bSM())
w=t.f
w===$&&B.b()
if(w.ga0()!=null)t.f.ga0().xJ()},
$S:79}
A.bSM.prototype={
$0(){},
$S:0}
A.bST.prototype={
$0(){var w,v=this.b
if(B.aB(v,null,x.w).w.a.a<480)this.a.bv9(v)
else{v=this.a
w=v.w
w===$&&B.b()
if(w.ga0()!=null)v.w.ga0().Lx()}},
$S:0}
A.bSS.prototype={
$2(d,e){var w,v=this.a
v.a.d.QF(d,e)
w=v.w
w===$&&B.b()
if(w.ga0()!=null)v.w.ga0().xJ()},
$S:291}
A.bSX.prototype={
$1(d){var w=null
return L.hr(w,w,w,new A.qa(new B.eS(new A.bSW(this.a),w),w),C.P,w,w,new B.d9(B.bx(8),C.y),w,w,w)},
$S:z+11}
A.bSW.prototype={
$1(d){var w=null,v=x.p
return new B.ao(300,310,B.ae(B.a([B.ar(B.a([D.bD3,D.awI,B.bM(w,w,w,w,w,w,Y.kJ,w,w,w,new A.bSU(d),w,w,w,w,w)],v),C.j,C.f,C.R,0,w),B.bb(new A.V2(new A.bSV(this.a,d),8,w),1,w),C.fF],v),C.j,C.bm,C.R,0,w,C.m),w)},
$S:285}
A.bSU.prototype={
$0(){return B.bG(this.a,!1).dC()},
$S:0}
A.bSV.prototype={
$2(d,e){this.a.a.d.QF(d,e)
B.bG(this.b,!1).dC()},
$S:291}
A.b7o.prototype={
$2(d,e){var w=null
return new A.qa(B.cD(w,new B.a1(C.hs,B.ap(w,w,C.k,w,w,new B.b1(A.bo4(D.RH[e]),w,B.fp(C.n,C.B,0.3),w,w,w,w,C.L),w,40,w,w,w,w,w,40),w),C.q,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.b7n(this.a,e),w,w,w,w,w,w,w,w,!1,C.aa),w)},
$S:z+12}
A.b7n.prototype={
$0(){this.a.c.$1(D.RH[this.b])},
$S:0}
A.c8M.prototype={
$0(){var w,v=this.b
if(B.aB(v,null,x.w).w.a.a<480)this.a.buU(!0,v)
else{v=this.a
w=v.d
w===$&&B.b()
if(w.ga0()!=null)v.d.ga0().Lx()}},
$S:0}
A.c8K.prototype={
$0(){var w,v=this,u=v.a
u.a.bQu(v.b)
if(v.c)B.bG(v.d,!1).dC()
else{w=u.d
w===$&&B.b()
if(w.ga0()!=null)u.d.ga0().xJ()}},
$S:0}
A.c8L.prototype={
$1(d){return this.a.aq4(this.b,d)},
$S:24}
A.c8I.prototype={
$1(d){var w,v=this,u=null,t=x.w
if(B.aB(d,u,t).w.a.a<380)t=B.kj(!0,!0,!0,u,C.v,u,C.q,new A.c8G(v.a,v.b),7,u,u,u,u,u,u,!1,C.I,!0)
else{w=B.a2r(u,C.q,new I.tY(B.aB(d,u,t).w.a.a<380?1:2,0,0,3.3333333333333335),new A.c8H(v.a,v.b),7,u,u,u,C.I,!0)
t=w}return new B.ao(400,u,B.ae(B.a([D.bzZ,new B.f9(1,C.by,new B.a1(C.cc,t,u),u),C.fF],x.p),C.j,C.f,C.R,0,u,C.m),u)},
$S:285}
A.c8G.prototype={
$2(d,e){var w=B.a(D.EE.slice(0),x.x)
return this.a.a7d(w[e],d,this.b)},
$S:41}
A.c8H.prototype={
$2(d,e){var w=B.a(D.EE.slice(0),x.x)
return this.a.a7d(w[e],d,this.b)},
$S:41}
A.c8J.prototype={
$2(d,e){var w=B.a(D.EE.slice(0),x.x)
return this.a.a7d(w[e],d,this.b)},
$S:41}
A.bha.prototype={
$1(d){var w=this.a,v=w.c
v.toString
return w.bjQ(v)},
$S:4}
A.bh4.prototype={
$0(){var w=this.a,v=this.b
w.e=new A.hI(v.gD(0).a,v.gD(0).b,0,0)
w=w.r
if(w!=null)w.hV(0)},
$S:0}
A.bh6.prototype={
$1(d){var w,v,u=this.a
$.au.RG$.push(new A.bh5(u,d))
w=u.w
w===$&&B.b()
v=u.MZ()
return B.pN(B.bI(A.cTh(u.a.e,C.l,w,2,C.be,v),null,null),0)},
$S:1057}
A.bh5.prototype={
$1(d){return this.a.b9Y(this.b)},
$S:4}
A.bh9.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a
q.a.toString
w=this.b
v=w.a
u=q.MZ()
t=q.a
s=t.d
v=B.e2(r,A.cTh(t.e,s,r,2,w.d,u),r,r,v.c,r,v.d,r)
u=w.b
u=B.e2(r,new A.amI(s,w.c,16,10,r),r,r,u.c,r,u.d,r)
w=q.MZ()
s=q.MZ()
return new B.ch(C.ad,r,C.ac,C.v,B.a([new A.qa(new A.azs(!0,C.aw,0.7,new A.bh7(q),r),r),v,u,B.e2(r,B.cD(r,q.a.c,C.q,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.bh8(),r,r,r,r,r,r,r,r,!1,C.aa),r,r,s.c,r,w.d,r)],x.p),r)},
$S:286}
A.bh7.prototype={
$0(){this.a.xJ()},
$S:0}
A.bh8.prototype={
$0(){},
$S:0}
A.cgr.prototype={
$0(){var w=0,v=B.l(x.H),u=this,t,s,r
var $async$$0=B.f(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=u.b
r=u.a
w=2
return B.d(s.a.e.T8(),$async$$0)
case 2:r.a=e
t=s.f
t===$&&B.b()
if(t.ga0()!=null)s.f.ga0().Lx()
return B.j(null,v)}})
return B.k($async$$0,v)},
$S:2}
A.cgn.prototype={
$1(d){var w=this.a
w.v(new A.cgm(w,d))},
$S:6}
A.cgm.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.cgo.prototype={
$1(d){if(d==null||d.length===0)return"Can't be empty"
return null},
$S:61}
A.cgp.prototype={
$0(){var w,v,u=this,t=Date.now(),s=u.a
if(t-s.a<500)return
s.a=t
t=u.b
if(t.d.ga0().kb()){s=u.c
if(s!=null){w=t.a.e
v=s.a
if(v==null)v=0
s=s.b
w.TV(0,v,s==null?0:s)}B.hi(R.Mz,null,x.z).aJ(new A.cgk(t,u.d,u.e),x.P)}else{t.e=null
t.v(new A.cgl())}},
$S:0}
A.cgk.prototype={
$1(d){var w,v=this.a,u=v.a
u.toString
w=v.e
u.bR7(0,w==null?"":w)
v=v.f
v===$&&B.b()
v.ga0().xJ()},
$S:12}
A.cgl.prototype={
$0(){},
$S:0}
A.cgq.prototype={
$0(){var w=Date.now(),v=this.a
if(w-v.b<500)return
v.b=w
w=this.b.f
w===$&&B.b()
w.ga0().xJ()},
$S:0}
A.cxU.prototype={
$0(){var w,v,u,t,s=this.a,r=s.d
r.t(0,this.b)
w=B.B(r,B.t(r).i("cB.E"))
C.b.dQ(w,new A.cxT())
s.r=C.e.hM(C.b.gZ(w),s.a.d)
s.f=C.e.ar(C.b.gZ(w),s.a.d)
r.V(0)
for(v=0,u=0;u<s.a.d;++u)for(t=0;t<s.a.d;++t){if(u<=s.r&&t<=s.f)r.t(0,v);++v}},
$S:0}
A.cxT.prototype={
$2(d,e){return d-e},
$S:208}
A.cxV.prototype={
$2(d,e){var w=null,v=this.a.d,u=v.p(0,e)?H.C6:C.C,t=v.p(0,e)?2:1
return new A.W6(e,B.ap(w,w,C.k,w,w,new B.b1(u,w,B.fp(v.p(0,e)?H.LW:C.m4,C.B,t),w,w,w,w,C.L),w,w,w,M.mi,w,w,w,w),w)},
$S:z+15}
A.cxS.prototype={
$0(){this.a.d.V(0)},
$S:0}
A.bp7.prototype={
$2(d,e){return d+C.d.aU("\n",2)+e},
$S:111}
A.bp8.prototype={
$1(d){var w=d.b[1]
w.toString
return"<"+this.a+w+"> \n"+this.b},
$S:66}
A.cEj.prototype={
$0(){var w=this.a,v=w.w
v===$&&B.b()
w.aA7(v.c.a)},
$S:7}
A.cEg.prototype={
$1(d){var w=this.a.d
w===$&&B.b()
return w},
$S:1058}
A.cEb.prototype={
$1(d){var w,v,u,t=this.a
t.r=d
for(w=t.a.y,w=B.ec(w,w.r,B.t(w).c),v=w.$ti.c;w.q();){u=w.d
if(u==null)u=v.a(u)
t.r.m(0,u.a,u.b)}t.r.m(0,"WebOnClickInsideIframe",new A.cEa(t))
w=t.w
w===$&&B.b()
w.a=t.r
this.b.$0()},
$S:z+16}
A.cEa.prototype={
$1(d){this.a.Wb(B.b9(d))},
$S:12}
A.cEf.prototype={
$1(d){var w,v,u=this.a
u.e===$&&B.b()
w=u.a
w.toString
v=u.x
v===$&&B.b()
if(!v){u.x=!0
w=u.w
w===$&&B.b()
u.ao8(w.c.a.a)}else{u=u.w
u===$&&B.b()
w.ax.$1(u.c.a.a)}},
$S:176}
A.cEc.prototype={
$2(d,e){return d+"; "+e},
$S:111}
A.cEd.prototype={
$0(){var w=this.a,v=w.w
v===$&&B.b()
w.y=v.b.a},
$S:0}
A.cEe.prototype={
$1(d){var w=J.a0(d)
return new B.bF(J.as(w.h(d,0)),J.as(w.h(d,1)),x.J)},
$S:1059}
A.cEh.prototype={
$1(d){var w,v=this,u=v.a,t=v.b,s=A.cW0(D.awu,d,'      <base href="'+t+"\">\n      <script>\n\n      document.addEventListener('click', e => {\n        if (frameElement && document.activeElement && document.activeElement.href) {\n          e.preventDefault()\n\n          var returnedObject = JSON.stringify({method: 'get', href: document.activeElement.href});\n          frameElement.contentWindow.WebOnClickInsideIframe && frameElement.contentWindow.WebOnClickInsideIframe(returnedObject)\n        }\n      })\n      document.addEventListener('submit', e => {\n        if (frameElement && document.activeElement && document.activeElement.form && document.activeElement.form.action) {\n          e.preventDefault()\n\n          if (document.activeElement.form.method === 'post') {\n            var formData = new FormData(document.activeElement.form);\n            \n            var returnedObject = JSON.stringify({method: 'post', href: document.activeElement.form.action, body: [...formData]});\n            frameElement.contentWindow.WebOnClickInsideIframe && frameElement.contentWindow.WebOnClickInsideIframe(returnedObject)\n          } else {\n            var urlWithQueryParams = document.activeElement.form.action + '?' + new URLSearchParams(new FormData(document.activeElement.form))\n\n            var returnedObject = JSON.stringify({method: 'get', href: urlWithQueryParams});\n            frameElement.contentWindow.WebOnClickInsideIframe && frameElement.contentWindow.WebOnClickInsideIframe(returnedObject)\n          }\n        }\n      })\n      </script>\n      "),r=u.d
r===$&&B.b()
u.a.toString
w=u.e
w===$&&B.b()
r.srcdoc=A.cLX(s,!0,D.Hk,w)
w=u.w
w===$&&B.b()
w.c.bAL(new A.Nh(t,D.adt,v.c,v.d))
u.a.toString},
$S:79}
A.cEi.prototype={
$1(d){var w=this.a
w.a.toString
B.n(d)
w.a.toString},
$S:12};(function aliases(){var w=A.pF.prototype
w.aU3=w.h
w.aU4=w.m
w=A.WS.prototype
w.amp=w.m})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_1u
w(A,"dHC","cPh",17)
w(A,"dHB","cPg",18)
var t
v(t=A.aBi.prototype,"gbqf","avD",0)
v(t,"gbxs","Yq",0)
v(t,"gbqe","avC",0)
v(t,"gbqd","avB",0)
v(t,"gb13","anu",0)
v(t,"gbqc","avA",0)
v(t,"gbjv","atH",0)
v(t,"gbjt","atF",0)
v(t,"gbju","atG",0)
v(t,"gbsD","awy",0)
v(t,"gbsB","aww",0)
v(t,"gbsC","awx",0)
u(t=A.aie.prototype,"gb66","b67",13)
u(t,"gbnR","bnS",14)
v(A.abL.prototype,"gft","l",1)
v(t=A.aji.prototype,"gb2D","ao9",1)
v(t,"gaAz","bzU",1)
v(t,"gase","bd4",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.ce,[A.cFh,A.cFi,A.cGQ,A.cGR,A.cGS,A.boU,A.boV,A.boT,A.boW,A.boS,A.boX,A.boR,A.ceT,A.ceR,A.ceN,A.ceM,A.ceP,A.ceO,A.bE5,A.bE4,A.bE6,A.bDV,A.bDY,A.bDZ,A.bE_,A.bE0,A.bE1,A.bE2,A.bE3,A.bDT,A.bDS,A.cFQ,A.bSI,A.bSJ,A.bSK,A.bSG,A.bSF,A.bSE,A.bSC,A.bSQ,A.bSN,A.bSX,A.bSW,A.c8L,A.c8I,A.bha,A.bh6,A.bh5,A.bh9,A.cgn,A.cgo,A.cgk,A.bp8,A.cEg,A.cEb,A.cEa,A.cEf,A.cEe,A.cEh,A.cEi])
u(B.I,[A.pF,A.aBT,A.FA,A.hI,A.aBi,A.o0,A.bqA,A.b95,A.uY,A.auI,A.bYf,A.CX,A.Nh])
u(A.pF,[A.S_,A.WS])
t(A.JQ,A.WS)
t(A.HQ,B.eN)
u(B.ad,[A.Sp,A.a6l,A.MB,A.a_q,A.amI,A.azs,A.qa])
u(B.K,[A.a2I,A.a6P,A.aao,A.a1f,A.a1j,A.ZP,A.RP,A.V2,A.abK])
u(B.P,[A.aPz,A.a6Q,A.aap,A.aOd,A.aOl,A.aLX,A.aQ8,A.aie,A.aji])
u(B.cY,[A.ceU,A.ceV,A.ceS,A.ceL,A.ceQ,A.bDU,A.bDX,A.bDW,A.bSY,A.bSL,A.bSH,A.bSD,A.bSB,A.bSR,A.bSP,A.bSO,A.bSM,A.bST,A.bSU,A.b7n,A.c8M,A.c8K,A.bh4,A.bh7,A.bh8,A.cgr,A.cgm,A.cgp,A.cgl,A.cgq,A.cxU,A.cxS,A.cEj,A.cEd])
u(B.ew,[A.bE8,A.bE7,A.bSS,A.bSV,A.b7o,A.c8G,A.c8H,A.c8J,A.cxT,A.cxV,A.bp7,A.cEc])
u(B.fm,[A.k0,A.ta,A.pp,A.brx,A.aHS,A.a1q,A.a9e,A.bs3,A.b3N])
t(A.auD,B.N)
t(A.a1k,A.aOl)
u(B.t3,[A.aoW,A.aGS])
t(A.W6,B.bE)
t(A.W5,B.vM)
t(A.abL,B.hG)
u(A.CX,[A.anD,A.aoA,A.aIz])
w(A.WS,B.a4)
v(A.aOl,B.eF)})()
B.c9(b.typeUniverse,JSON.parse('{"S_":{"pF":[]},"JQ":{"a4":["1"],"C":["1"],"b2":["1"],"pF":[],"w":["1"],"a4.E":"1","w.E":"1"},"HQ":{"eN":[],"by":[],"bq":[],"e":[]},"Sp":{"ad":[],"e":[]},"a2I":{"K":[],"e":[]},"aPz":{"P":["a2I"]},"a6l":{"ad":[],"e":[]},"a6P":{"K":[],"e":[]},"a6Q":{"P":["a6P"]},"aao":{"K":[],"e":[]},"aap":{"P":["aao"]},"MB":{"ad":[],"e":[]},"auD":{"N":[]},"a_q":{"ad":[],"e":[]},"a1f":{"K":[],"e":[]},"aOd":{"P":["a1f"]},"a1j":{"K":[],"e":[]},"a1k":{"P":["a1j"],"eF":[]},"amI":{"ad":[],"e":[]},"ZP":{"K":[],"e":[]},"aLX":{"P":["ZP"]},"azs":{"ad":[],"e":[]},"aoW":{"ay":[]},"aGS":{"ay":[]},"RP":{"K":[],"e":[]},"aQ8":{"P":["RP"]},"V2":{"K":[],"e":[]},"W6":{"bE":[],"aM":[],"e":[]},"W5":{"Z":[],"bs":["Z"],"Y":[],"aO":[]},"aie":{"P":["V2"]},"abL":{"ay":[],"abM":["pF"]},"anD":{"CX":[]},"aoA":{"CX":[]},"aIz":{"CX":[]},"qa":{"ad":[],"e":[]},"abK":{"K":[],"e":[]},"aji":{"P":["abK"]}}'))
B.wz(b.typeUniverse,JSON.parse('{"WS":1,"abM":1}'))
var y={b:"packages/quill_html_editor/assets/insert_table.png"}
var x=(function rtii(){var w=B.E
return{B:w("yV"),W:w("CX"),v:w("eX"),C:w("uY"),k:w("aI"),D:w("cS"),Z:w("mM"),_:w("X<@>"),F:w("X<h?>"),K:w("auI<Nh>"),t:w("JE"),G:w("u<jR<h>>"),g:w("u<jR<@>>"),x:w("u<ta>"),L:w("u<px<aO>>"),O:w("u<c6>"),d:w("u<j3>"),M:w("u<tC>"),s:w("u<h>"),c:w("u<MB>"),f:w("u<k0>"),p:w("u<e>"),b:w("u<O9>"),a:w("u<b5>"),R:w("JQ<@>"),l:w("S1"),q:w("aW<a1k>"),m:w("aW<pu>"),h:w("aW<a6Q>"),A:w("aW<P<K>>"),U:w("aW<aap>"),j:w("C<@>"),J:w("bF<h,h>"),i:w("A<h,@>"),w:w("hy"),V:w("cV"),P:w("aE"),u:w("tD"),r:w("Z"),n:w("FA"),N:w("h"),Q:w("js"),X:w("cp<h>"),Y:w("bN<y>"),o:w("Nh"),aX:w("df<q1>"),cg:w("Ni"),bj:w("yg"),e:w("W5"),E:w("aOn<cS>"),I:w("am<h>"),y:w("y"),z:w("@"),S:w("m"),T:w("h?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bSN=new A.b3N(0,"requireUserActionForAllMediaTypes")
D.akM=new A.anD()
D.akQ=new A.aoA()
D.aml=new A.aIz()
D.aH3=B.a(w([D.akM,D.akQ,D.aml]),B.E("u<CX>"))
D.aQX=B.a(w(["allow-downloads","allow-forms","allow-modals","allow-orientation-lock","allow-pointer-lock","allow-popups","allow-popups-to-escape-sandbox","allow-presentation","allow-same-origin"]),x.s)
D.aNF=B.a(w(["accelerometer","clipboard-write","encrypted-media","gyroscope","picture-in-picture"]),x.s)
D.bSW=new A.b95()
D.amn=new A.bYf()
D.amZ=new B.z8(C.A6,0.4,null,null,null,null,null,null,null)
D.amS=new B.l0(C.N,null,null,D.amZ,null)
D.avt=new B.ak(10,10,0,0)
D.awe=new A.pp(0,"topStart")
D.N7=new A.pp(1,"topCenter")
D.awf=new A.pp(10,"leftCenter")
D.awg=new A.pp(11,"leftEnd")
D.awh=new A.pp(2,"topEnd")
D.awi=new A.pp(3,"rightStart")
D.awj=new A.pp(4,"rightCenter")
D.awk=new A.pp(5,"rightEnd")
D.awl=new A.pp(6,"bottomStart")
D.awm=new A.pp(7,"bottomCenter")
D.awn=new A.pp(8,"bottomEnd")
D.awo=new A.pp(9,"leftStart")
D.N8=new A.hI(0,0,0,0)
D.awp=new A.hI(16,10,0,0)
D.awt=new A.a1q(1,"aboveBodyCloseTag")
D.awu=new A.a1q(2,"belowHeadOpenTag")
D.awv=new A.a1q(3,"aboveHeadCloseTag")
D.bFH=new B.a6(!0,null,null,null,null,null,16,C.eT,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJg=new B.cx("Select Rows x Columns",null,D.bFH,null,null,null,null,null,null,null,null,null,null,null,null)
D.awI=new B.or(1,C.fX,D.bJg,null)
D.ayl=new B.az(58027,"MaterialIcons",null,!1)
D.aym=new B.az(58028,"MaterialIcons",null,!1)
D.ayn=new B.az(58029,"MaterialIcons",null,!1)
D.ayo=new B.az(58030,"MaterialIcons",null,!1)
D.ayw=new B.az(58240,"MaterialIcons",null,!1)
D.az3=new B.az(59812,"MaterialIcons",null,!1)
D.az4=new B.az(59816,"MaterialIcons",null,!1)
D.Og=new B.az(59818,"MaterialIcons",null,!1)
D.az5=new B.az(59819,"MaterialIcons",null,!1)
D.az6=new B.az(59823,"MaterialIcons",null,!0)
D.az7=new B.az(59824,"MaterialIcons",null,!0)
D.az8=new B.az(59825,"MaterialIcons",null,!1)
D.az9=new B.az(59827,"MaterialIcons",null,!0)
D.aza=new B.az(59829,"MaterialIcons",null,!1)
D.azb=new B.az(59831,"MaterialIcons",null,!1)
D.azc=new B.az(59834,"MaterialIcons",null,!1)
D.azd=new B.az(59835,"MaterialIcons",null,!1)
D.aze=new B.az(59836,"MaterialIcons",null,!1)
D.azf=new B.az(59837,"MaterialIcons",null,!1)
D.azg=new B.az(60007,"MaterialIcons",null,!1)
D.azh=new B.az(60424,"MaterialIcons",null,!0)
D.azi=new B.az(60802,"MaterialIcons",null,!0)
D.azB=new B.az(63047,"MaterialIcons",null,!1)
D.azW=new B.d1(D.azB,null,C.db,null,null)
D.azA=new B.az(63030,"MaterialIcons",null,!1)
D.aAj=new B.d1(D.azA,null,C.dU,null,null)
D.bTo=new A.brx(0,"newline")
D.bHf=new B.a6(!0,null,null,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aB_=new B.pD(null,null,null,null,null,null,null,null,null,null," Type URL",null,D.bHf,null,null,null,!0,!0,null,null,null,null,null,null,null,C.N1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,C.dD,null,null,null,null,C.dD,!0,null,!0,null)
D.bTr=new A.bs3(1,"unrestricted")
D.RH=B.a(w(["#000000","#FFFFFF","#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"]),x.s)
D.aw7=new A.ta(0,"insertRowAbove")
D.aw8=new A.ta(1,"insertRowBelow")
D.aw9=new A.ta(2,"insertColumnLeft")
D.awa=new A.ta(3,"insertColumnRight")
D.awb=new A.ta(4,"deleteRow")
D.awc=new A.ta(5,"deleteColumn")
D.awd=new A.ta(6,"deleteTable")
D.EE=B.a(w([D.aw7,D.aw8,D.aw9,D.awa,D.awb,D.awc,D.awd]),x.x)
D.bJI=new B.cx("Edit Table",null,Q.Il,null,null,null,null,null,null,null,null,null,null,null,null)
D.bwB=new B.a1(O.j0,D.bJI,null)
D.awJ=new B.or(1,C.fX,D.bwB,null)
D.aKW=B.a(w([D.awJ,V.an2]),x.p)
D.bzZ=new B.kR(C.a5,C.f,C.i,C.j,null,C.m,null,C.k,0,D.aKW,null)
D.Hk=new B.hu(C.dc,0,B.E("hu<dMt>"))
D.bD_=new B.ao(0,null,null,null)
D.bD3=new B.ao(15,null,null,null)
D.bDj=new I.tY(4,0,0,1)
D.adr=new A.a9e(0,"html")
D.ads=new A.a9e(1,"url")
D.adt=new A.a9e(2,"urlBypass")
D.bHE=new B.a6(!0,null,null,'"PT Sans", Calibri, Tahoma, sans-serif',null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bIM=new B.a6(!0,C.cI,null,null,null,null,18,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bL5=new A.k0("Add a table",25,"addTable")
D.aew=new A.k0("Alignment",14,"align")
D.aex=new A.k0("Header H1",10,"headerOne")
D.bL6=new A.k0("Bold",0,"bold")
D.bL7=new A.k0("Clear History",24,"clearHistory")
D.aey=new A.k0("Hyperlink",18,"link")
D.bL8=new A.k0("Edit table",26,"editTable")
D.bL9=new A.k0("Italic",1,"italic")
D.bLa=new A.k0("Redo",23,"redo")
D.bLb=new A.k0("Strikethrough",3,"strike")
D.bLc=new A.k0("Underline",2,"underline")
D.bLd=new A.k0("Undo",22,"undo")
D.bLe=new A.k0("Insert image",19,"image")
D.bLf=new A.k0("Font Size",17,"size")
D.aez=new A.k0("Header H2",11,"headerTwo")
D.bLg=new A.k0("Background color",13,"background")
D.aeA=new A.k0("Clears all formats",21,"clean")
D.bLh=new A.k0("separator",27,"separator")
D.bLi=new A.k0("Insert Youtube/Url",20,"video")
D.bLj=new A.k0("Font color",12,"color")
D.bNQ=new A.aHS(0,"video")
D.bNR=new A.aHS(1,"hyperlink")})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"dS3","d9Y",()=>A.d49(self))
w($,"dR1","cRC",()=>B.d4P("_$dart_dartObject"))
w($,"dS7","cRK",()=>function DartObject(d){this.o=d})
v($,"dTz","daY",()=>B.cNp(null))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_277",e:"endPart",h:b})})($__dart_deferred_initializers__,"+Mq68tIJWm8FvLvmxPpkkfpHH7M=");