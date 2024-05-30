let billAmountInput = document.getElementById("billAmount");
let persentageTipInput = document.getElementById("percentageTip");
let tipAmountInput = document.getElementById("tipAmount");
let totalInput = document.getElementById("totalAmount");
let errorMassageElement = document.getElementById("errorMessage");
let errorMassage = "Please Enter Valid Input.";

function calculateTip() {
    let billAmountInputValue = billAmountInput.value;
    let persentageTipInputValue = persentageTipInput.value;

    if (billAmountInputValue === "") {
        errorMassageElement.textContent = errorMassage;
    } else if (persentageTipInputValue === "") {
        errorMassageElement.textContent = errorMassage;
    } else {
        errorMassageElement.textContent = "";
        let billAmout = parseInt(billAmountInputValue);
        let persantageTip = parseInt(persentageTipInputValue);

        let calculateTip = (persantageTip / 100) * billAmout;
        let calculateTotal = billAmout + calculateTip;

        tipAmountInput.value = calculateTip;
        totalInput.value = calculateTotal;

    }
}