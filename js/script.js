let formElement = document.querySelector(".js-form");
let plnElement = document.querySelector(".js-PLN");
let chooseCurrency = document.querySelector(".js-chooseCurrency");
let result = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let EUR = 4.57;
    let USD = 3.80;
    let GBP = 5.26;
    let currency = chooseCurrency.value;

    switch (currency) {
        case "EUR":
            let resultEUR = plnElement.value / EUR;
            result.innerText = resultEUR.toFixed(2) + " EUR";
            break;

        case "USD":
            let resultUSD = plnElement.value / USD;
            result.innerText = resultUSD.toFixed(2) + " USD";
            break;

        case "GBP":
            let resultGBP = plnElement.value / GBP;
            result.innerText = resultGBP.toFixed(2) + " GBP";
            break;
    }
});