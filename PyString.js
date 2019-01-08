var str = 'Coders Tokyo';
var str2 = 'Python';

function pyString(str) {
	if (str.startsWith('Py')) { return str; }
	var temp = 'Py';
	return temp.concat('', str);
}

console.log(pyString(str));
console.log(pyString(str2));
