var arr = [1, -10, 5, 18, -9, 5];

function findMaxDiff(arr) {
	if (arr.length < 2) { return 0; } 
	var temps = [];
	for (var i = 0; i < arr.length - 1; i++) {
		temps.push(Math.abs(arr[i+1] - arr[i]));
	}

	var maxDiff = temps[0];
	for (var temp of temps) {
		if (temp > maxDiff) {
			maxDiff = temp;
		}
	}

	return maxDiff;
}

console.log(findMaxDiff(arr));


