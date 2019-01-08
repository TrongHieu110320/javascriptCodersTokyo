var str = 'Hello';

function toNextChar(str) {
	var splitString = str.split('');
	
  	var newString = splitString.map(function(item) {
  		var charCode = item.charCodeAt(0);
  		var nextChar = String.fromCharCode(charCode + 1);
  		return nextChar;
  	});
  
  	return newString.join('');
}

console.log(str, ' => ', toNextChar(str));
