
// -----
// function quadraticEquation(a,b,c)
// {

// // let x =0;
// // let x1 = 0;
// // let x2 = 0;

// let delta = b*b - 4*a*c;
// console.log(`delta la: ${delta}`);
// if (delta < 0)
// {
// console.log(" Phương trình vô nghiệm ");
// }
// else if (delta == 0)
// {
// x = -b/2*a;
// console.log(`nghiem cua phuong trinh la: ${x}`);
// }
// else if (delta > 0)
// {
// x1 = (-b + Math.sqrt(delta))/(2*a);
// console.log(`phuong trinh co nghiem x1 la: ${x1}`);
// x2 = (-b - Math.sqrt(delta))/(2*a);
// console.log(`phuong trinh co nghiem x2 la: ${x2}`);
// }
// }
// let result = quadraticEquation(8,12,-20)
// console.log(result);


// if () {
//     findQuadraticEquation()
// }
// else{
//     console.log('chan om, nhap lai di')
// }
function findQuadraticEquation(a, b, c) {
    
    if(a==0 && b==0 && c==0){
        return console.log( "Phương trình vô số nghiệm");
    }
    if (a == 0 && b == 0) {
        return console.log( "Phương trình không xác định");
    }
    else if (a == 0 && b != 0) {
        return console.log(`Phuong trinh co 1 nghiem x= ${(-c) / b} `);
    }
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        return console.log("Phương trình vô nghiệm");
    }
    else if (delta == 0) {
        return console.log("Phương trình có một nghiệm x= " + ((-b) / (2 * a)));
    }
    else {
        return console.log("Phương trình có 2 nghiệm x1 = " + (-b + Math.sqrt(delta)) / (2 * a) + " và x2 = " + (-b - Math.sqrt(delta)) / (2 * a));
    }
}
findQuadraticEquation(8, 15, -20);