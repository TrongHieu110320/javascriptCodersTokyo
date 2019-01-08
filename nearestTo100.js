
function neareastTo100(a, b) {
	var value = 0;
	Math.abs(a - 100) < Math.abs(b - 100) ? value = a : value = b;
	return value;	
}

console.log(nearestTo100(89, 178));