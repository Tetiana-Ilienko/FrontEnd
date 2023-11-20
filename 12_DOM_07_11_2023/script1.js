// вызываем дату



setInterval(printTime, 1000) // отображаем дату через функцию

function printTime(){
    const date = new Date();
    const h = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
    const m = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    const s = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();

    const t = `${h} : ${m} : ${s}`;
   // console.log(t);

   time.textContent = t;

   time.style.margin = '10px auto 0'; // внешние отступы для элемента.
   time.style.width = 'fit-content'; //  позволяет элементу принимать ширину, достаточную для размещения его содержимого без переноса на новую строку
}