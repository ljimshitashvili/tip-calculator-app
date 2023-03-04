const bill = document.querySelector("#bill");
const custom = document.querySelector("#custom");
const quantity = document.querySelector("#quantityPeople");
const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");
const errorMessage = document.querySelector('.error-message');
const resetAll = document.querySelector("#reset-all");
let tip;

tipAmount.textContent = "$0.00";
totalAmount.textContent = "$0.00";

function calculateTip(){
    tip = bill.value * custom.value / 100;
    let tipPerson = tip / quantity.value;
    tipAmount.textContent = ('$' + tipPerson.toFixed(2));
    notZero();
}

function calculateTotal(){
    tip = bill.value * custom.value / 100;
    let totalCost = (tip + Number(bill.value)) / quantity.value;
    totalAmount.textContent = ('$' + totalCost.toFixed(2));
    notZero();
}

function reset(){
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
    bill.value = "";
    custom.value = "";
    quantity.value = "";
    quantity.style.border = "none";
    errorMessage.style.display = "none";
}

function percentButton(parameter){
    tip = bill.value * Number(parameter.value) / 100;
    let tipPerson = tip / quantity.value;
    tipAmount.textContent = ('$' + tipPerson.toFixed(2));

    tip = bill.value * Number(parameter.value) / 100;
    let totalCost = (tip + Number(bill.value)) / quantity.value;
    totalAmount.textContent = ('$' + totalCost.toFixed(2));
    notZero();
}

function notZero(){
    if(quantity.value <= 0){
        quantity.style.border = "2px solid red";
        errorMessage.style.display = "block";
        tipAmount.textContent = "$0.00";
        totalAmount.textContent = "$0.00";
    }else{
        quantity.style.border = "none";
        errorMessage.style.display = "none";
    }
}

custom.addEventListener('input', calculateTip);
custom.addEventListener('input', calculateTotal);

resetAll.addEventListener('click', reset);

