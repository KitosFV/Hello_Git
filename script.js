var mem = 0;
var disp = 0;
var eq = [];
var ans = 0;

function display(c){//displays result on "screen"
  disp=c;
  document.getElementById("display").innerHTML=disp;
}

function solve(a){
  var last = a[a.length()-1];
  switch(last){
    case("="):{

    }
    case("sqrt"):{
      ans = Math.sqrt(a[a.length()-2]);
      a.pop();
      a.pop();
      a.push(ans);
      display(ans);
    }
  }
}

function pressCount(a){
  display((disp*10)+a);
  eq.push(a);
}

function pressOp(a){
  eq.push(a);
  solve(eq);
}