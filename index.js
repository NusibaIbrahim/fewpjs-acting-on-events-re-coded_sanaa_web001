// Your code here
let dodger = document.getElementById('dodger');

function moveDodgerLeft(){
  var leftN = dodger.style.left.replace("px", "");
  left = parseInt(leftN,10);
  if(left >0){
    doger.style.left = `${left-1}px`;
  }  
}

function moveDodgerRight()(){
  var leftN = dodger.style.left.replace("px", "");
  left = parseInt(leftN,10);
  if(left >0){
    doger.style.left = `${left+1}px`;
  }  
}

document