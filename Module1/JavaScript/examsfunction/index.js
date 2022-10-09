//size là tham số
function geneRateArray (size, max , min) {
    let array = []; 
    // let max = 50;
    // let min = 10;
    for(let i  = 0; i < size; i++) {
        array[i] = Math.floor(Math.random() * (max - min + 1) + min)
    }
    return array;
}
let numbers = geneRateArray(20, 60, 15)// 20 là đối số
let newArray = geneRateArray(15, 60, 15)// 15 cũng là đối số
console.log(numbers)
console.log(newArray)
