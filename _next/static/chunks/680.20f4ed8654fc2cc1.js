(()=>{let e,t,a;let i=0,d=2,o=0;function r(e){let d=a.renderWidth,o=a.renderHeight,r=d/2,h=o/2,l=.32*Math.min(d,o),g=Math.round(2*Math.PI*l),s=a.renderWidth*a.squareSizeFactor,c=a.renderWidth*a.dotRadiusFactor,u=a.renderWidth*a.edgeThicknessFactor;for(let d=0;d<g;d++){let o=(d+e)%g/g*2*Math.PI,p=r+l*Math.cos(o),y=h+l*Math.sin(o),f=[n(-s/2,-s/2,i),n(s/2,-s/2,i),n(s/2,s/2,i),n(-s/2,s/2,i)];t.lineWidth=u,t.lineCap="round",t.lineJoin="round";for(let e=0;e<f.length;e++)t.strokeStyle=a.edgeColors[e],t.beginPath(),t.moveTo(p+f[e].x,y+f[e].y),t.lineTo(p+f[(e+1)%4].x,y+f[(e+1)%4].y),t.stroke();t.fillStyle=a.dotColor,f.forEach(e=>{t.beginPath(),t.arc(p+e.x,y+e.y,c,0,2*Math.PI),t.fill()})}}function n(e,t,a){return{x:e*Math.cos(a)-t*Math.sin(a),y:e*Math.sin(a)+t*Math.cos(a)}}self.onmessage=n=>{if("init"===n.data.type){let{width:h,height:l,cssColors:g,oversampling:s}=n.data;d=s||2,function(n,h,l){(t=(e=new OffscreenCanvas(n*d,h*d)).getContext("2d",{willReadFrequently:!0})).imageSmoothingEnabled=!0,t.imageSmoothingQuality="high",a={displayWidth:n,displayHeight:h,renderWidth:n*d,renderHeight:h*d,edgeColors:[l["--red-500"],l["--blue-500"],l["--green-500"],l["--purple-500"]],rotationSpeed:.01,squareSizeFactor:.16,dotRadiusFactor:.05,edgeThicknessFactor:.09375,backgroundColor:l["--gray-100"],dotColor:l["--gray-900"]},o=performance.now(),function d(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:performance.now(),h=n-o;if(h>=33.333333333333336){t.clearRect(0,0,e.width,e.height),t.fillStyle=a.backgroundColor,t.fillRect(0,0,e.width,e.height),r(0);let d=t.getImageData(0,0,e.width/2,e.height);r(Math.round(2*Math.PI*(.32*a.renderWidth))/2);let l=t.getImageData(e.width/2,0,e.width/2,e.height);t.putImageData(d,0,0),t.putImageData(l,e.width/2,0);let g=new OffscreenCanvas(a.displayWidth,a.displayHeight).getContext("2d");g.drawImage(e,0,0,e.width,e.height,0,0,a.displayWidth,a.displayHeight);let s=g.getImageData(0,0,a.displayWidth,a.displayHeight);i+=a.rotationSpeed*(h/33.333333333333336),self.postMessage({type:"frame",imageData:{data:s.data,width:a.displayWidth,height:a.displayHeight}},[s.data.buffer]),o=n}requestAnimationFrame(d)}()}(h,l,g)}else"updateColors"===n.data.type&&function(e){a.edgeColors=[e["--red-500"],e["--blue-500"],e["--green-500"],e["--purple-500"]],a.backgroundColor=e["--gray-100"],a.dotColor=e["--gray-900"]}(n.data.cssColors)},_N_E={}})();