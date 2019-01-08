//Viêt 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

var str1 = '';
var str2 = 'paatpsts';
var str3 = 'aass';

function equal_pt(str){ 
  if (str.length <= 0) { return 'empty string'; }

  var splitString = str.split('');

  var countP = 0;
  var countT = 0;

  for (var character of splitString) {
    if (character === 'p' || character === 'P') { countP++; }
    if (character === 't' || character === 'T') { countT++; }
  }

  return countT === countP;
}

console.log(equal_pt(str1));
console.log(equal_pt(str2));
console.log(equal_pt(str3));



