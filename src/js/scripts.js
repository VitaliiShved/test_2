var display = document.getElementById('display');
// var buttonsContainer = document.getElementById('buttons-container');

document.querySelectorAll('.buttons')
    .forEach(button => button.addEventListener('click', e => {
        display.value += e.target.textContent;
    }))

document.querySelector('.equals')
    .addEventListener('click', e => {
        try {
            display.value = operation(display.value);
        } catch (error) {
            display.value = 'Помилка';
        }
    })

document.querySelector('.cleardisplay')
    .addEventListener('click', e => {
       display.value = ''
    })

// buttonsContainer.addEventListener('click', function(event) {
//     if (event.target.tagName === 'BUTTON') {
//         if (event.target.classList.contains('buttons')) {
//             display.value += event.target.textContent;
//
//         // if (event.target.classList.contains('buttons')) {
//         //     // Проверка первого символа
//         //     if (display.value === '' && event.target.textContent !== '-' && isNaN(event.target.textContent)) {
//         //         // Если строка ввода пуста и введенный символ не является минусом или числом, игнорируем его
//         //         return;
//         //     }
//         //     // Проверка, является ли содержимое кнопки числом
//         //     if (!isNaN(event.target.textContent)) {
//         //         display.value += event.target.textContent;
//         //     } else if (event.target.textContent === '-' && display.value === '') {
//         //         // Добавляем минус только если строка ввода пуста
//         //         display.value += event.target.textContent;
//         //     }
//
//
//         } else if (event.target.classList.contains('cleardisplay')) {
//             display.value = '';
//         } else if (event.target.classList.contains('equals')) {
//             try {
//                 display.value = operation(display.value);
//             } catch (error) {
//                 display.value = 'Помилка';
//             }
//         }
//     }
// });


function operation(mathString) {
    return new Function('return ' + mathString)();
}

// через eval
// function operation(expression) {
//     return eval(expression);
// }
