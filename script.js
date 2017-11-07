var mem = 0;
var disp = 0;
var eq =[];

function CE(){
  disp=0;
  document.getElementById("display").innerHTML=disp;
}

function MRC(){
  mem=0;
}

function MR(){
  disp=mem;
  document.getElementById("display").innerHTML=disp;
}

function MP(){
  mem+=disp;
}

function MM(){
  mem-=disp;
}

function press(a){
  disp*=10;
  disp+=a;
  document.getElementById("display").innerHTML=disp;
}