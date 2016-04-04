/*
 * Generates a star like net, useful as a background
 * by Dawid Czarnik
 * license: MIT 
 */

import {randInt, randCol} from './utils';


class Point {
  constructor({x, y}) {
    this.x = x;
    this.y = y;
  }
   
  // calc the distance between two points 
  distance(secondPoint) {
    return Math.sqrt(Math.pow(this.x - secondPoint.x, 2) + Math.pow(this.y - secondPoint.y, 2));
  }
  
  // for debugging 
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'black'
    ctx.fill();
  }
 
}

class Line {
  constructor(pointA, pointB, {color}) {
    this.A = pointA;
    this.B = pointB;
    this.color = color || 'black';
  }
  
  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.A.x, this.A.y);
    ctx.lineTo(this.B.x, this.B.y);
    ctx.stroke();
  }
}


export default function starify (container, width, height, divBy, asBg) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = width;
  canvas.height = height;
  
  var nPoints = Math.floor((canvas.width + canvas.height) / divBy);
  var points = [];
  var lines = [];

  for(var i = 0; i < nPoints; i++) {
    
    var newPoint = new Point({
      x: randInt(0, canvas.width),
      y: randInt(0, canvas.height)
    });
    
    
    for (var j = 0; j < points.length; j++) {
        var dist = Math.floor(points[j].distance(newPoint))
        
        ctx.globalAlpha = divBy / dist;
       
        if(dist < 50) {
          
          lines.push(new Line(
            points[j], newPoint, {
              color: Math.random() < 0.2 ? randCol() : 'white' // colorize ~20% of the lines
            }
          ));
          
          lines[lines.length - 1].draw(ctx);
          
        }
        
    }
    
    points.push(newPoint);
    
  }


  if(!asBg) {
    canvas.style.position = 'absolute';
    canvas.style.top = 0;
    canvas.style.left = 0;    
    container.appendChild(canvas);
  } else {
    container.style.backgroundPosition = '0 100%';
    container.style.backgroundImage = `url("${canvas.toDataURL()}")`;
  }


}