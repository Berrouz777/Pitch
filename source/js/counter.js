const quantityBlock = document.querySelector('.quantity__current');
const buttonMinus = document.querySelector('.quantity__button--minus');
const buttonPlus = document.querySelector('.quantity__button--plus');
const displayDollars = document.querySelector('.cost__price--dollars');

let countValue = 1;
let dollars = 120;

const getMinusOne = () => {
    if (countValue > 1) {
        countValue -= 1;
        dollars -= 120;
    }
    if (quantityBlock) {
        quantityBlock.innerHTML = countValue;
    }
    if (displayDollars) {
        displayDollars.innerHTML = dollars;
    }
};

const getPlusOne = () => {
    countValue += 1;
    dollars += 120;
    if (quantityBlock) {
        quantityBlock.innerHTML = countValue;
    }
    if (displayDollars) {
        displayDollars.innerHTML = dollars;
    }
};

const handlerQuantity = () => {
    if (buttonMinus) {
        buttonMinus.addEventListener('click', getMinusOne);
    }
    if (buttonPlus) {
        buttonPlus.addEventListener('click', getPlusOne);
    }
};

export default handlerQuantity;