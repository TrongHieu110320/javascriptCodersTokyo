

function rearrangeChar(str1, str2) {
	var temp1 = str1.split('');
	var temp2 = str2.split('');

	var sum1 = 0;
	var sum2 = 0;

	console.log(temp1, temp2);

	for (var temp of temp1) {
		sum1 += temp.charCodeAt(0);
	}	

	for (var temp of temp2) {
		sum2 += temp.charCodeAt(0);
	}

	console.log(sum1, sum2);
	return sum1 === sum2;

}

console.log(rearrangeChar('abc', 'cab'));
