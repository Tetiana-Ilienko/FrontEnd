'use strict'
// 1. Function declaration - объявление функции
function sum(a, b){
    return a + b;
  }
  
  const res = sum(2, 4);
  console.log(res); // 6
  
  // 
  const res2 = sum(2, "4");
  console.log(typeof res2); // 'string'
  
  // передал параметр
  const res3 = sum(3);
  console.log(res3); // NaN
  
  let res4 = print(); // в f declaration вызов может быть до объявления
  function print(){
    console.log("Example");
  }
  console.log(res4); // undefined
  
  // 2. Function expression - функциональное выражение
  // divide(9, 3); // нельзя вызвать до объявления - для них 
  // hoisting - поднятие 
  // coersion - неявное преобразование типа - вчера рассматривали на примере == 
  let x = 10;
  let divide = function(a, b){
    return a / b;
  };
  const res5 = divide(9, 3);
  
  const calculator = {
    brand: "casio", 
    divide, 
    sum, 
    subtract: function(a, b){
      return a - b;
    }
  };
  
  const res6 = calculator.divide(9, 3);
  console.log(res6);
  const res7 = calculator.sum(2, 2);
  console.log(res7);
  const res8 = calculator.subtract(9, 3);
  console.log(res8);
  
  // частный случай - default parameters
  function hello(name = "Незнакомец"){
    console.log(`Привет, ${name}`);
  }
  
  // function call - (invocation) - вызов функции
  hello();        // Привет, undefined заменилось на Привет, Андрей
  hello("Семен"); // Привет, Семен
  
  // y = 10; // в строгом режиме - вызовет ошибку - см самый верх файла
  // console.log(y);
  
  function foo(){
    "use strict"
    // для кода дальше работает строгий режим
  }