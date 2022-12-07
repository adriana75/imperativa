let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const binarySearch = (list, item) => {
	let low = 0;
	let high = list.length - 1;
	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		const guess = list[mid];
		if (guess === item) {
			return mid;
		}
		if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return null; 
};
let uno = binarySearch(list, 1)
console.log(uno);
let cinco = binarySearch(list, 5)
console.log(cinco);
let seis = binarySearch(list, 6)
console.log(seis);
let nueve = binarySearch(list, 9)
console.log(nueve);
let once = binarySearch(list, 11)
console.log(once);

let list2 = [12,3,5,7,1,22,47,100];
const ordenar = (arr) =>{
    let aux = undefined
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            if (arr[j] > arr[j + 1]) {
                aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
        }
    }
}
ordenar(list2)
console.log(list2);
let doce = binarySearch(list2, 12)
console.log(doce);
let cinco2 = binarySearch(list2, 5)
console.log(cinco2);
let veintidos = binarySearch(list2, 22)
console.log(veintidos);
let cien = binarySearch(list2, 100)
console.log(cien);
