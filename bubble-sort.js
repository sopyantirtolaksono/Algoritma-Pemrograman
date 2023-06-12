const array = [20,13,90,67,54];
let temp;

const bubbleSort = () => {
	for(let i = 0; i < array.length; i++) {
		for(let j = 0; j < array.length; j++) {
			if(array[j] > array[j+1]) {
				temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
			}
		}

		console.log(`Process = ${i+1} [${array}]`);
		console.log("===============================");
	}

	return array;
}

console.log(array + " -> Unsorted");
console.log("===============================");
console.log(bubbleSort() + " -> Sorted");

