module.exports = function check(str, bracketsConfig) {
  // your solution
  var bracketsArray = str.split("");
  var seq = []
  for(let i = 0; i < bracketsArray.length; i++){
    if(i > 0){
      if(compare(bracketsArray[i], seq[seq.length-1], bracketsConfig)){
        seq.pop();
      }else{
        seq.push(bracketsArray[i]);
      }
    }else{
         seq.push(bracketsArray[i]);
    }
  }
return seq.length === 0 ? true : false;
}
function compare(val1, val2, bracketsConfig) {
  var isPair = false;
  bracketsConfig.forEach(function(element) {
    if (val1 == element[1] && val2 == element[0]){
      isPair = true;
    }
  });
  return isPair;
}
