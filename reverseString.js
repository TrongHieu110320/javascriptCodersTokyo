function reverse(str) {
	var splitSTring = str.split("");
	var reverseArray = splitSTring.reverse();
	var joinArray = reverseArray.join("");
	return joinArray;
}

console.log('Hello => ', reverse('Hello'));
console.log('TrongHieu => ', reverse('TrongHieu'));
console.log('World => ', reverse('World'));

