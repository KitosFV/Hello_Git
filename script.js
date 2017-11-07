var mem = 0;
var disp = 0;
var eq = [];
var ans = 0;

function display(eq){//displays result on "screen"
  disp=eq;
  document.getElementById("display").innerHTML=disp;
}

function solve(a){

}

function pressCount(a){
  display((disp*10)+a);
}

function pressOp(a){
  eq.push(a);
  solve(eq);
}