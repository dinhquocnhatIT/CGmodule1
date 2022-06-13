function convertCurrency(){
    let Amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("from_currency").value;
    let toCurrency = document.getElementById("to_currency").value;
    let result;
    if (fromCurrency == "VND" && toCurrency == "USD") {
        result = 'result:' + (Amount / 23000) + 'USD';
    }
    else if (fromCurrency == "USD" && toCurrency == "VND") {
        result = 'result:' + (Amount * 23000) + 'VND';

    }
    else if (fromCurrency == "VND" && toCurrency =="VND"){
        result = 'result:' + Amount + 'VND';
    }
    else {
        result = 'result:' + Amount + 'USD';
    }
    document.getElementById("result").innerHTML=result;
}
