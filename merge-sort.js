const array1 = [0,1,2,3,4];
const array2 = [2,3,4,5,6];
let temp = [];

console.log(array1);
console.log("====================");
console.log(array2);

console.log("====================");

const mergeSort = () => {
	while(array1.length && array2.length) {
		if(array1[0] < array2[0]) {
			temp.push(array1[0]);
			array1.shift();
		} else {
			temp.push(array2[0]);
			array2.shift();
		}
	}

	return temp.concat(array1, array2);
}

console.log(mergeSort());