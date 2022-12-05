let arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
];
let diagonalUno = 0;
let diagonalDos = 0;
let resultado = 0;

for (let i = 0; i < arr.length; i++) {
    diagonalUno += arr[i][i]; 
}
console.log("1: " + diagonalUno);

for (let i = 0; i < arr.length; i++) {
    diagonalDos += arr[i][ arr.length - 1 - i ] 
}
console.log("2: " + diagonalDos);