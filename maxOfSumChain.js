
function maxOfSumChain(arr, n) {
	var currentSum = 0;
	var arrayLength = arr.length;
	for (var i = 0; i < n; i++) {
		currentSum += arr[i];
	}
	var maxSum = currentSum;
	// console.log(currentSum);

	for (var i = n; i < arrayLength; i++) {
		// console.log('After subtract: ');
		currentSum = currentSum - arr[i - n];
		// console.log(currentSum);

		// console.log('After add: ');
		currentSum = currentSum + arr[i];
		// console.log(currentSum);

		if (maxSum < currentSum) { maxSum = currentSum; }
	}

	return maxSum;
}

console.log(maxOfSumChain([1,3,2],2));
console.log(maxOfSumChain([1,3,2,6,2],3));
