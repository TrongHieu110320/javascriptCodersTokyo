var str = 'Java';

function startWith(str) {
	var splitString = str.split(' ');
	return splitString[0] === 'Java';
}

console.log(startWith(str));
