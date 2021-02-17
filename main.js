var mouseevent="empty";
var xlast,ylast;
var canvas=document.getElementById("myCanvas");
abc=canvas.getContext("2d");
var color="black";
var width=3;
canvas.addEventListener("mousedown",md);
function md(e){
      color=document.getElementById("color").value;
     width=document.getElementById("width").value;
     radius=document.getElementById("radius").value;
     mouseevent="mouseDown";
}
canvas.addEventListener("mouseup",mu);
function mu(e){
     mouseevent="mouseUP";

}
canvas.addEventListener("mouseleave",ml);
function ml(e){
     mouseevent="mouseleave";

}
canvas.addEventListener("mousemove",mm);
function mm(e){
     var newx=e.clientX-canvas.offsetLeft;
     var newy=e.clientY-canvas.offsetTop;

     if(mouseevent=="mouseDown"){
abc.beginPath();
abc.strokeStyle=color;
abc.lineWidth=width;
abc.arc(newx,newy,radius,0,2 * Math.PI);
abc.stroke();
     }
     xlast=newx;
     ylast=newy;
}
