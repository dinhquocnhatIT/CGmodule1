function Add() {
    let Number1 = document.getElementById("number1").value;
    let Number2 = document.getElementById("number2").value;
    let result = Number(Number1) + Number(Number2)
    document.getElementById("result").innerHTML=result;
}
function Sub() {
    let Number1 = document.getElementById("number1").value;
    let Number2 = document.getElementById("number2").value;
    let result = Number(Number1) - Number(Number2);
    document.getElementById("result").innerHTML=result;
}
function Mul() {
    let Number1 = document.getElementById("number1").value;
    let Number2 = document.getElementById("number2").value;
    let result = Number(Number1) * Number(Number2);
    document.getElementById("result").innerHTML=result;
}
function Div() {
    let Number1 = document.getElementById("number1").value;
    let Number2 = document.getElementById("number2").value;
    let result = Number(Number1) / Number(Number2)
    document.getElementById("result").innerHTML=result;
}