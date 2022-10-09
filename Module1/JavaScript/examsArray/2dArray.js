// let row = 5;
// let cell = 7;
// let min = 10;
// let max = 20;
// let matrix = [];
// for(let r = 0; r < row; r++){
//     let numbers = [];
//     for(let c = 0; c < cell; c++){
//         numbers[c] = Math.floor(Math.random()*(max - min + 1) + min);
//     }
//     matrix[r] = numbers;
// }

// console.log(matrix)
var row = 0;
var cell = 0;
var min = 0;
var max = 0;
var matrix = [];
var countEvenNumber = 0;
var countOfPrime = 0;
var totalMargin = 0;
var trArray = document.getElementById('trArray');
var tdevenNumber = document.getElementById('evenNumber');
var tdCountOfPrime = document.getElementById('countOfPrime');
var tdTotalMargin = document.getElementById('totalMargin');

function process(){
    countEvenNumber = 0;
    countOfPrime = 0;
    totalMargin = 0;
    row = Number(document.getElementById('row').value);
    cell = Number(document.getElementById('cell').value);
    min = Number(document.getElementById('min').value);
    max = Number(document.getElementById('max').value);
    for(let r = 0; r < row; r++){
         matrix[r] = [];
        for(let c = 0; c < cell; c++){
        matrix[r][c] = Math.floor(Math.random()*(max - min + 1) + min);
        }
    }
    // alert(matrix)
    let tds = "";
    for(let r = 0; r < row; r++){
        tds+='<tr>'
        for(let c = 0; c < cell; c++){
        tds += `<td>${matrix[r][c]}</td>`;
        }
        tds+='</tr>'
    }
    // alert(tds)
    trArray.innerHTML = tds;
}
//     for(let i =0; i < size; i++){
//         if(numbers[i] % 2 !=0 ){
//             totalOddNumber += numbers[i];
//         }
//     }
//     tdTotalOddNumber.innerHTML = totalOddNumber;

//     let isPrime = true;
//     for(let i = 0; i < size; i++){
//         isPrime = true;
//         for(let j = 2; j < numbers[i]; j++){
//             if(numbers[i] % j == 0)
//             {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if(isPrime == true){
//             countOfPrime++;
//         }
//     }
//     tdCountOfPrime.innerHTML = countOfPrime;

//     for(let i = 0; i < size; i++){
//         // if(Number.isInteger(Math.sqrt(numbers[i])) == true){
//         //     countOfPerfectSquare ++;
//         // }
//         if(Math.floor(Math.sqrt(numbers[i])) == Math.sqrt(numbers[i])){
//             countOfPerfectSquare ++;
//         }
//     }
//     tdCountOfPerfectSquare.innerHTML = countOfPerfectSquare;
// }