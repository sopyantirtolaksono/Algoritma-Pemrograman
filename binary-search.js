// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const array = [87, 64, 3, 65, 6, 5, 43, 45, 21, 17, 10];
// const array = [1,4,11,25,32,37,40,43,47,49,53,55];
const array = [1,4,11,25,32,37,40,43,47,49,53,55,65,77,87,89,93,95,100,105,165,178,199,201,265,301,333,337,403,444,467,489,499,500,503,509,657,666,689,707,755,777,789,790,804,854,876,890,900,934,955,967,977,987,995,1000];
// const array = ["gajah", "ayam", "kucing", "ikan"];
let temp

let key = 666;
console.log("Key is = " + key);
console.log("==============================");

console.log("--Unsorted--");
console.log(array);
console.log("==============================");

// array.sort();
// console.log(array);
// console.log("==============================");

const bubbleSort = () => {
	for(let i = 0; i < array.length-1; i++) {
		for(let j = 0; j < array.length-1; j++) {
			if(array[j] > array[j+1]) {
				temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
			}
		}

		// console.log(`Process ${i+1} = ` + array);
	}

	return array;
}

console.log("--Sorted--");
console.log(bubbleSort());
console.log("==============================");

const binarySearch = (key, array) => {
	let lower = 0;
	let upper = array.length - 1;
	let number = 1;

	while(lower <= upper) {
		let middle = lower + Math.floor((upper - lower) / 2);

		console.log("Process " + number++);
		console.log("==============================");

		if(key === array[middle]) {
			console.log("Data on index = " + middle);
			return array[middle];
		}

		if(key < array[middle]) {
			upper = middle - 1;
		} else {
			lower = middle + 1;
		}
	}

	return -1 + " / Data not found!";
}

// console.log(`Key in = ${binarySearch(key, bubbleSort())}`);
console.log(`The data is = ${binarySearch(key, array)}`);