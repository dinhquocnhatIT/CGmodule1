
// function findIndex(array,number) {
//     for(let index of array) {
//        if(index === number) {
        
//           return true;
//        }
//     }
//     return false;
//  }
//  let names = [1,2,3,4,5,6,7];
//  console.log(findIndex(names,7));
 function findIndex(number, array){
    for(let i = 0; i < array.length; i++){
        if (number == array[i]) {
            return `so do co vi tri thu ${i} trong mang`;
        }
    }

    return `${number} Không có trong mảng ${array}`
}

let array = [2,3,4,5,6,7,8,9,-1]
console.log(findIndex('9a', array));