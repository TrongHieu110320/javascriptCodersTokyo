var arr1 = [7, 9, 0, -2];
var arr2 = [];

function first(arr, n) {
	if (n <= 0) { return []; }
	if (n >= arr.length) { return arr; }
	if (typeof n === 'undefined') { return arr[0]; }

	var arrayOfFirstElement = [];
	for (var i = 0; i < n; i++) {
		arrayOfFirstElement.push(arr[i]);
	} 

	return arrayOfFirstElement;
}

console.log(first(arr1));
console.log(first(arr2));
console.log(first(arr1, -3));
console.log(first(arr1, 3));
console.log(first(arr1, 9));
