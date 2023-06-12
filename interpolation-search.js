// let array = [1,4,11,25,32,37,40,43,47,49,53,55];
const array = [1,4,11,25,32,37,40,43,47,49,53,55,65,77,87,89,93,95,100,105,165,178,199,201,265,301,333,337,403,444,467,489,499,500,503,509,657,666,689,707,755,777,789,790,804,854,876,890,900,934,955,967,977,987,995,1000];
let key = 500;

console.log("========================================================");
console.log(array + " -> Sorted");
console.log("========================================================");
console.log(key + " -> Key");
console.log("========================================================");

const interpolationSearch = (key, array) => {
	let number = 1;
	let idStart = 0;
	let idEnd = array.length - 1;
	let idMiddle = idStart + Math.floor(((idEnd - idStart) / (array[idEnd] - array[idStart])) * (key - array[idStart]));

	console.log("Index Start = " + idStart);
	console.log("Index Middle = " + idMiddle);
	console.log("Index End = " + idEnd);
	console.log("========================================================");

	while(idStart <= idMiddle) {

		console.log(`Indexs = ${idStart} ${idMiddle} ${idEnd}`);
		console.log("========================================================");
		console.log("Process " + number++);
		console.log("========================================================");

		if(array[idMiddle] === key) {
			console.log("Data on index = " + idMiddle);
			return array[idMiddle];
		} else if(key > array[idMiddle]) {
			idStart = idMiddle;
			idEnd = idEnd;
			idMiddle = idStart + Math.floor(((idEnd - idStart) / (array[idEnd] - array[idStart])) * (key - array[idStart]));
		} else {
			idStart = idStart;
			idEnd = idMiddle;
			idMiddle = idStart + Math.floor(((idEnd - idStart) / (array[idEnd] - array[idStart])) * (key - array[idStart]));
		}
	}

	return -1;
}

console.log(`The data is = ${interpolationSearch(key, array)}`);
