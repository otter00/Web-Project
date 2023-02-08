/*      AUTHORIZATION CHANGE        */

let button = document.querySelector(".login-form__btn");
let form = document.querySelector('#login__form');
let errors = [];

let genderM = document.getElementById('genderM');
let genderW = document.getElementById('genderW');

let gender1 = false;
let gender2 = false;

//Проверка для каждого поля (поля получаем по одному в функции ниже в цикле)
function checkValidity(input) {
    let validity = input.validity;
    let inpName = input.name;

    if (input.value == "") {
        errors.push(`Поле ${inpName} не заполнено`); }

    if (validity.patternMismatch) 
		{ errors.push(`Неверный формат заполнения ${inpName}`); }
    
		if (validity.tooLong) 
		{ let maxlength = input.maxLength;
			errors.push(`Слишком длинное значение ${inpName}! Максимальная длина:  ` + maxlength + `<br>`); }
    
		if (validity.tooShort) 
		{ let minlength = input.minLength;
			errors.push(`Слишком короткое значение ${inpName}! Минимальная длина: ` + minlength + `<br>`); }

        if (validity = false) {
            alert('Welcome!');
        }
}

button.addEventListener('click', ()=>{
//Проверка для всех полей
	//получаем все инпуты
    let inputs = document.querySelectorAll("input");

    regexp = /[A-Za-zА-Яа-яЁё]/gi; 

	//перебираем их и на каждый вызываем функцию валидации
    for (let input of inputs) {
        //console.log(input);
        checkValidity(input);
    }

    if (genderM.checked) {
        gender1 = true; 
        gender2 = false;
    }
    if (genderW.checked) {
        gender2 = true; 
        gender1 = false;
    }
    if ((gender1 == false) && (gender2 == false)) {
        errors.push(`Поле gender не заполнено`);
    }

    if (!document.getElementById("login__input").value.match(regexp)) {
        errors.push(`${document.getElementById("login__input").name} некорректно`);
    }

	//выводим ошибки в div 
    let errorDiv = document.querySelector('.errors__info');
    errorDiv.innerHTML = errors.join('\n');

    if (errors.length == 0) {
        alert(`Welcome, ${document.getElementById("login__input").value}`);
        location.reload(); //перезагружаем страницу, если всё введено корректно, 
        //чтобы очистить поля для дальнейшего ввода
        window.location.href = 'htmls/studios.html';
    }

    errors = []; //чистим массив

});