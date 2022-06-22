// su dung vong lap de hien thi va xai number.lenght

// let numbers = [5, 7, 8, 1, 4, 9, 99, 8888];
// // for (let i = 0; i < 5; i++) {
// //   console.log(numbers[i]);
// // }
// // let i = 0;
// // while(i < 5) {
// //     console.log(numbers[i]);
// //     i++;
// // }
// let i = 0;
// do {
//   console.log(numbers[i]);
//   i++;
// } while (i < numbers.length);

// ==============Nhap vao size va hien thi cac so co trong size do
// let size = Number(prompt('Enter number: '));
// let number = [];
// for( let i = 0; i < size; i++) {
//     number[i] = Number(prompt(`Enter number ${i} =`));
// }
// for (let i = 0; i < number.length; i++) {
//     document.write(`Result ${number[i]} <br>`)
// }
// =========tinh min max hien ra so random=========
// let size = Number(prompt('Enter number: '));
// let min = Number(prompt('Enter min on size: '));
// let max = Number(prompt('Enter max on size: '));
// let number = [];
// for( let i = 0; i < size; i++) {
//     number[i] = Math.floor(Math.random() * (max - min +1) + min)
// }
// for( let i = 0; i < number.length; i++) {
//     document.write(`${number[i]} <br>`)
// }
// ===================tinh tong, dem so chan va kiem tra 15 cos trong mang hay ko===========================
// let size = Number(prompt('Enter number size: '));
// let min = Number(prompt('Enter min on size: '));
// let max = Number(prompt('Enter max on size: '));
// let number = [];
// let sum = 0;
// let count = 0;
// let existFitten = false;
// for( let i = 0; i < size; i++) {
//     number[i] = Math.floor(Math.random() * (max - min +1) + min)
//      }
// for (let i = 0; i < number.length; i++) {
//          document.write(`${number[i]} `);
//      }
// for (let i = 0; i < number.length; i++) {
//     sum += number[i]
// }
// document.write('<br>')
// document.write(`Tong cua mang la: ${sum}`);
// for( let i = 0; i < number.length; i++) {
//     if(number[i] % 2 == 0) {
//         count++;
//     }
// }
// document.write('<br>')
// document.write(`cac so chan co trong mang: ${count}`);
// for( let i = 0; i < number.length; i++) {
//     if(number[i] == 15) {
//         existFitten = true;
//         break;
//     }
// }
// document.write('<br>')
// document.write(` ${existFitten == true ? '15 co trong mang number' : '15 khong co trong mang number'}`);
// // ===================================
let size = Number(prompt("Enter size"));
let min = Number(prompt("Enter min of size"));
let max = Number(prompt("Enter max of size"));
let number = [];
let sumOdd = 0;
let prime = 0;
let countSquare = 0;
let flag = true;

for (let i = 0; i < size; i++) {
  number[i] = Math.floor(Math.random() * (max - min + 1) + min);
}
for (let i = 0; i < size; i++) {
  document.write(`${number[i]} `);
}
for (let i = 0; i < size; i++) {
  if (number[i] % 2 != 0) {
    sumOdd += number[i];
  }
}
document.write("<br>");
document.write(`Tong cac so le la: ${sumOdd}`);
document.write("<br>");
// =====tinh so luong nguyen to prime trong size
for (let i = 0; i < size; i++) {
  if (number[i] > 1) {
    for( let j = 2; j < number[i]; j++) {
        if (number[i] % j == 0) {
            flag = false;
            break;
        }
    }
    if(flag) {
        // document.write(number[i])
        prime += 1
        ;

    }
    else{ flag = true;
    }
  } 
}
// for( let i = 0; i < size; i++) {

// }
document.write(`so nguyen to co trong mang la: ${prime}`);
document.write('<br>')
document.write('Các số chính phương: ')
for (let i = 0; i < number[i].length; i++){
    if (Number.isInteger(Math.sqrt(arrayNumber[i]))){
        countSquare +=1;
        document.writeln(arrayNumber[i]);
    }
}
document.write('<br>');
document.write(`Đếm được các số chính phương: ${countSquare} <br>`);
