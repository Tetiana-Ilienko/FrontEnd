/*
Асинхронное действие в JavaScript относится к операциям, 
которые выполняются в фоновом режиме, не блокируя выполнение 
основного кода. Это позволяет создавать отзывчивые веб-приложения, 
которые могут выполнять несколько задач одновременно, 
включая ввод-вывод (например, загрузка данных с сервера), 
анимации и обработку пользовательского ввода, не блокируя интерфейс.
*/

function getFiveAfterSevenSec(){
    setTimeout( () => {
        return 5;
    }, 7000);

};

let res = getFiveAfterSevenSec();

// PROMISE

let promise =new Promise(function (resolve,reject) { //  удачноу завершение промиса
    setTimeout(() => resolve(5) , 7000);
    reject(new Error('Some error'));

});



promise.then(value => value +5)
        .then(newValue => console.log(newValue))
        .catch(error => console.log(error)
        .finally(console.log('Напечатает текст при любом исходе')))