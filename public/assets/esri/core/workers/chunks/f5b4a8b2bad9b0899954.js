"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3027],{46851:(t,n,e)=>{e.d(n,{R:()=>i,a:()=>c,g:()=>a,t:()=>s});let r=1e-6;function a(){return r}const i=Math.random,o=Math.PI/180,u=180/Math.PI;function s(t){return t*o}function c(t){return t*u}Object.freeze(Object.defineProperty({__proto__:null,getEpsilon:a,setEpsilon:function(t){r=t},RANDOM:i,toRadian:s,toDegree:c,equals:function(t,n){return Math.abs(t-n)<=r*Math.max(1,Math.abs(t),Math.abs(n))}},Symbol.toStringTag,{value:"Module"}))},17896:(t,n,e)=>{e.d(n,{B:()=>l,C:()=>f,a:()=>s,b:()=>c,c:()=>o,d:()=>d,e:()=>b,f:()=>k,g:()=>h,h:()=>p,i:()=>M,k:()=>D,l:()=>i,m:()=>w,n:()=>x,p:()=>g,q:()=>v,r:()=>I,s:()=>u,t:()=>y,u:()=>E,z:()=>m});var r=e(65617),a=e(46851);function i(t){const n=t[0],e=t[1],r=t[2];return Math.sqrt(n*n+e*e+r*r)}function o(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function u(t,n,e,r){return t[0]=n,t[1]=e,t[2]=r,t}function s(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t}function c(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t}function l(t,n,e){return t[0]=n[0]*e[0],t[1]=n[1]*e[1],t[2]=n[2]*e[2],t}function f(t,n,e){return t[0]=n[0]/e[0],t[1]=n[1]/e[1],t[2]=n[2]/e[2],t}function h(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t}function m(t,n,e,r){return t[0]=n[0]+e[0]*r,t[1]=n[1]+e[1]*r,t[2]=n[2]+e[2]*r,t}function M(t,n){const e=n[0]-t[0],r=n[1]-t[1],a=n[2]-t[2];return Math.sqrt(e*e+r*r+a*a)}function d(t,n){const e=n[0]-t[0],r=n[1]-t[1],a=n[2]-t[2];return e*e+r*r+a*a}function g(t){const n=t[0],e=t[1],r=t[2];return n*n+e*e+r*r}function x(t,n){const e=n[0],r=n[1],a=n[2];let i=e*e+r*r+a*a;return i>0&&(i=1/Math.sqrt(i),t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i),t}function b(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function k(t,n,e){const r=n[0],a=n[1],i=n[2],o=e[0],u=e[1],s=e[2];return t[0]=a*s-i*u,t[1]=i*o-r*s,t[2]=r*u-a*o,t}function p(t,n,e,r){const a=n[0],i=n[1],o=n[2];return t[0]=a+r*(e[0]-a),t[1]=i+r*(e[1]-i),t[2]=o+r*(e[2]-o),t}function w(t,n,e){const r=n[0],a=n[1],i=n[2];return t[0]=e[0]*r+e[4]*a+e[8]*i+e[12],t[1]=e[1]*r+e[5]*a+e[9]*i+e[13],t[2]=e[2]*r+e[6]*a+e[10]*i+e[14],t}function y(t,n,e){const r=n[0],a=n[1],i=n[2];return t[0]=r*e[0]+a*e[3]+i*e[6],t[1]=r*e[1]+a*e[4]+i*e[7],t[2]=r*e[2]+a*e[5]+i*e[8],t}function v(t,n,e){const r=e[0],a=e[1],i=e[2],o=e[3],u=n[0],s=n[1],c=n[2];let l=a*c-i*s,f=i*u-r*c,h=r*s-a*u,m=a*h-i*f,M=i*l-r*h,d=r*f-a*l;const g=2*o;return l*=g,f*=g,h*=g,m*=2,M*=2,d*=2,t[0]=u+l+m,t[1]=s+f+M,t[2]=c+h+d,t}const B=(0,r.c)(),V=(0,r.c)();function D(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function I(t,n,e){const r=e[0]-n[0],a=e[1]-n[1],i=e[2]-n[2];let o=r*r+a*a+i*i;return o>0?(o=1/Math.sqrt(o),t[0]=r*o,t[1]=a*o,t[2]=i*o,t):(t[0]=0,t[1]=0,t[2]=0,t)}const U=c,P=l,A=f,q=M,_=d,E=i,S=g;Object.freeze(Object.defineProperty({__proto__:null,length:i,copy:o,set:u,add:s,subtract:c,multiply:l,divide:f,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t},abs:function(t,n){return t[0]=Math.abs(n[0]),t[1]=Math.abs(n[1]),t[2]=Math.abs(n[2]),t},sign:function(t,n){return t[0]=Math.sign(n[0]),t[1]=Math.sign(n[1]),t[2]=Math.sign(n[2]),t},min:function(t,n,e){return t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.min(n[2],e[2]),t},max:function(t,n,e){return t[0]=Math.max(n[0],e[0]),t[1]=Math.max(n[1],e[1]),t[2]=Math.max(n[2],e[2]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t},scale:h,scaleAndAdd:m,distance:M,squaredDistance:d,squaredLength:g,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t},normalize:x,dot:b,cross:k,lerp:p,hermite:function(t,n,e,r,a,i){const o=i*i,u=o*(2*i-3)+1,s=o*(i-2)+i,c=o*(i-1),l=o*(3-2*i);return t[0]=n[0]*u+e[0]*s+r[0]*c+a[0]*l,t[1]=n[1]*u+e[1]*s+r[1]*c+a[1]*l,t[2]=n[2]*u+e[2]*s+r[2]*c+a[2]*l,t},bezier:function(t,n,e,r,a,i){const o=1-i,u=o*o,s=i*i,c=u*o,l=3*i*u,f=3*s*o,h=s*i;return t[0]=n[0]*c+e[0]*l+r[0]*f+a[0]*h,t[1]=n[1]*c+e[1]*l+r[1]*f+a[1]*h,t[2]=n[2]*c+e[2]*l+r[2]*f+a[2]*h,t},random:function(t,n){n=n||1;const e=a.R,r=2*e()*Math.PI,i=2*e()-1,o=Math.sqrt(1-i*i)*n;return t[0]=Math.cos(r)*o,t[1]=Math.sin(r)*o,t[2]=i*n,t},transformMat4:w,transformMat3:y,transformQuat:v,rotateX:function(t,n,e,r){const a=[],i=[];return a[0]=n[0]-e[0],a[1]=n[1]-e[1],a[2]=n[2]-e[2],i[0]=a[0],i[1]=a[1]*Math.cos(r)-a[2]*Math.sin(r),i[2]=a[1]*Math.sin(r)+a[2]*Math.cos(r),t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},rotateY:function(t,n,e,r){const a=[],i=[];return a[0]=n[0]-e[0],a[1]=n[1]-e[1],a[2]=n[2]-e[2],i[0]=a[2]*Math.sin(r)+a[0]*Math.cos(r),i[1]=a[1],i[2]=a[2]*Math.cos(r)-a[0]*Math.sin(r),t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},rotateZ:function(t,n,e,r){const a=[],i=[];return a[0]=n[0]-e[0],a[1]=n[1]-e[1],a[2]=n[2]-e[2],i[0]=a[0]*Math.cos(r)-a[1]*Math.sin(r),i[1]=a[0]*Math.sin(r)+a[1]*Math.cos(r),i[2]=a[2],t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},angle:function(t,n){o(B,t),o(V,n),x(B,B),x(V,V);const e=b(B,V);return e>1?0:e<-1?Math.PI:Math.acos(e)},str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},exactEquals:D,equals:function(t,n){if(t===n)return!0;const e=t[0],r=t[1],i=t[2],o=n[0],u=n[1],s=n[2],c=(0,a.g)();return Math.abs(e-o)<=c*Math.max(1,Math.abs(e),Math.abs(o))&&Math.abs(r-u)<=c*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(i-s)<=c*Math.max(1,Math.abs(i),Math.abs(s))},direction:I,sub:U,mul:P,div:A,dist:q,sqrDist:_,len:E,sqrLen:S},Symbol.toStringTag,{value:"Module"}))},65617:(t,n,e)=>{function r(){return[0,0,0]}function a(t){return[t[0],t[1],t[2]]}function i(t,n,e){return[t,n,e]}function o(t){const n=[0,0,0],e=Math.min(3,t.length);for(let r=0;r<e;++r)n[r]=t[r];return n}function u(t,n){return new Float64Array(t,n,3)}function s(){return i(1,1,1)}function c(){return i(1,0,0)}function l(){return i(0,1,0)}function f(){return i(0,0,1)}e.d(n,{O:()=>m,Z:()=>h,a:()=>a,b:()=>u,c:()=>r,d:()=>o,f:()=>i});const h=[0,0,0],m=s(),M=c(),d=l(),g=f();Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:a,fromValues:i,fromArray:o,createView:u,zeros:function(){return[0,0,0]},ones:s,unitX:c,unitY:l,unitZ:f,ZEROS:h,ONES:m,UNIT_X:M,UNIT_Y:d,UNIT_Z:g},Symbol.toStringTag,{value:"Module"}))},98766:(t,n,e)=>{e.d(n,{a:()=>o,b:()=>l,c:()=>a,d:()=>g,e:()=>m,f:()=>M,g:()=>b,h:()=>k,l:()=>x,n:()=>d,s:()=>i});var r=e(46851);function a(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function i(t,n,e,r,a){return t[0]=n,t[1]=e,t[2]=r,t[3]=a,t}function o(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t[3]=n[3]+e[3],t}function u(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t[3]=n[3]-e[3],t}function s(t,n,e){return t[0]=n[0]*e[0],t[1]=n[1]*e[1],t[2]=n[2]*e[2],t[3]=n[3]*e[3],t}function c(t,n,e){return t[0]=n[0]/e[0],t[1]=n[1]/e[1],t[2]=n[2]/e[2],t[3]=n[3]/e[3],t}function l(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t[3]=n[3]*e,t}function f(t,n){const e=n[0]-t[0],r=n[1]-t[1],a=n[2]-t[2],i=n[3]-t[3];return Math.sqrt(e*e+r*r+a*a+i*i)}function h(t,n){const e=n[0]-t[0],r=n[1]-t[1],a=n[2]-t[2],i=n[3]-t[3];return e*e+r*r+a*a+i*i}function m(t){const n=t[0],e=t[1],r=t[2],a=t[3];return Math.sqrt(n*n+e*e+r*r+a*a)}function M(t){const n=t[0],e=t[1],r=t[2],a=t[3];return n*n+e*e+r*r+a*a}function d(t,n){const e=n[0],r=n[1],a=n[2],i=n[3];let o=e*e+r*r+a*a+i*i;return o>0&&(o=1/Math.sqrt(o),t[0]=e*o,t[1]=r*o,t[2]=a*o,t[3]=i*o),t}function g(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function x(t,n,e,r){const a=n[0],i=n[1],o=n[2],u=n[3];return t[0]=a+r*(e[0]-a),t[1]=i+r*(e[1]-i),t[2]=o+r*(e[2]-o),t[3]=u+r*(e[3]-u),t}function b(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function k(t,n){const e=t[0],a=t[1],i=t[2],o=t[3],u=n[0],s=n[1],c=n[2],l=n[3],f=(0,r.g)();return Math.abs(e-u)<=f*Math.max(1,Math.abs(e),Math.abs(u))&&Math.abs(a-s)<=f*Math.max(1,Math.abs(a),Math.abs(s))&&Math.abs(i-c)<=f*Math.max(1,Math.abs(i),Math.abs(c))&&Math.abs(o-l)<=f*Math.max(1,Math.abs(o),Math.abs(l))}const p=u,w=s,y=c,v=f,B=h,V=m,D=M;Object.freeze(Object.defineProperty({__proto__:null,copy:a,set:i,add:o,subtract:u,multiply:s,divide:c,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t},min:function(t,n,e){return t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.min(n[2],e[2]),t[3]=Math.min(n[3],e[3]),t},max:function(t,n,e){return t[0]=Math.max(n[0],e[0]),t[1]=Math.max(n[1],e[1]),t[2]=Math.max(n[2],e[2]),t[3]=Math.max(n[3],e[3]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t},scale:l,scaleAndAdd:function(t,n,e,r){return t[0]=n[0]+e[0]*r,t[1]=n[1]+e[1]*r,t[2]=n[2]+e[2]*r,t[3]=n[3]+e[3]*r,t},distance:f,squaredDistance:h,length:m,squaredLength:M,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t},normalize:d,dot:g,lerp:x,random:function(t,n){const e=r.R;let a,i,o,u,s,c;n=n||1;do{a=2*e()-1,i=2*e()-1,s=a*a+i*i}while(s>=1);do{o=2*e()-1,u=2*e()-1,c=o*o+u*u}while(c>=1);const l=Math.sqrt((1-s)/c);return t[0]=n*a,t[1]=n*i,t[2]=n*o*l,t[3]=n*u*l,t},transformMat4:function(t,n,e){const r=n[0],a=n[1],i=n[2],o=n[3];return t[0]=e[0]*r+e[4]*a+e[8]*i+e[12]*o,t[1]=e[1]*r+e[5]*a+e[9]*i+e[13]*o,t[2]=e[2]*r+e[6]*a+e[10]*i+e[14]*o,t[3]=e[3]*r+e[7]*a+e[11]*i+e[15]*o,t},transformQuat:function(t,n,e){const r=n[0],a=n[1],i=n[2],o=e[0],u=e[1],s=e[2],c=e[3],l=c*r+u*i-s*a,f=c*a+s*r-o*i,h=c*i+o*a-u*r,m=-o*r-u*a-s*i;return t[0]=l*c+m*-o+f*-s-h*-u,t[1]=f*c+m*-u+h*-o-l*-s,t[2]=h*c+m*-s+l*-u-f*-o,t[3]=n[3],t},str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},exactEquals:b,equals:k,sub:p,mul:w,div:y,dist:v,sqrDist:B,len:V,sqrLen:D},Symbol.toStringTag,{value:"Module"}))},22021:(t,n,e)=>{e.d(n,{BV:()=>l,Kt:()=>h,Sf:()=>i,Vl:()=>c,ZF:()=>f,jE:()=>b,oK:()=>g,oc:()=>k,t7:()=>s,uZ:()=>o,wt:()=>u});var r=e(17896);e(98766);const a=new Float32Array(1);function i(t){--t;for(let n=1;n<32;n<<=1)t|=t>>n;return t+1}function o(t,n,e){return Math.min(Math.max(t,n),e)}function u(t){return 0==(t&t-1)}function s(t,n,e){return t+(n-t)*e}function c(t){return t*Math.PI/180}function l(t){return 180*t/Math.PI}function f(t){return Math.acos(o(t,-1,1))}function h(t){return Math.asin(o(t,-1,1))}function m(t,n,e=1e-6){return t===n||!(!Number.isFinite(t)||!Number.isFinite(n))&&(t>n?t-n:n-t)<=e}const M=new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT));const d=BigInt("1000000");function g(t){return x(Math.max(-p,Math.min(t,p)))}function x(t){return a[0]=t,a[0]}function b(t,n){const e=(0,r.l)(t),a=h(t[2]/e),i=Math.atan2(t[1]/e,t[0]/e);return(0,r.s)(n,e,a,i),n}function k(t){const n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],e=t[3]*t[3]+t[4]*t[4]+t[5]*t[5],r=t[6]*t[6]+t[7]*t[7]+t[8]*t[8];return!(m(n,1)&&m(e,1)&&m(r,1))}!function(t){const n=function(t){return M.setFloat64(0,t),M.getBigInt64(0)}(t=Math.abs(t)),e=function(t){return M.setBigInt64(0,t),M.getFloat64(0)}(n<=d?d:n-d);Math.abs(t-e)}(1);const p=x(34028234663852886e22)},23027:(t,n,e)=>{e.r(n),e.d(n,{default:()=>h});var r=e(22021),a={};a.defaultNoDataValue=(0,r.oK)(-1/0),a.decode=function(t,n){var e=(n=n||{}).encodedMaskData||null===n.encodedMaskData,c=s(t,n.inputOffset||0,e),l=null!=n.noDataValue?(0,r.oK)(n.noDataValue):a.defaultNoDataValue,f=i(c,n.pixelType||Float32Array,n.encodedMaskData,l,n.returnMask),h={width:c.width,height:c.height,pixelData:f.resultPixels,minValue:c.pixels.minValue,maxValue:c.pixels.maxValue,noDataValue:l};return f.resultMask&&(h.maskData=f.resultMask),n.returnEncodedMask&&c.mask&&(h.encodedMaskData=c.mask.bitset?c.mask.bitset:null),n.returnFileInfo&&(h.fileInfo=o(c,l),n.computeUsedBitDepths&&(h.fileInfo.bitDepths=u(c))),h};var i=function(t,n,e,r,a){var i,o,u=0,s=t.pixels.numBlocksX,l=t.pixels.numBlocksY,f=Math.floor(t.width/s),h=Math.floor(t.height/l),m=2*t.maxZError;e=e||(t.mask?t.mask.bitset:null),i=new n(t.width*t.height),a&&e&&(o=new Uint8Array(t.width*t.height));for(var M,d,g=new Float32Array(f*h),x=0;x<=l;x++){var b=x!==l?h:t.height%l;if(0!==b)for(var k=0;k<=s;k++){var p=k!==s?f:t.width%s;if(0!==p){var w,y,v,B,V=x*t.width*h+k*f,D=t.width-p,I=t.pixels.blocks[u];if(I.encoding<2?(0===I.encoding?w=I.rawData:(c(I.stuffedData,I.bitsPerPixel,I.numValidPixels,I.offset,m,g,t.pixels.maxValue),w=g),y=0):v=2===I.encoding?0:I.offset,e)for(d=0;d<b;d++){for(7&V&&(B=e[V>>3],B<<=7&V),M=0;M<p;M++)7&V||(B=e[V>>3]),128&B?(o&&(o[V]=1),i[V++]=I.encoding<2?w[y++]:v):(o&&(o[V]=0),i[V++]=r),B<<=1;V+=D}else if(I.encoding<2)for(d=0;d<b;d++){for(M=0;M<p;M++)i[V++]=w[y++];V+=D}else for(d=0;d<b;d++)if(i.fill)i.fill(v,V,V+p),V+=p+D;else{for(M=0;M<p;M++)i[V++]=v;V+=D}if(1===I.encoding&&y!==I.numValidPixels)throw"Block and Mask do not match";u++}}}return{resultPixels:i,resultMask:o}},o=function(t,n){return{fileIdentifierString:t.fileIdentifierString,fileVersion:t.fileVersion,imageType:t.imageType,height:t.height,width:t.width,maxZError:t.maxZError,eofOffset:t.eofOffset,mask:t.mask?{numBlocksX:t.mask.numBlocksX,numBlocksY:t.mask.numBlocksY,numBytes:t.mask.numBytes,maxValue:t.mask.maxValue}:null,pixels:{numBlocksX:t.pixels.numBlocksX,numBlocksY:t.pixels.numBlocksY,numBytes:t.pixels.numBytes,maxValue:t.pixels.maxValue,minValue:t.pixels.minValue,noDataValue:n}}},u=function(t){for(var n=t.pixels.numBlocksX*t.pixels.numBlocksY,e={},r=0;r<n;r++){var a=t.pixels.blocks[r];0===a.encoding?e.float32=!0:1===a.encoding?e[a.bitsPerPixel]=!0:e[0]=!0}return Object.keys(e)},s=function(t,n,e){var r={},a=new Uint8Array(t,n,10);if(r.fileIdentifierString=String.fromCharCode.apply(null,a),"CntZImage"!=r.fileIdentifierString.trim())throw"Unexpected file identifier string: "+r.fileIdentifierString;n+=10;var i=new DataView(t,n,24);if(r.fileVersion=i.getInt32(0,!0),r.imageType=i.getInt32(4,!0),r.height=i.getUint32(8,!0),r.width=i.getUint32(12,!0),r.maxZError=i.getFloat64(16,!0),n+=24,!e)if(i=new DataView(t,n,16),r.mask={},r.mask.numBlocksY=i.getUint32(0,!0),r.mask.numBlocksX=i.getUint32(4,!0),r.mask.numBytes=i.getUint32(8,!0),r.mask.maxValue=i.getFloat32(12,!0),n+=16,r.mask.numBytes>0){var o=new Uint8Array(Math.ceil(r.width*r.height/8)),u=(i=new DataView(t,n,r.mask.numBytes)).getInt16(0,!0),s=2,c=0;do{if(u>0)for(;u--;)o[c++]=i.getUint8(s++);else{var l=i.getUint8(s++);for(u=-u;u--;)o[c++]=l}u=i.getInt16(s,!0),s+=2}while(s<r.mask.numBytes);if(-32768!==u||c<o.length)throw"Unexpected end of mask RLE encoding";r.mask.bitset=o,n+=r.mask.numBytes}else 0==(r.mask.numBytes|r.mask.numBlocksY|r.mask.maxValue)&&(o=new Uint8Array(Math.ceil(r.width*r.height/8)),r.mask.bitset=o);i=new DataView(t,n,16),r.pixels={},r.pixels.numBlocksY=i.getUint32(0,!0),r.pixels.numBlocksX=i.getUint32(4,!0),r.pixels.numBytes=i.getUint32(8,!0),r.pixels.maxValue=i.getFloat32(12,!0),n+=16;var f=r.pixels.numBlocksX,h=r.pixels.numBlocksY,m=f+(r.width%f>0?1:0),M=h+(r.height%h>0?1:0);r.pixels.blocks=new Array(m*M);for(var d=1e9,g=0,x=0;x<M;x++)for(var b=0;b<m;b++){var k=0,p=t.byteLength-n;i=new DataView(t,n,Math.min(10,p));var w={};r.pixels.blocks[g++]=w;var y=i.getUint8(0);if(k++,w.encoding=63&y,w.encoding>3)throw"Invalid block encoding ("+w.encoding+")";if(2!==w.encoding){if(0!==y&&2!==y){if(y>>=6,w.offsetType=y,2===y)w.offset=i.getInt8(1),k++;else if(1===y)w.offset=i.getInt16(1,!0),k+=2;else{if(0!==y)throw"Invalid block offset type";w.offset=i.getFloat32(1,!0),k+=4}if(d=Math.min(w.offset,d),1===w.encoding)if(y=i.getUint8(k),k++,w.bitsPerPixel=63&y,y>>=6,w.numValidPixelsType=y,2===y)w.numValidPixels=i.getUint8(k),k++;else if(1===y)w.numValidPixels=i.getUint16(k,!0),k+=2;else{if(0!==y)throw"Invalid valid pixel count type";w.numValidPixels=i.getUint32(k,!0),k+=4}}var v;if(n+=k,3!=w.encoding)if(0===w.encoding){var B=(r.pixels.numBytes-1)/4;if(B!==Math.floor(B))throw"uncompressed block has invalid length";v=new ArrayBuffer(4*B),new Uint8Array(v).set(new Uint8Array(t,n,4*B));for(var V=new Float32Array(v),D=0;D<V.length;D++)d=Math.min(d,V[D]);w.rawData=V,n+=4*B}else if(1===w.encoding){var I=Math.ceil(w.numValidPixels*w.bitsPerPixel/8),U=Math.ceil(I/4);v=new ArrayBuffer(4*U),new Uint8Array(v).set(new Uint8Array(t,n,I)),w.stuffedData=new Uint32Array(v),n+=I}}else n++,d=Math.min(d,0)}return r.pixels.minValue=d,r.eofOffset=n,r},c=function(t,n,e,r,a,i,o){var u,s,c,l=(1<<n)-1,f=0,h=0,m=Math.ceil((o-r)/a),M=4*t.length-Math.ceil(n*e/8);for(t[t.length-1]<<=8*M,u=0;u<e;u++){if(0===h&&(c=t[f++],h=32),h>=n)s=c>>>h-n&l,h-=n;else{var d=n-h;s=(c&l)<<d&l,s+=(c=t[f++])>>>(h=32-d)}i[u]=s<m?r+s*a:o}return i};const l=a.decode;class f{_decode(t){const n=l(t.buffer,t.options);return Promise.resolve({result:n,transferList:[n.pixelData.buffer]})}}function h(){return new f}}}]);