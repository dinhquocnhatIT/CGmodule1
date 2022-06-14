function convertCurrency(){
    let Amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("from_currency").value;
    let toCurrency = document.getElementById("to_currency").value;
    let Result;
    if (fromCurrency == "USD" && toCurrency == "VND") {
        Result = 'result:' + (Amount * 23000) + 'Đ';
    }
    else if (fromCurrency == "VND" && toCurrency == "USD") {
        Result = 'result:' + (Amount / 23000) + '$';

    }
    else if (fromCurrency == "VND"){
        Result = 'result:' + Amount + "Đ";
    }
    else {
        Result = 'result:' + Amount + "$";
    }
    console.log(Result);
   document.getElementById("result").innerText=Result;
}
