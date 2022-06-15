// =====================================IF ELSE =====================================
// var income = 45000000
// if(income <= 5000000){
//     console.log('tien thue phai dong la:' + ((income * 5)/100) + 'VND');
// }
// if(income < 5000000 && income <= 10000000){
//     console.log('tien thue phai dong la:' + ((income * 10)/100) + 'VND');
// }
// if(income <10000000 && income <= 18000000){
//     console.log('tien thue phai dong la:' + ((income * 15)/100) + 'VND');
// }
// if(income <18000000 && income <= 32000000){
//     console.log('tien thue phai dong la:' + ((income * 20)/100) + 'VND');
// }
// if(income <32000000 && income <= 52000000){
//     console.log('tien thue phai dong la:' + ((income * 25)/100) + 'VND');
// }
// if(income < 52000000 && income <= 80000000){
//     console.log('tien thue phai dong la:' + ((income * 30)/100) + 'VND');
// }
// if(income > 80000000){
//     console.log('tien thue phai dong la:' + ((income * 35)/100) + 'VND');

// ===================================SWITCH CASE============================================
// var income = 5000000;
// switch (true) {
//     case (income<=5000000):{
//         console.log('tien thue phai dong la:' + ((income * 5)/100) + 'VND');
//         break;
//     } 
//     case (income < 5000000 && income <= 10000000):{ 
//         console.log('tien thue phai dong la:' + ((income * 10)/100) + 'VND');
//         break;
//     }
//     case (10000000 && income <= 18000000):  {
//         console.log('tien thue phai dong la:' + ((income * 15)/100) + 'VND');
//         break;
//     }
//     case (18000000 && income <= 32000000): {
//         console.log('tien thue phai dong la:' + ((income * 20)/100) + 'VND');
//         break;
//     }
//     case (income <32000000 && income <= 52000000): {
//         console.log('tien thue phai dong la:' + ((income * 25)/100) + 'VND');
//         break;
//     }
//     case (income < 52000000 && income <= 80000000): {
//         console.log('tien thue phai dong la:' + ((income * 30)/100) + 'VND');
//         break;
//     }
//     case (income > 80000000): {
//         console.log('tien thue phai dong la:' + ((income * 35)/100) + 'VND');
//         break;
//     }
// }

// =====================================? : TOAN TU 3 NGOI =======================================
var income = 5000000;
(income <= 5000000) ?  console.log('tien thue phai dong la:' + ((income * 5)/100) + 'VND') : (income < 5000000 && income <= 10000000) ? console.log('tien thue phai dong la:' + ((income * 10)/100) + 'VND') : 
(10000000 && income <= 18000000) ?  console.log('tien thue phai dong la:' + ((income * 15)/100) + 'VND') : (18000000 && income <= 32000000) ? console.log('tien thue phai dong la:' + ((income * 20)/100) + 'VND') :
(income <32000000 && income <= 52000000) ? console.log('tien thue phai dong la:' + ((income * 25)/100) + 'VND') :(income < 52000000 && income <= 80000000) ? console.log('tien thue phai dong la:' + ((income * 30)/100) + 'VND') :
 console.log('tien thue phai dong la:' + ((income * 35)/100) + 'VND')