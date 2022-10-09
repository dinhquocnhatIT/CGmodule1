function getValue (size, min, max) {
    let arr = [];
    let total = 0;
    let countEvenNumbers = 0;
    let existFifteen = true;
    for(let i  = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1) + min)
    }
    for(let i = 0; i < size; i++) {
        total += arr[i]
    }
    for(let i = 0; i < size; i++) {
        if(arr[i] % 2 == 0) {
            countEvenNumbers++;
        }
    }
    for(let i = 0; i < size; i++){
        if(arr[i] == 15){
            existFifteen = true;
            break;
        }
    }
    // return countEvenNumbers;
    // return total;
    return arr;
}
let numbers = getValue(10,15,60);
console.log(numbers);
console.log(`tong cua mang la: ${total}`)
console.log(`so chan trong mang la ${countEvenNumbers}`)
console.log(`co so 15 hay khong ${existFifteen}`)

