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