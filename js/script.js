{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.57;
        const rateUSD = 3.80;
        const rateGBP = 5.26;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const plnElement = document.querySelector(".js-PLN");
        const chooseCurrency = document.querySelector(".js-chooseCurrency");

        const amount = +plnElement.value;
        const currency = chooseCurrency.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}
