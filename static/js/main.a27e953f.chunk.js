(this.webpackJsonpt2=this.webpackJsonpt2||[]).push([[0],{235:function(o,i,t){},237:function(o,i,t){},242:function(o,i){},243:function(o,i){},251:function(o,i){},255:function(o,i,t){"use strict";t.r(i);var n=t(67),e=t.n(n),s=t(209),p=t.n(s),y=(t(235),t(5)),c=t.n(y),k=t(10),l=t(11),r=(t.p,t(237),t.p+"static/media/img1.6573acd5.jpg"),x=t.p+"static/media/img2.537bd2a0.jpg",a=t(230),d=t(229),u=t(44);function h(o){return m.apply(this,arguments)}function m(){return(m=Object(l.a)(c.a.mark((function o(i){var t,n;return c.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,a.a();case 2:return t=o.sent,o.next=5,t.estimateSinglePose(i);case 5:return n=o.sent,o.abrupt("return",n);case 7:case"end":return o.stop()}}),o)})))).apply(this,arguments)}var v={customWeight:{mode:"multiply",scores:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}};var T=function(){var o=Object(n.useState)(0),i=Object(k.a)(o,2),t=i[0],e=i[1],s=Object(n.useRef)(null),p=Object(n.useRef)(null);return Object(n.useEffect)((function(){var o=document.getElementById("pose1"),i=document.getElementById("pose2");Promise.all([h(o),h(i)]).then((function(o){var i=s.current;i.width=i.clientWidth,i.height=i.clientHeight;var t=p.current;t.width=t.clientWidth,t.height=t.clientHeight;for(var n=[i.getContext("2d"),t.getContext("2d")],y=0;y<2;y++)n[y].beginPath(),n[y].strokeStyle="#FF00FF",n[y].lineWidth=2,n[y].moveTo(o[y].keypoints[0].position.x,o[y].keypoints[0].position.y),n[y].lineTo(o[y].keypoints[1].position.x,o[y].keypoints[1].position.y),n[y].moveTo(o[y].keypoints[1].position.x,o[y].keypoints[1].position.y),n[y].lineTo(o[y].keypoints[2].position.x,o[y].keypoints[2].position.y),n[y].moveTo(o[y].keypoints[2].position.x,o[y].keypoints[2].position.y),n[y].lineTo(o[y].keypoints[0].position.x,o[y].keypoints[0].position.y),n[y].moveTo(o[y].keypoints[1].position.x,o[y].keypoints[1].position.y),n[y].lineTo(o[y].keypoints[2].position.x,o[y].keypoints[2].position.y),n[y].moveTo(o[y].keypoints[3].position.x,o[y].keypoints[3].position.y),n[y].lineTo(o[y].keypoints[4].position.x,o[y].keypoints[4].position.y),n[y].moveTo(o[y].keypoints[5].position.x,o[y].keypoints[5].position.y),n[y].lineTo(o[y].keypoints[6].position.x,o[y].keypoints[6].position.y),n[y].moveTo(o[y].keypoints[5].position.x,o[y].keypoints[5].position.y),n[y].lineTo(o[y].keypoints[7].position.x,o[y].keypoints[7].position.y),n[y].moveTo(o[y].keypoints[7].position.x,o[y].keypoints[7].position.y),n[y].lineTo(o[y].keypoints[9].position.x,o[y].keypoints[9].position.y),n[y].moveTo(o[y].keypoints[6].position.x,o[y].keypoints[6].position.y),n[y].lineTo(o[y].keypoints[8].position.x,o[y].keypoints[8].position.y),n[y].moveTo(o[y].keypoints[8].position.x,o[y].keypoints[8].position.y),n[y].lineTo(o[y].keypoints[10].position.x,o[y].keypoints[10].position.y),n[y].moveTo(o[y].keypoints[11].position.x,o[y].keypoints[11].position.y),n[y].lineTo(o[y].keypoints[12].position.x,o[y].keypoints[12].position.y),n[y].moveTo(o[y].keypoints[11].position.x,o[y].keypoints[11].position.y),n[y].lineTo(o[y].keypoints[5].position.x,o[y].keypoints[5].position.y),n[y].moveTo(o[y].keypoints[12].position.x,o[y].keypoints[12].position.y),n[y].lineTo(o[y].keypoints[6].position.x,o[y].keypoints[6].position.y),n[y].moveTo(o[y].keypoints[11].position.x,o[y].keypoints[11].position.y),n[y].lineTo(o[y].keypoints[13].position.x,o[y].keypoints[13].position.y),n[y].moveTo(o[y].keypoints[13].position.x,o[y].keypoints[13].position.y),n[y].lineTo(o[y].keypoints[15].position.x,o[y].keypoints[15].position.y),n[y].moveTo(o[y].keypoints[12].position.x,o[y].keypoints[12].position.y),n[y].lineTo(o[y].keypoints[14].position.x,o[y].keypoints[14].position.y),n[y].moveTo(o[y].keypoints[14].position.x,o[y].keypoints[14].position.y),n[y].lineTo(o[y].keypoints[16].position.x,o[y].keypoints[16].position.y),n[y].stroke();var c=Object(d.poseSimilarity)(o[0],o[1],v);console.log(c);var k=100-100*c;console.log(k),e(k)}))})),Object(u.jsxs)("div",{className:"App",children:[0==t?Object(u.jsx)("h1",{children:"\uc5f0\uc0b0\uc911\uc785\ub2c8\ub2e4."}):Object(u.jsxs)("h1",{children:["\uc720\uc0ac\ub3c4 : ",t]}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsxs)("div",{style:{},children:[Object(u.jsx)("canvas",{width:"500",height:"1000",style:{position:"absolute",zIndex:9},ref:s}),Object(u.jsx)("img",{src:r,id:"pose1",width:"500",style:{zIndex:1}})]}),Object(u.jsxs)("div",{style:{flex:1},children:[Object(u.jsx)("canvas",{width:"500",height:"1000",style:{position:"absolute",zIndex:9},ref:p}),Object(u.jsx)("img",{src:x,id:"pose2",width:"500",style:{zIndex:1}})]})]})]})},j=function(o){o&&o instanceof Function&&t.e(3).then(t.bind(null,256)).then((function(i){var t=i.getCLS,n=i.getFID,e=i.getFCP,s=i.getLCP,p=i.getTTFB;t(o),n(o),e(o),s(o),p(o)}))};p.a.render(Object(u.jsx)(e.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root")),j()}},[[255,1,2]]]);
//# sourceMappingURL=main.a27e953f.chunk.js.map