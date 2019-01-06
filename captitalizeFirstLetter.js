var string = 'toi ten la nguyen trong hieu';

function capitalize(str) {
	var splitString = str.split(" ");
	// console.log(splitString);

	var firstLetterArray = splitString.map(function(x) {
		return x.charAt(0).toUpperCase() + x.slice(1);
	});
	// console.log(firstLetterArray);

	var joinString = firstLetterArray.join(" ");
	return joinString;
}

console.log(capitalize(string));