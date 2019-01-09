
function newString(str, n) {
	var top_str = str.substring(0, n);
	var end_str = str.substring(str.length - n);
	var newStr = top_str.concat(end_str);
	return newStr;
}


console.log(newString('describle',2));
console.log(newString('describle',5));
