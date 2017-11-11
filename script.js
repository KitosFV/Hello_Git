var mem = 0;
var disp = 0;
var eq = [];
var ans = 0;
var ad = -1;
var pr = ["*","/","mod","+","-"];

function display(c){//displays result on "screen"
  disp=c;
  document.getElementById("display").innerHTML=disp;
}

function solve(a){
  var last = eq[eq.length-1];
  switch(last){
    case("="):{
      eq.pop;
      for(var i=0;i<5;i++){
        while(eq.indexOf(pr[i])!=-1){
          var smEq = [eq[eq.indexOf(pr[i])-1],eq.indexOf(pr[i]),eq.indexOf(pr[i]+1)];
          switch(pr[i]){
            case("*"):{
              ans = smEq[0]*smEq[2];
            }
            case("/"):{
              ans = smEq[0]/smEq[2];
            }
            case("+"):{
              ans = smEq[0]+smEq[2];
            }
            case("-"):{
              ans = smEq[0]-smEq[2];
            }
            case("mod"):{
              ans = smEq[0]%smEq[2];
            }
          }
          eq[eq.indexOf(pr[i])]=ans;
          delete eq[eq.indexOf(pr[i])+1];
          delete eq[eq.indexOf(pr[i])-1];
          display(ans);
        }
      }
      display(ans);
      break;
    }
    case("sqrt"):{
      ans = Math.pow(eq[eq.length-2],1/2);
      eq.pop;
      eq.pop;
      eq.push(ans);
      display(ans);
      break;
    }
    case("pm"):{
      ans = -(eq[eq.length-2]);
      eq.pop;
      eq.pop;
      eq.push(ans);
      display(ans);
      break;
    }
    case("dot"):{
      if(ad==-1){
        ad=10;
      }
      display(disp);
      break;
    }
  }
}

function pressCount(a){
  if(ad==-1){
    display((disp*10)+a);
  }else{
    display(disp+(a/ad));
    ad*=10;
  }
}

function pressOp(a){
  eq.push(disp);
  eq.push(a);
  ad=-1;
  solve(eq);
}