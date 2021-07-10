(this["webpackJsonphaunted-house"]=this["webpackJsonphaunted-house"]||[]).push([[0],{34:function(e,t,r){},35:function(e,t,r){"use strict";r.r(t);var a=r(6),n=r(21),o=r.n(n),s=r(10),c=r(38),i=r(11),u=r(7),j=function(e){var t=e.scale,r=e.position,n=Object(a.useRef)();return Object(a.useEffect)((function(){var e,a;(e=n.current.scale).set.apply(e,Object(i.a)(t)),(a=n.current.position).set.apply(a,Object(i.a)(r))}),[t,r]),Object(u.jsxs)("mesh",{ref:n,castShadow:!0,children:[Object(u.jsx)("sphereBufferGeometry",{}),Object(u.jsx)("meshStandardMaterial",{color:"#89c854"})]})},p=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{scale:[.5,.5,.5],position:[.8,.2,2.2]}),Object(u.jsx)(j,{scale:[.25,.25,.25],position:[1.4,.1,2.1]}),Object(u.jsx)(j,{scale:[.4,.4,.4],position:[-.8,.1,2.2]}),Object(u.jsx)(j,{scale:[.15,.15,.15],position:[-1,.05,2.6]})]})},f=r(5),h=function(){var e=Object(a.useRef)();Object(a.useEffect)((function(){e.current.position.y=1,e.current.position.z=2.01,e.current.geometry.setAttribute("uv2",new f.Float32BufferAttribute(e.current.geometry.attributes.uv.array,2))}),[]);var t=new f.TextureLoader,r=t.load("/textures/door/color.jpg"),n=t.load("/textures/door/alpha.jpg"),o=t.load("/textures/door/ambientOcclusion.jpg"),s=t.load("/textures/door/height.jpg"),c=t.load("/textures/door/normal.jpg"),i=t.load("/textures/door/metalness.jpg"),j=t.load("/textures/door/roughtness.jpg");return Object(u.jsxs)("mesh",{ref:e,children:[Object(u.jsx)("planeBufferGeometry",{args:[2.2,2.2,100,100]}),Object(u.jsx)("meshStandardMaterial",{map:r,transparent:!0,alphaMap:n,aoMap:o,displacementMap:s,displacementScale:.1,normalMap:c,metalnessMap:i,roughnessMap:j})]})},d=function(){var e=Object(a.useRef)();return Object(a.useEffect)((function(){e.current.shadow.mapSize.width=256,e.current.shadow.mapSize.height=256,e.current.shadow.camera.far=7}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("pointLight",{ref:e,args:["#ff7d46",1,7],position:[0,2.2,2.7],castShadow:!0})})},b=function(){var e=Object(a.useRef)(),t=new f.TextureLoader,r=t.load("/textures/grass/color.jpg"),n=t.load("/textures/grass/ambientOcclusion.jpg"),o=t.load("/textures/grass/normal.jpg"),s=t.load("/textures/grass/roughness.jpg");return r.repeat.set(8,8),n.repeat.set(8,8),o.repeat.set(8,8),s.repeat.set(8,8),r.wrapS=f.RepeatWrapping,n.wrapS=f.RepeatWrapping,o.wrapS=f.RepeatWrapping,s.wrapS=f.RepeatWrapping,r.wrapT=f.RepeatWrapping,n.wrapT=f.RepeatWrapping,o.wrapT=f.RepeatWrapping,s.wrapT=f.RepeatWrapping,Object(a.useEffect)((function(){e.current.geometry.setAttribute("uv2",new f.Float32BufferAttribute(e.current.geometry.attributes.uv.array,2)),e.current.rotation.x=.5*-Math.PI,e.current.position.y=0}),[]),Object(u.jsxs)("mesh",{ref:e,receiveShadow:!0,children:[Object(u.jsx)("planeBufferGeometry",{args:[20,20]}),Object(u.jsx)("meshStandardMaterial",{map:r,aoMap:n,normalMap:o,roughnessMap:s})]})},l=function(){var e=Object(a.useRef)();return Object(a.useEffect)((function(){e.current.position.y=3,e.current.rotation.y=.25*Math.PI}),[]),Object(u.jsxs)("mesh",{ref:e,children:[Object(u.jsx)("coneBufferGeometry",{args:[3.5,1,4]}),Object(u.jsx)("meshStandardMaterial",{color:"#b35f45"})]})},O=function(){var e=Object(a.useRef)(),t=new f.TextureLoader,r=t.load("/textures/bricks/color.jpg"),n=t.load("/textures/bricks/ambientOcclusion.jpg"),o=t.load("/textures/bricks/normal.jpg"),s=t.load("/textures/bricks/roughness.jpg");return Object(a.useEffect)((function(){e.current.position.y=1.25,e.current.geometry.setAttribute("uv2",new f.Float32BufferAttribute(e.current.geometry.attributes.uv.array,2))}),[]),Object(u.jsxs)("mesh",{ref:e,castShadow:!0,children:[Object(u.jsx)("boxBufferGeometry",{args:[4,2.5,4]}),Object(u.jsx)("meshStandardMaterial",{map:r,aoMap:n,normalMap:o,roughnessMap:s})]})},g=function(){return Object(u.jsxs)("group",{children:[Object(u.jsx)(b,{}),Object(u.jsx)(O,{}),Object(u.jsx)(l,{}),Object(u.jsx)(h,{}),Object(u.jsx)(p,{}),Object(u.jsx)(d,{})]})},x=r(12),m=function(e){var t=e.position,r=e.rotationY,n=e.rotationZ,o=Object(a.useRef)();return Object(a.useEffect)((function(){var e;(e=o.current.position).set.apply(e,Object(i.a)(t)),o.current.rotation.y=r,o.current.rotation.z=n,o.current.castShadow=!0}),[t,r,n]),Object(u.jsxs)("mesh",{ref:o,castShadow:!0,children:[Object(u.jsx)("boxBufferGeometry",{args:[.6,.8,.2]}),Object(u.jsx)("meshStandardMaterial",{color:"#b2b6b1"})]})},w=function(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),r=t[0],n=t[1];return Object(a.useEffect)((function(){for(var e=[],t=0;t<50;t++){var r=Math.random()*Math.PI*2,a=3+6*Math.random(),o=Math.sin(r)*a,s=Math.cos(r)*a;e.push({position:[o,.3,s],rotationY:.4*(Math.random()-.5),rotationZ:.4*(Math.random()-.5)})}n(e)}),[]),Object(u.jsx)("group",{castShadow:!0,receiveShadow:!0,children:r.length>0?r.map((function(e,t){return Object(u.jsx)(m,{position:e.position,rotationY:e.rotationY,rotationZ:e.rotationZ},t)})):null})},M=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),r=Object(a.useRef)();Object(a.useEffect)((function(){e.current.shadow.mapSize.width=256,e.current.shadow.mapSize.height=256,e.current.shadow.camera.far=7,t.current.shadow.mapSize.width=256,t.current.shadow.mapSize.height=256,t.current.shadow.camera.far=7,r.current.shadow.mapSize.width=256,r.current.shadow.mapSize.height=256,r.current.shadow.camera.far=7}),[]);var n=new f.Clock;return Object(s.b)((function(){var a=n.getElapsedTime(),o=.5*a;e.current.position.x=4*Math.cos(o),e.current.position.z=4*Math.sin(o),e.current.position.y=Math.sin(3*a);var s=.32*a;t.current.position.x=5*Math.cos(s),t.current.position.z=5*Math.sin(s),t.current.position.y=Math.sin(4*a)+Math.sin(2.5*a);var c=.18*a;r.current.position.x=Math.cos(c)*(7+Math.sin(.32*a)),r.current.position.z=Math.sin(c)*(7+Math.sin(.32*a)),r.current.position.y=Math.sin(5*a)+Math.sin(2*a)})),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("pointLight",{ref:e,args:["#ff00ff",2,3]}),Object(u.jsx)("pointLight",{ref:t,args:["#00ffff",2,3]}),Object(u.jsx)("pointLight",{ref:r,args:["#ffff00",2,3]})]})},y=(r(34),new(r(26).a)),v=function(){var e=Object(a.useRef)(),t=Object(a.useRef)();return Object(a.useEffect)((function(){setTimeout((function(){y.addFolder("Ambient Light").add(e.current,"intensity",0,1,.001);var r=y.addFolder("Moon Light");r.add(t.current,"intensity").min(0).max(1).step(.001),r.add(t.current.position,"x",-5,5,.001),r.add(t.current.position,"y",-5,5,.001),r.add(t.current.position,"z",-5,5,.001)}),1e3)}),[]),Object(u.jsxs)(s.a,{camera:{fov:75,aspect:window.innerWidth/window.innerHeight,near:.1,far:100,position:[4,2,5]},shadows:!0,children:[Object(u.jsx)("color",{attach:"background",args:["#262837"]}),Object(u.jsx)("fog",{attach:"fog",args:["#262837",1,15]}),Object(u.jsx)("ambientLight",{ref:function(t){return e.current=t},color:"#b9d5ff",intensity:.12}),Object(u.jsx)("directionalLight",{ref:t,color:"#b9d5ff",intensity:.12,position:[4,5,-2],castShadow:!0}),Object(u.jsx)(c.a,{}),Object(u.jsx)(g,{}),Object(u.jsx)(w,{}),Object(u.jsx)(M,{})]})};o.a.render(Object(u.jsx)(v,{}),document.querySelector("#root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.a5ecfc6e.chunk.js.map