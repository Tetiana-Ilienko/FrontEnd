// Spread
const arr1 = [3,4,5];
const arr2 = [1,2, ...arr1, 6,7]

console.log(arr1);
console.log(arr2);

// Копирование оъекта с изменением сво-ва
const person = {firstName: 'John', LastName: 'Doe'};
const updatedPerson = {...person, firstName: 'Jane'};

//Комбинирование массивов
const arrUnion = [...arr1, ...arr2];

//Комбинирование объектов
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, b: 4};
const combineObj = {...obj1, ...obj2};


//  сделать копию масива, удалив один элемент

const numbers = [1, 2, 3, 4, 5];
const index = 2;
const firstHalf = numbers.slice(0,index);
const sekondHalf = numbers.slice(index + 1);
const updatedNumbers = [...firstHalf, ...sekondHalf];
