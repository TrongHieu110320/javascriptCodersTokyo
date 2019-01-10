
function findMostFrequent(arr) {
	var counts = {};

	for (var i = 0; i < arr.length; i++) {
		var num = arr[i];
		counts[num] = counts[num] ? counts[num] + 1 : 1;
	}

	var countMax = 0; 
	var maxValue = 0;
	for (var count in counts) {
		if (countMax < counts[count]) { 
			countMax = counts[count]; 
			maxValue = count;
		}
	}

	return maxValue;
}


console.log(findMostFrequent([1,2,3,4,1,2,2]));
console.log(findMostFrequent([1,1,2,2,1]));