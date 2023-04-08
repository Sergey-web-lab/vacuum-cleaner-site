export function counterPrice() {

    const btnMinus = document.querySelector('[data-action="minus"]');
    const btnPlus = document.querySelector('[data-action="plus"]');
    const counter = document.querySelector('[data-counter]');
    const pricePrimary = document.querySelector('[data-pricePrimary]');
    const price = document.querySelector('[data-price]');

    btnMinus.addEventListener('click', () => {
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
            price.innerText = parseInt(price.innerText) - parseInt(pricePrimary.innerText);
        }
    });

    btnPlus.addEventListener('click', () => {
        counter.innerText = ++counter.innerText;
        price.innerText = parseInt(price.innerText) + parseInt(pricePrimary.innerText);
    });
}

export function delivOrSelfFormHideShow() {
    const deliv = document.querySelector('[data-deliv]');
    const notDeliv = document.querySelector('[data-notDeliv]');
    const hideShowBlock = document.querySelector('[data-hideShowBlock]')
    const AboutNotDeliv = document.querySelector('[data-hideShowAboutNotDeliv]')

    notDeliv.addEventListener('click', () => {
        hideShowBlock.classList.add('hidden');
        AboutNotDeliv.classList.remove('hidden');
    });
    deliv.addEventListener('click', () => {
        hideShowBlock.classList.remove('hidden');
        AboutNotDeliv.classList.add('hidden');
    });
}

export async function handleFormSubmit() {

    formValidationAndGetFormValues()
    function formValidationAndGetFormValues() {

        let form = document.getElementById('form'),
            formValidity = true,
            inputNameAndSurname = document.getElementById('inputNameAndSurname'),
            inputPhone = document.getElementById('inputPhone'),
            inputDelivery = document.getElementById('inputDelivery'),
            inputPickup = document.getElementById('inputPickup'),
            inputAddress = document.getElementById('inputAddress'),
            inputDateAndTime = document.getElementById('inputDateAndTime');

        form.onsubmit = function (e) {
            e.preventDefault();
            validatePhone();
            validateAddress();
            validateDateAndTime();
            if (formValidity) {
                getFormValues();
            } else formValidity = true;

            function validatePhone() {
                let re = /^[\d\+][\d\(\)\ -]{4,18}\d$/;
                let phone = inputPhone.value;
                let valid = re.test(phone);
                if (valid) {
                    inputPhone.classList.remove('error');
                } else {
                    inputPhone.classList.add('error');
                    formValidity = false;
                    inputPhone.focus();
                    alert('Пожалуйста, укажите в поле "Телефон" настоящий номер телефона');
                }
            }

            function validateAddress() {
                let re = /^[а-яА-Я0-9-\., ]{0,30}$|^[a-zA-Z0-9-\., ]{0,30}$/;
                let address = inputAddress.value;
                let valid = re.test(address);
                if (valid) {
                    inputAddress.classList.remove('error');
                } else {
                    inputAddress.classList.add('error');
                    if (inputDelivery.checked) {
                        formValidity = false;
                        inputAddress.focus();
                        alert('Пожалуйста, укажите в поле "Адрес доставки" адрес, написанный либо на русском, либо на анлийском языке');
                    }
                }
            }

            function validateDateAndTime() {
                let dateNow = new Date();
                let DateAndTime = new Date(inputDateAndTime.value);
                let valid = DateAndTime > dateNow;
                // console.log(`Trtr DateAndTime ${DateAndTime}`)
                // console.log(`Trtr dateNow ${dateNow}`)
                if (valid) {
                    inputDateAndTime.classList.remove('error');
                } else {
                    inputDateAndTime.classList.add('error');
                    if (inputDelivery.checked) {
                        formValidity = false;
                        inputAddress.focus();
                        alert('Пожалуйста, укажите в поле "Дата и время" не прошедшую дату');
                    }
                }
            }

            function getFormValues() {
                const data = {
                    nameAndSurname: inputNameAndSurname.value,
                    phone: inputPhone.value,
                    delivery: inputDelivery.checked,
                    pickup: inputPickup.checked,
                    address: inputAddress.value,
                    dateAndTime: inputDateAndTime.value,
                };
                console.log(data);
            }
        }
    }
}

