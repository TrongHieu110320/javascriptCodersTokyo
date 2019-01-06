var a = 5;
var b = 9;
var c = 3;

function findMax(a, b, c) {
	var max = a;
	if (b > max) { max = b; }
	if (c > max) { max = c; }
	return max;
}

console.log(findMax(a, b, c));
