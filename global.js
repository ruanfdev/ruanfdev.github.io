function renderOnCanvas(t){osc.noFill(),osc.strokeWeight(3),osc.textAlign(CENTER),osc.textBaseline(MIDDLE),osc.textFont(config.fontFamily),osc.textSize(windowWidth/windowHeight*FONT_SIZE),osc.text(t,windowWidth/2,windowHeight/2,windowWidth,100)}function getPixelCoords(){let t=gridY=3,e=windowWidth,l=windowHeight,n=[],g=osc.ctx.getImageData(0,0,e,l),o=new Int32Array(g.data.buffer);for(let a=0;a<e;a+=t)for(let r=0;r<l;r+=gridY)o[a+r*e]&&n.push({x:a,y:r});for(;n.length>particles.length;){let $=new Point(particles[randomInt(0,particles.length-1)].pos.x,particles[randomInt(0,particles.length-1)].pos.y,"rgba(255,255,255,0.9)",!0);particles.push($)}let h=particles.length-n.length;for(let i=0;i<particles.length;i++){let f=particles[i];if(f.active&&f.reset(),i>h)for(let s=0;s<n.length;s++)f.blast(),f.setTarget(n[(i+s)%n.length].x,n[(i+s)%n.length].y),f.color="rgba(255,255,255,0.9)",f.active=!0}}