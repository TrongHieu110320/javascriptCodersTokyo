
var str = 'Nguyen Trong Hieu';

function omitCharAt(str, n) {
	var temp = str.slice(0, n) + str.slice(4);
	return temp;
}

console.log(omitCharAt(str, 3));