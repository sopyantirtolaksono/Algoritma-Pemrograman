// const array = [1,4,11,25,32,37,40,43,47,49,53,55];
// const array = [87, 64, 3, 65, 6, 5, 43, 45, 21, 17, 10];
const array = [1,4,11,25,32,37,40,43,47,49,53,55,65,77,87,89,93,95,100,105,165,178,199,201,265,301,333,337,403,444,467,489,499,500,503,509,657,666,689,707,755,777,789,790,804,854,876,890,900,934,955,967,977,987,995,1000];
let key = 666;

console.log(array);
console.log("=============================");
console.log(key);
console.log("=============================");

const frontAndBackSearch = () => {
	let result = -1;

	for(let i = 0; i < Math.ceil(array.length/2); i++) {
		console.log(array[i] + " | " + array[array.length-1-i]);
		console.log("=============================");

		if(array[i] === key || array[array.length-1-i] === key) {
			if(array[i] === key) {
				console.log("Data on front part = " + array[i]);
				console.log("=============================");
			} else {
				console.log("Data on back part = " + array[array.length-1-i]);
				console.log("=============================");
			}

			result = i;
			return result;
		}
	}

	return result;
}

let result = frontAndBackSearch();
if(result === -1) {
	console.log("Data not found!");
} else {
	console.log("Data is ready on index = " + result);
	console.log("Process " + parseInt(result + 1) + "x");
}