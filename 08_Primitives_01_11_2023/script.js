let x;                             // объявление переменной
console.log(x); // undefined       // печать в консоле, переменная объявлена но значение не задано

x = 7;                             // Number тип переменной, для всех чисел                 
x = 'bye';                         // String
// переменной можно переприсваивать другой тип данных 
console.log(x);

const pi = 3.1415926;             // константа
// pi = 3.14; Пример ошибки с переопределением значения константы

let y = x;                        // объявляется переменная и ей присваивается другое значение переменной
console.log(y);

console.log("pi = " + pi);        // вывод на печать а-ля Java
console.log(`pi = ${pi}`);        // вывод на печать а-ля Javaskript

const exp = pi;                   // константе присваивается значение другой константы

console.log("exp = " + exp + " or " + pi);
console.log(`exp = ${exp} or ${pi}`);

x = true;
console.log(x);

x = null;

// Пример конкатенации (склеивание частей в одну строку)
let res = 'true' + 5; // 'true5'
console.log(res);

res = true + 5;        // boolean => number   true = 1, false = 0
console.log(res);     // вывод на печать 6
                      // перевод числа в строку, конкатенация с пустой строкой
res = 5;
console.log(res);
console.log(res + '') // '5'       console.log(String(res));
console.log(typeof res);

res = '5a';
console.log(res);
console.log(+res);  // NaN (Not a number) console.log(Number(res));

console.log(parseInt('5a')); // 5
console.log(+'5a'); // NaN
console.log(Number('5a')) // NaN

console.log(typeof res);
console.log(typeof +res);


//  = == ===

// Нестрогое сравнение (сравниваются значения без учёта типов данных переменных)
x = '2' == 2;
console.log(x);

// Строгое сравнение (сравниваются значения с учётом типов данных переменных)
x = '2' === 2;
console.log(x);

res = 7 % 2;
console.log(res);

res = 0;

switch (res) {
    case 1:
        console.log(`number: ${res}`);
        break;
    case '1':
        console.log(`string: ${res}`);
        break;
    default:
        console.log('It\'s not a 1');
        break;
}

let age = 16;
let vol = age > 16 ? 42 : 1.5;

x = 10;
res = x++ + ++x; // 10 + 12 = 22
console.log(res);
console.log(x);

// false = 0, '', null, NaN, undefined
x = !!x      //  Boolean(x);
console.log(x);

let example = 'hello';
console.log(!!example);

// HomeWork

res = sumDigits(1234); // 1 + 2 + 3 + 4 = 10
console.log(`res = ${res}`);



// BASIC
function sumDigits(x) { // Возвращает сумму цифр числа
    let res = 0;
    while( x > 0){
       let akk = x % 10;
       res += akk;
       x= Math.trunc (x/10);

    }
    return res;
}

res = luckyNumber(123183); // 1 + 2 + 3 == 8 + 7 + 1
console.log(res ? 'Lucky' : 'Unlucky');

function luckyNumber(x) { // Сравнивает сумму цифр первой половины числа со второй
    let resLeft = 0;
    let resRight = 0;

        for(let i = 0; i < 3; i++){
            let akk = x % 10;
            resLeft += akk;
            x= Math.trunc (x/10);
        }
       
        for (let j = 0; j < 3 ;j++){
            let akk = x % 10;
            resRight += akk;
           x= Math.trunc (x/10);
        }
        return resLeft === resRight;   
}

// ADVANCED
// TODO: 'b', 'a' => banana

 res = banana();
console.log(res)


    
function banana() {
    let a = 'a';
    let b = 'b';
    let sum = b + a;
    b = 'n'
    return sum + b + a + b + a;
    

    
}
   
