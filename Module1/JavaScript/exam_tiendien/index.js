function payPower() {
    // display level
    let level_1 = 1678;
    let level_2 =1734;
    let level_3 = 2014;
    let level_4 = 2536;
    let level_5 = 2834;
    let level_6 = 2927;
    const number_1 = 50;
    const number_2 = 100;
    const tax = 10;
    let into_money = 0;
    let totalPower = Number(document.getElementById('total_power').value);
    // total power and amount of money
    if(0 < totalPower && totalPower<= 50){
        into_money =  totalPower * level_1;
        document.getElementById('into_money').innerHTML= into_money
        document.getElementById('unit_price').innerHTML = level_1
        document.getElementById('level').innerHTML='bậc thang 1'
        document.getElementById('quantity').innerHTML = totalPower
        document.getElementById("gross").innerText = into_money
        document.getElementById("tax").innerHTML = (into_money *tax) /number_2
        document.getElementById("net").innerHTML = into_money + (into_money *tax) /number_2;
    }
    else if (50 < totalPower && totalPower <= 100){
        into_money = (number_1*level_1) + (totalPower - number_1)*level_2 ;
        document.getElementById('into_money').innerHTML= into_money
        document.getElementById('unit_price').innerHTML = level_2
        document.getElementById('level').innerHTML='bậc thang 2'
        document.getElementById('quantity').innerHTML = totalPower
        document.getElementById("gross").innerText = into_money
        document.getElementById("tax").innerHTML = (into_money *tax ) /number_2
        document.getElementById("net").innerHTML = into_money + (into_money *tax ) /number_2;

    }
    else if(100< totalPower && totalPower <= 200) {
        into_money = (number_1 * level_1) + (number_1* level_2) + (totalPower - number_2)*level_3;
        document.getElementById('into_money').innerHTML= into_money
        document.getElementById('unit_price').innerHTML = level_3
        document.getElementById('level').innerHTML='bậc thang 3'
        document.getElementById('quantity').innerHTML = totalPower
        document.getElementById("gross").innerText = into_money
        document.getElementById("tax").innerHTML = (into_money *tax ) /number_2
        document.getElementById("net").innerHTML = into_money + (into_money *tax) /number_2;
    }
    else if (200<totalPower && totalPower <= 300) {
        into_money = ( number_1 * level_1) + (number_1 * level_2) + (number_2 * level_3) + (totalPower -number_2)*level_4
        document.getElementById('into_money').innerHTML= into_money
        document.getElementById('unit_price').innerHTML = level_4
        document.getElementById('level').innerHTML='bậc thang 4'
        document.getElementById('quantity').innerHTML = totalPower
        document.getElementById("gross").innerText = into_money
        document.getElementById("tax").innerHTML = (into_money *tax ) /number_2
        document.getElementById("net").innerHTML = into_money + (into_money *tax ) /number_2;
    }
    else if (300 < totalPower && totalPower <= 400) {
        into_money = (number_1 * level_1) + (number_1 * level_2) + ( number_2 * level_3 ) + (number_2 * level_4) + (totalPower - number_2)*level_5
        document.getElementById('into_money').innerHTML= into_money
        document.getElementById('unit_price').innerHTML = level_5
        document.getElementById('level').innerHTML='bậc thang 5'
        document.getElementById('quantity').innerHTML = totalPower
        document.getElementById("gross").innerText = into_money
        document.getElementById("tax").innerHTML = (into_money *tax ) /number_2
        document.getElementById("net").innerHTML = into_money + (into_money *tax) /number_2;
    }
    else if (400 < totalPower) {
        into_money = (number_1 * level_1) + (number_1 * level_2) + ( number_2 * level_3 ) + (number_2 * level_4) + (number_2 * level_5) + (totalPower - number_2)*level_6
        document.getElementById('into_money').innerHTML= into_money
        document.getElementById('unit_price').innerHTML = level_6
        document.getElementById('level').innerHTML='bậc thang 6'
        document.getElementById('quantity').innerHTML = totalPower
        document.getElementById("gross").innerText = into_money
        document.getElementById("tax").innerHTML = (into_money *tax ) /number_2
        document.getElementById("net").innerHTML = into_money + (into_money *tax ) /number_2;
    }
    else {
        alert('Vui lòng nhập tổng điện năng tiêu thụ hợp lệ!')
    }
}
function cancel() {
    // gán các input về empty
    document.getElementById("total_power").value= null;
    document.getElementById("level").innerHTML = ''
    document.getElementById("unit_price").innerHTML = ''
    document.getElementById("quantity").innerHTML=''
    document.getElementById("into_money").innerHTML = ''
    document.getElementById("gross").innerHTML = ''
    document.getElementById("tax").innerHTML= ''
    document.getElementById("net").innerHTML = ''
    document.getElementById("total_power").focus();
}
document.addEventListener("keydown", handleKeydown);
const enterKey = 13;
const escKey = 27;
function handleKeydown(event){
    if(event.keyCode == enterKey){
        payPower();
    }   
    if(event.keyCode == escKey){
        cancel();
    }
}

document.getElementById("gross").innerText = into_money
document.getElementById("tax").innerHTML = (into_money *10 ) /100;