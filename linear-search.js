// const array = [6,5,1,3,2];
// const array = [1,4,11,25,32,37,40,43,47,49,53,55];
const array = [1,4,11,25,32,37,40,43,47,49,53,55,65,77,87,89,93,95,100,105,165,178,199,201,265,301,333,337,403,444,467,489,499,500,503,509,657,666,689,707,755,777,789,790,804,854,876,890,900,934,955,967,977,987,995,1000];
let key = 666;

console.log("Key = " + key);
console.log("==============================================");

console.log("Unsorted = " + array);
console.log("==============================================");

const linearSearch = () => {
	let number = 1;

	for(let i = 0; i < array.length; i++) {
		console.log("Process " + number++);
		console.log("==============================================");

		if(key === array[i]) {
			console.log("Data on index = " + i);
			console.log("The data is = " + array[i]);
			return;
		}
	}

	console.log("Data not found!");
}

linearSearch();