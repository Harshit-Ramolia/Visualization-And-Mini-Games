(this.webpackJsonpvisulisationandgames=this.webpackJsonpvisulisationandgames||[]).push([[0],{78:function(e,t,r){},90:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(11),i=r.n(c),s=(r(78),r(128)),o=r(17),j=r(13),l=r(8),u=r(130),b=r(119),d=r(120),h=r(121),O=r(116),f=r(92);var x=function(e){return 2===e?"#E8554E":4===e?"#F19C65":8===e?"#FFD265":16===e?"#2AA876":32===e?"#0A7B83":64===e?"#8916E5":128===e?"#FF4401":"#FEBFCA"},p=r(2),g=Object(O.a)((function(e){return{box:{height:400,width:400,"@media (max-width: 720px)":{height:80,width:80},position:"relative",background:"whitesmoke"},piece:{display:"flex",justifyContent:"center",alignItems:"center",margin:"10px",height:80,width:80,background:"teal",color:"white",fontSize:"40px"}}}));function m(e){var t=e.grid,r=g();return Object(p.jsx)(a.a.Fragment,{children:Object(p.jsx)(u.a,{align:"center",children:Object(p.jsx)(f.a,{className:r.box,children:[0,1,2,3].map((function(e){return Object(p.jsx)(a.a.Fragment,{children:[0,1,2,3].map((function(n){return Object(p.jsx)(a.a.Fragment,{children:0!==t[e][n]?Object(p.jsx)(f.a,{className:r.piece,style:{position:"absolute",top:100*e,left:100*n,background:x(t[e][n])},children:t[e][n]}):Object(p.jsx)(f.a,{className:r.piece,style:{position:"absolute",top:100*e,left:100*n,background:"rgba(50,50,50,0.1)"},elevation:0})})}))})}))})})})}var v=r(7);var y=function(e){for(var t=e.grid,r=e.setGrid,n=function(){var e=Math.floor(4*Math.random()),n=Math.floor(4*Math.random());return 0!==t[e][n]?"continue":(r((function(t){var r=Object(v.a)(t.map((function(e){return e.slice()})));return r[e][n]=2,r})),"break")};;){var a=n();if("continue"!==a&&"break"===a)break}};var w=function(e){for(var t=e.grid,r=e.newGrid,n=0;n<4;n++)for(var a=0;a<4;a++)if(t[n][a]!==r[n][a])return!1;return!0};function k(e){for(var t=e.grid,r=e.setScore,n=Object(v.a)(t.map((function(e){return e.slice()}))),a=Object(v.a)(Array(4).fill(0).map((function(){return new Array(4).fill(0)}))),c=0,i=0;i<4;i++){n[i]=Object(v.a)(n[i].filter((function(e){return 0!==e})));for(var s=n[i].length;s<4;s++)n[i].push(0);for(var o=0;o<4;o++)o>0&&n[i][o]===n[i][o-1]&&0!==n[i][o-1]&&1!==a[i][o-1]&&(n[i][o-1]=2*n[i][o-1],c+=n[i][o-1],n[i][o]=0,a[i][o-1]=1,a[i][o]=1);n[i]=Object(v.a)(n[i].filter((function(e){return 0!==e})));for(var j=n[i].length;j<4;j++)n[i].push(0)}return void 0!==r&&r((function(e){return e+c})),Object(v.a)(n.map((function(e){return e.slice()})))}function S(e){var t=e.grid,r=e.setScore,n=Object(v.a)(t.map((function(e){return e.slice()})));return n.map((function(e){return e.reverse()})),(n=k({grid:n,setScore:r})).map((function(e){return e.reverse()})),Object(v.a)(n.map((function(e){return e.slice()})))}function A(e){for(var t=e.grid,r=(e.setScore,Object(v.a)(Array(4).fill(0).map((function(){return new Array(4).fill(0)})))),n=0;n<4;n++)for(var a=0;a<4;a++)r[n][a]=t[a][t[n].length-1-n];return Object(v.a)(r.map((function(e){return e.slice()})))}function C(e){for(var t=e.grid,r=(e.setScore,Object(v.a)(Array(4).fill(0).map((function(){return new Array(4).fill(0)})))),n=0;n<4;n++)for(var a=0;a<4;a++)r[n][a]=t[t[n].length-1-a][n];return Object(v.a)(r.map((function(e){return e.slice()})))}function E(e){var t=e.grid,r=e.setScore,n=C({grid:t});return A({grid:n=k({grid:n,setScore:r})})}function F(e){var t=e.grid,r=e.setScore,n=A({grid:t});return C({grid:n=k({grid:n,setScore:r})})}var V=function(e){for(var t=e.grid,r=0;r<4;r++)for(var n=0;n<4;n++)if(2048===t[r][n])return 2;return w({newGrid:k({grid:t}),grid:t})&&w({newGrid:E({grid:t}),grid:t})&&w({newGrid:F({grid:t}),grid:t})&&w({newGrid:S({grid:t}),grid:t})?1:0};function B(){var e=Object(n.useState)(new Array(4).fill(0).map((function(){return new Array(4).fill(0)}))),t=Object(l.a)(e,2),r=t[0],c=t[1],i=Object(n.useState)(!0),s=Object(l.a)(i,2),j=s[0],O=s[1],f=Object(n.useState)(0),x=Object(l.a)(f,2),g=x[0],v=x[1],A=Object(n.useState)(0),C=Object(l.a)(A,2),B=C[0],I=C[1];Object(n.useEffect)((function(){y({grid:r,setGrid:c})}),[]),Object(n.useEffect)((function(){y({grid:r,setGrid:c})}),[j]);var M=function(e){var t;if(!g){switch(e.key){case"ArrowLeft":t=k({grid:r,setScore:I}),w({grid:r,newGrid:t})||(c(t),O((function(e){return!e})));break;case"ArrowUp":t=F({grid:r,setScore:I}),w({grid:r,newGrid:t})||(c(t),O((function(e){return!e})));break;case"ArrowRight":t=S({grid:r,setScore:I}),w({grid:r,newGrid:t})||(c(t),O((function(e){return!e})));break;case"ArrowDown":t=E({grid:r,setScore:I}),w({grid:r,newGrid:t})||(c(t),O((function(e){return!e})))}v(V({grid:r}))}};return Object(n.useEffect)((function(){return document.addEventListener("keydown",M),function(){document.removeEventListener("keydown",M)}})),Object(p.jsx)(a.a.Fragment,{children:Object(p.jsx)(u.a,{p:5,align:"center",children:Object(p.jsxs)(b.a,{maxWidth:"sm",children:[Object(p.jsx)(d.a,{variant:"h4",children:"2048"}),Object(p.jsx)(u.a,{p:2}),Object(p.jsx)(d.a,{variant:"h5",children:"Score = ".concat(B)}),Object(p.jsx)(d.a,{variant:"h5",children:1===g?"You lost":1===g?"You Won":""}),Object(p.jsx)(u.a,{p:2}),Object(p.jsx)(m,{grid:r}),Object(p.jsx)(o.b,{to:"/",children:Object(p.jsx)(h.a,{color:"primary",style:{margin:"10px"},children:"<= Home"})})]})})})}var I=function(e,t,r){var n=[];for(r(Math.floor(100*Math.random())+1);n.length<15;){var a=Math.floor(100*Math.random())+1;-1===n.indexOf(a)&&n.push(a)}n.sort((function(e,t){return e>t})),e([].concat(n)),t([].concat(n))},M=Object(O.a)((function(e){return{box:{width:"30px",height:"30px",border:"1px solid black",display:"inline-block",margin:"10px"}}}));function N(e){var t=e.arr,r=e.color,n=e.didWin,c=e.isEnded,i=M();return Object(p.jsx)(a.a.Fragment,{children:t.map((function(e,t){return Object(p.jsx)(f.a,{className:i.box,style:{background:r===t?n&&c?"lightGreen":"antiquewhite":""},children:e})}))})}var G=function(e,t,r){for(var n=0,a=e.length-1,c=[];n<=a;){var i=Math.floor((n+a)/2);if(c.push(i),e[i]===t){r(!0);break}e[i]<t?n=i+1:a=i-1}return[].concat(c)};var L=function(e,t){for(var r=[],n=0;n<e.length&&(r.push(n),!(e[n]>=t));n++);return[].concat(r)},P=r(21),W=r.n(P),z=r(31);function D(){return(D=Object(z.a)(W.a.mark((function e(t){var r,n,a,c,i,s,o,j,l;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.progressValueBinarySearch,n=t.progressValueLinearSearch,a=t.setColorBinary,c=t.setColorLinear,i=t.setIsBinaryEnded,s=t.setIsLinearEnded,(o=t.setInProgress)(!0),i(!1),s(!1),j=Math.max(r.length,n.length)-1,l=0;case 6:if(!(l<j+1)){e.next=14;break}return l>r.length-1?i(!0):a(r[l]),l>n.length-1?s(!0):c(n[l]),e.next=11,new Promise((function(e){return setTimeout(e,300)}));case 11:l++,e.next=6;break;case 14:i(!0),s(!0),o(!1);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=function(e){return D.apply(this,arguments)};function T(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),r=t[0],c=t[1],i=Object(n.useState)([]),s=Object(l.a)(i,2),j=s[0],O=s[1],f=Object(n.useState)(null),x=Object(l.a)(f,2),g=x[0],m=x[1],v=Object(n.useState)(null),y=Object(l.a)(v,2),w=y[0],k=y[1],S=Object(n.useState)(!1),A=Object(l.a)(S,2),C=A[0],E=A[1],F=Object(n.useState)(!1),V=Object(l.a)(F,2),B=V[0],M=V[1],P=Object(n.useState)(!1),W=Object(l.a)(P,2),z=W[0],D=W[1],T=Object(n.useState)(!1),R=Object(l.a)(T,2),Y=R[0],J=R[1],q=Object(n.useState)(1),U=Object(l.a)(q,2),_=U[0],K=U[1],Q=Object(n.useState)(!1),X=Object(l.a)(Q,2),Z=X[0],$=X[1];Object(n.useEffect)((function(){I(c,O,K),m(null),k(null),M(!1),D(!1),J(!1)}),[Z]);return Object(p.jsx)(a.a.Fragment,{children:Object(p.jsx)(u.a,{p:5,align:"center",children:Object(p.jsxs)(b.a,{maxWidth:"lg",children:[Object(p.jsx)(d.a,{variant:"h4",children:"Binary Search Vs. Linear Search"}),Object(p.jsx)(u.a,{p:2}),Object(p.jsxs)(d.a,{variant:"h6",children:["Searching for ",_]}),Object(p.jsx)(u.a,{p:2}),Object(p.jsx)(d.a,{variant:"h6",children:"Binary Search"}),Object(p.jsx)(N,{arr:r,color:g,didWin:Y,isEnded:B}),Object(p.jsx)(d.a,{variant:"h6",children:"Linear Search"}),Object(p.jsx)(N,{arr:j,color:w,didWin:Y,isEnded:z}),Object(p.jsxs)(d.a,{children:[" ",B||z?Y?"Found The Number":"Number is not present in Array":""," "]}),Object(p.jsx)(u.a,{p:2}),Object(p.jsx)(h.a,{onClick:function(){return $((function(e){return!e}))},variant:"outlined",color:"secondary",style:{margin:"10px"},disabled:C,children:"Regenerate"}),Object(p.jsx)(h.a,{variant:"outlined",color:"primary",style:{margin:"10px"},onClick:function(){var e=G(r,_,J),t=L(j,_);H({progressValueBinarySearch:e,progressValueLinearSearch:t,setColorBinary:m,setColorLinear:k,setIsBinaryEnded:M,setIsLinearEnded:D,setInProgress:E})},disabled:C,children:"Visualize"}),Object(p.jsx)(u.a,{}),Object(p.jsx)(o.b,{to:"/",children:Object(p.jsx)(h.a,{color:"primary",style:{margin:"10px"},children:"<= Home"})})]})})})}var R=r(122),Y=r(123),J=r(124),q=r(125);function U(){return Object(p.jsx)("div",{children:Object(p.jsxs)(b.a,{maxWidth:"lg",style:{padding:"20px 0"},children:[Object(p.jsx)(d.a,{variant:"h3",align:"center",children:"Algorithm Visualizations and Mini Games"}),Object(p.jsx)("a",{href:"https://www.linkedin.com/in/harshit-ramolia/",target:"_blank",rel:"noreferrer",children:Object(p.jsx)(d.a,{align:"center",variant:"body1",style:{fontSize:"20px"},children:"-Harshit Ramolia"})}),Object(p.jsx)(u.a,{p:2}),Object(p.jsxs)(R.a,{container:!0,spacing:3,children:[Object(p.jsx)(R.a,{item:!0,xs:12,sm:3,children:Object(p.jsx)(Y.a,{children:Object(p.jsx)(o.b,{to:"/sudoku",children:Object(p.jsxs)(J.a,{children:[Object(p.jsx)("img",{src:"sudoku.png",alt:"sudoku",style:{width:"100%"}}),Object(p.jsx)(q.a,{children:Object(p.jsx)(d.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"center",children:"Sudoku Solution Visualizer"})})]})})})}),Object(p.jsx)(R.a,{item:!0,xs:12,sm:3,children:Object(p.jsx)(Y.a,{children:Object(p.jsx)(o.b,{to:"/binarysearch",children:Object(p.jsxs)(J.a,{children:[Object(p.jsx)("img",{src:"binarysearch.png",alt:"Binary Search",style:{width:"100%"}}),Object(p.jsx)(q.a,{children:Object(p.jsx)(d.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"center",children:"Binary Search Vs. Linear Search"})})]})})})}),Object(p.jsx)(R.a,{item:!0,xs:12,sm:3,children:Object(p.jsx)(Y.a,{children:Object(p.jsx)(o.b,{to:"/towerofhanoi",children:Object(p.jsxs)(J.a,{children:[Object(p.jsx)("img",{src:"tower.png",alt:"Tower Of Hanoi",style:{width:"100%"}}),Object(p.jsx)(q.a,{children:Object(p.jsx)(d.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"center",children:"Tower Of Hanoi"})})]})})})}),Object(p.jsx)(R.a,{item:!0,xs:12,sm:3,children:Object(p.jsx)(Y.a,{children:Object(p.jsx)(o.b,{to:"game2048",children:Object(p.jsxs)(J.a,{children:[Object(p.jsx)("img",{src:"2048.png",alt:"2048",style:{width:"100%"}}),Object(p.jsx)(q.a,{children:Object(p.jsx)(d.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"center",children:"2048"})})]})})})}),Object(p.jsx)(R.a,{item:!0,xs:12,sm:3,children:Object(p.jsx)(Y.a,{children:Object(p.jsx)(o.b,{to:"mergesort",children:Object(p.jsxs)(J.a,{children:[Object(p.jsx)("img",{src:"mergesort.png",alt:"Merge Sort",style:{width:"100%"}}),Object(p.jsx)(q.a,{children:Object(p.jsx)(d.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"center",children:"Merge Sort"})})]})})})})]})]})})}var _=Object(O.a)((function(e){return{box:{width:"30px",height:"30px",border:"1px solid black",display:"inline-block",margin:"10px"}}}));function K(e){var t=e.arr,r=e.isColor,n=_();return Object(p.jsx)(a.a.Fragment,{children:t.map((function(e,t){return Object(p.jsx)(f.a,{className:n.box,style:{background:1===r[t]?"lightgreen":""},children:e})}))})}var Q=function(e){for(var t=[];t.length<15;){var r=Math.floor(100*Math.random())+1;-1===t.indexOf(r)&&t.push(r)}e([].concat(t))},X=[];function Z(e,t,r){if(t<r){var n=Math.floor((t+r)/2);Z(e,t,n),Z(e,n+1,r),function(e,t,r,n){var a,c,i;a=t,c=n+1,i=t;for(var s=Array(e.length);a<=n&&c<=r;)e[a]<e[c]?s[i++]=e[a++]:s[i++]=e[c++];for(;a<=n;)s[i++]=e[a++];for(;c<=r;)s[i++]=e[c++];for(a=t;a<=r;a++)e[a]=s[a];X.push(Object(v.a)(e))}(e,t,r,n)}}var $=function(e){return X=[],Z(e,0,e.length-1),X},ee=r(40);function te(){return(te=Object(z.a)(W.a.mark((function e(t){var r,n,a,c,i,s,o;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.processes,n=t.setArray,a=t.setIsColor,(c=t.setInProgress)(!0),i=Object(ee.a)(r),e.prev=3,o=W.a.mark((function e(){var t,r;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.value,r=Array(t.length),n((function(e){for(var n=0;n<e.length;n++)e[n]!==t[n]?r[n]=1:r[n]=0;return Object(v.a)(t)})),a([].concat(r)),e.next=6,new Promise((function(e){return setTimeout(e,1e3)}));case 6:case"end":return e.stop()}}),e)})),i.s();case 6:if((s=i.n()).done){e.next=10;break}return e.delegateYield(o(),"t0",8);case 8:e.next=6;break;case 10:e.next=15;break;case 12:e.prev=12,e.t1=e.catch(3),i.e(e.t1);case 15:return e.prev=15,i.f(),e.finish(15);case 18:a(Object(v.a)(Array(r[0].length).fill(0))),c(!1);case 20:case"end":return e.stop()}}),e,null,[[3,12,15,18]])})))).apply(this,arguments)}var re=function(e){return te.apply(this,arguments)};function ne(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),r=t[0],c=t[1],i=Object(n.useState)([]),s=Object(l.a)(i,2),j=s[0],O=s[1],f=Object(n.useState)([]),x=Object(l.a)(f,2),g=x[0],m=x[1],y=Object(n.useState)(!1),w=Object(l.a)(y,2),k=w[0],S=w[1];Object(n.useEffect)((function(){Q(O)}),[r]);return Object(p.jsx)(a.a.Fragment,{children:Object(p.jsx)(u.a,{p:5,align:"center",children:Object(p.jsxs)(b.a,{maxWidth:"lg",children:[Object(p.jsx)(d.a,{variant:"h4",children:"Merge Sort"}),Object(p.jsx)(u.a,{p:2}),Object(p.jsx)(K,{arr:j,isColor:g}),Object(p.jsx)(u.a,{p:2}),Object(p.jsx)(h.a,{onClick:function(){return c((function(e){return!e}))},variant:"outlined",color:"secondary",style:{margin:"10px"},disabled:k,children:"Regenerate"}),Object(p.jsx)(h.a,{variant:"outlined",color:"primary",style:{margin:"10px"},onClick:function(){var e=$(Object(v.a)(j));re({processes:e,setArray:O,setIsColor:m,setInProgress:S})},disabled:k,children:"Visualize"}),Object(p.jsx)(u.a,{}),Object(p.jsx)(o.b,{to:"/",children:Object(p.jsx)(h.a,{color:"primary",style:{margin:"10px"},children:"<= Home"})})]})})})}var ae=r(126),ce=[];function ie(e,t,r,n){for(var a=0;a<9;a++)if(n[e][a]===r||n[a][t]===r)return!1;for(var c=0;c<3;c++)for(var i=0;i<3;i++)if(n[c+(e-e%3)][i+(t-t%3)]===r)return!1;return!0}function se(e,t,r){if(9===e)return!0;if(9===t)return se(e+1,0,r);if(0!==r[e][t])return se(e,t+1,r);for(var n=1;n<=9;n++)if(ie(e,t,n,r)){if(r[e][t]=n,ce.push(Object(v.a)(r.map((function(e){return e.slice()})))),se(e,t+1,r))return!0;r[e][t]=0,ce.push(Object(v.a)(r.map((function(e){return e.slice()}))))}return!1}var oe=function(e){return ce=[],se(0,0,e),ce};function je(){return(je=Object(z.a)(W.a.mark((function e(t){var r,n,a,c,i,s,o,j;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.processes,n=t.setSudokuValue,a=t.setInProgress,c=t.setProgressValue,a(!0),i=1,s=Object(ee.a)(r),e.prev=4,s.s();case 6:if((o=s.n()).done){e.next=15;break}return j=o.value,n(Object(v.a)(j)),e.next=11,new Promise((function(e){return setTimeout(e,1)}));case 11:c(100*(i+=1)/r.length);case 13:e.next=6;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),s.e(e.t0);case 20:return e.prev=20,s.f(),e.finish(20);case 23:a(!1);case 24:case"end":return e.stop()}}),e,null,[[4,17,20,23]])})))).apply(this,arguments)}var le=function(e){return je.apply(this,arguments)},ue=Object(O.a)((function(e){return{paper:{height:150,width:150,"@media (max-width: 720px)":{height:80,width:80}},paper2:{height:45,width:45,border:"1px solid rgba(0,0,0,0.5)","@media (max-width: 720px)":{height:20,width:20}},Display:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}}));function be(e){var t=e.sudokuValue,r=ue();return Object(p.jsx)(a.a.Fragment,{children:Object(p.jsx)(R.a,{container:!0,spacing:0,children:[0,1,2].map((function(e){return Object(p.jsx)(R.a,{item:!0,xs:12,children:Object(p.jsx)(R.a,{container:!0,justify:"center",spacing:0,children:[0,1,2].map((function(n){return Object(p.jsx)(R.a,{item:!0,children:Object(p.jsx)(f.a,{className:r.paper,children:Object(p.jsx)(R.a,{container:!0,spacing:0,children:[0,1,2].map((function(a){return Object(p.jsx)(R.a,{item:!0,xs:12,children:Object(p.jsx)(R.a,{container:!0,justify:"center",spacing:0,children:[0,1,2].map((function(c){return Object(p.jsx)(R.a,{item:!0,children:Object(p.jsx)(f.a,{className:r.paper2,elevation:0,children:Object(p.jsx)(R.a,{container:!0,spacing:0,className:r.Display,children:0!==t[3*e+a][3*n+c]?t[3*e+a][3*n+c]:" "})})},c)}))})},a)}))})})},n)}))})},e)}))})})}function de(){var e=Object(n.useState)(new Array(9).fill(0).map((function(){return new Array(9).fill(0)}))),t=Object(l.a)(e,2),r=t[0],c=t[1],i=Object(n.useState)(!1),s=Object(l.a)(i,2),j=s[0],O=s[1],f=Object(n.useState)(!1),x=Object(l.a)(f,2),g=x[0],m=x[1],v=Object(n.useState)(0),y=Object(l.a)(v,2),w=y[0],k=y[1];Object(n.useEffect)((function(){fetch("https://sugoku.herokuapp.com/board?difficulty=easy").then((function(e){return e.json()})).then((function(e){c(e.board)}))}),[j]);return Object(p.jsx)(a.a.Fragment,{children:Object(p.jsx)(u.a,{p:5,align:"center",children:Object(p.jsxs)(b.a,{maxWidth:"sm",children:[Object(p.jsx)(d.a,{variant:"h4",children:"Sudoku Solution Visualizer"}),Object(p.jsx)(u.a,{p:2}),Object(p.jsx)(ae.a,{variant:"determinate",value:w}),Object(p.jsx)(u.a,{p:2}),Object(p.jsx)(be,{sudokuValue:r}),Object(p.jsx)(h.a,{onClick:function(){return O((function(e){return!e}))},variant:"outlined",color:"secondary",style:{margin:"10px"},disabled:g,children:"Regenerate"}),Object(p.jsx)(h.a,{onClick:function(){var e=oe(r);le({processes:e,setSudokuValue:c,setInProgress:m,setProgressValue:k})},variant:"outlined",color:"primary",style:{margin:"10px"},disabled:g,children:"Visualize"}),Object(p.jsx)(u.a,{}),Object(p.jsx)(o.b,{to:"/",children:Object(p.jsx)(h.a,{color:"primary",style:{margin:"10px"},children:"<= Home"})})]})})})}var he=r(127),Oe=r(131),fe=r(129),xe=r(132),pe=(r(89),[[],[],[]]),ge=[];function me(e,t,r,n){if(1===e){var a=Object(v.a)(pe.map((function(e){return e.slice()})));return a[t]=a[t].filter((function(t){return t!==e})),a[r]=[e].concat(Object(v.a)(a[r])),pe=Object(v.a)(a.map((function(e){return e.slice()}))),void ge.push(pe)}me(e-1,t,n,r);var c=Object(v.a)(pe.map((function(e){return e.slice()})));c[t]=c[t].filter((function(t){return t!==e})),c[r]=[e].concat(Object(v.a)(c[r])),pe=Object(v.a)(c.map((function(e){return e.slice()}))),ge.push(pe),me(e-1,n,r,t)}var ve=function(e){return pe=[Object(v.a)(Array.from({length:e},(function(e,t){return t+1}))),[],[]],ge=[],me(e,0,2,1),ge};function ye(){return(ye=Object(z.a)(W.a.mark((function e(t){var r,n,a,c,i,s;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.processes,n=t.setDiskState,(a=t.setInProgress)(!0),c=Object(ee.a)(r),e.prev=3,c.s();case 5:if((i=c.n()).done){e.next=12;break}return s=i.value,n(Object(v.a)(s)),e.next=10,new Promise((function(e){return setTimeout(e,600)}));case 10:e.next=5;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),c.e(e.t0);case 17:return e.prev=17,c.f(),e.finish(17);case 20:a(!1);case 21:case"end":return e.stop()}}),e,null,[[3,14,17,20]])})))).apply(this,arguments)}var we=function(e){return ye.apply(this,arguments)},ke=Object(O.a)((function(e){return{box:{position:"relative",height:"100px",border:"2px solid red"},rod:{width:"10px",height:"100%",background:"rgb(0,0,84)",position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0},disk:{height:"10px",width:"80%",background:"yellow",position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0}}}));function Se(e){var t=e.noOfDisk,r=e.diskState,n=ke();return Object(p.jsx)("div",{children:Object(p.jsx)(R.a,{container:!0,children:r.map((function(e){return Object(p.jsxs)(R.a,{item:!0,xs:4,className:n.box,children:[Object(p.jsx)("div",{className:n.rod}),e.map((function(r,a){return Object(p.jsx)("div",{className:n.disk,style:{width:"".concat(80+10*(r-t),"%"),bottom:20*(e.length-a-1)}})}))]})}))})})}var Ae=Object(O.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120}}}));function Ce(){var e=Ae(),t=Object(n.useState)([[1,2,3],[],[]]),r=Object(l.a)(t,2),c=r[0],i=r[1],s=Object(n.useState)(!1),j=Object(l.a)(s,2),O=j[0],f=j[1],x=a.a.useState(3),g=Object(l.a)(x,2),m=g[0],y=g[1];return Object(p.jsx)(a.a.Fragment,{children:Object(p.jsx)(u.a,{p:5,align:"center",children:Object(p.jsxs)(b.a,{maxWidth:"sm",children:[Object(p.jsx)(d.a,{variant:"h4",children:"Tower Of Hanoi"}),Object(p.jsx)(u.a,{p:2}),Object(p.jsxs)(he.a,{className:e.formControl,children:[Object(p.jsx)(Oe.a,{id:"demo-simple-select-label",children:"No Of Disk"}),Object(p.jsxs)(fe.a,{disabled:O,labelId:"demo-simple-select-label",id:"demo-simple-select",value:m,onChange:function(e){y(e.target.value),i([Object(v.a)(Array.from({length:e.target.value},(function(e,t){return t+1}))),[],[]])},children:[Object(p.jsx)(xe.a,{value:3,children:"3"}),Object(p.jsx)(xe.a,{value:4,children:"4"}),Object(p.jsx)(xe.a,{value:5,children:"5"})]})]}),Object(p.jsx)(u.a,{p:2}),Object(p.jsx)(Se,{diskState:c,noOfDisk:m}),Object(p.jsx)(u.a,{p:2}),Object(p.jsx)(h.a,{onClick:function(){var e=ve(m);we({processes:e,setInProgress:f,setDiskState:i})},variant:"outlined",color:"primary",style:{margin:"10px"},disabled:O,children:"Visualize"}),Object(p.jsx)(u.a,{p:2}),Object(p.jsx)(o.b,{to:"/",children:Object(p.jsx)(h.a,{color:"primary",style:{margin:"10px"},children:"<= Home"})})]})})})}var Ee=function(){return Object(p.jsx)(a.a.Fragment,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(n.Suspense,{fallback:Object(p.jsx)(s.a,{color:"secondary",style:{position:"absolute",top:"50%",left:"50%"}}),children:Object(p.jsxs)(j.d,{children:[Object(p.jsx)(j.b,{path:"/",exact:!0,children:Object(p.jsx)(U,{})}),Object(p.jsx)(j.b,{path:"/sudoku",children:Object(p.jsx)(de,{})}),Object(p.jsx)(j.b,{path:"/game2048",children:Object(p.jsx)(B,{})}),Object(p.jsx)(j.b,{path:"/towerofhanoi",children:Object(p.jsx)(Ce,{})}),Object(p.jsx)(j.b,{path:"/binarySearch",children:Object(p.jsx)(T,{})}),Object(p.jsx)(j.b,{path:"/mergesort",children:Object(p.jsx)(ne,{})}),Object(p.jsx)(j.a,{to:"/"})]})})})})};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(Ee,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.0ebb7a3d.chunk.js.map