// Методы массивов!!!

// Строковый метод split()
console.log("Aлексей".split(""));

//------------------------- Метод map()

// Создать новый массив который будет увеличивать каждый элемент массива на 5

const newNumbers = [1, 2, 3, 4, 5].map((currentValue) => {
    return currentValue + 5;
})

console.log(newNumbers);

// сумма значений и индексов для нового массива

const arraySum  = [1, 2, 3, 4, 5].map((currentValue, index) => {
    return currentValue + index;
})

console.log(arraySum);

// Использование array парраметра

const arraySumWithArrayMethod = [1, 2, 3, 4, 5].map((currentValue, index, array) => {
    return array[index] + currentValue;
})

console.log(arraySumWithArrayMethod);

// ----------------!!!forEach() method example

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const forEachResult = arr2.forEach((value, index) => {

    if(index === 5) {
        return;
    }
    arr1.push(value); // в первый массив, добавляем второй
    // post(url, value)

})

console.log(arr1);
console.log(arr2);
console.log(forEachResult);

// ----------filter() method
// создать новый массив без Kate
const names = ['Aleksei', "Gleb", "Anastasia", "Alex", "Kate"];
const newNames = names.filter((value) => value !== "Kate"); // создать новый массив без Kate

console.log(names)
console.log(newNames);

// --------------  array method find();

const names2 = ["Aleksei", "Gleb", "Anastasia", "Alex", "Kate"];
const newNames2 = names2.find((value) => value === "Aleksei");

console.log(names2);
console.log(newNames2);

// 2 пример
const companyNames = [
  { name: "Kate", age: 28 },
  { name: "Alex", age: 30 },
  { name: "Roma", age: 40 },
];
const newCompanyNames = companyNames.find((value) => value.name === "Leha");

console.log(companyNames);
console.log(newCompanyNames);

// -------------  Array method reduce()

const digits = [0,1,2,3,4,5];

const newdigits = digits.reduce((accumulator, currentValue) =>{
    console.log(accumulator, currentValue)
    return accumulator + currentValue
})

console.log(digits);
console.log(newdigits);

// -------------  Array method reverse()

const numbers = [0,1,2,3,4,5];

console.log(numbers.reverse());

// --------------  some() array method

const isNameFound = ["Alex", "Gleb", "Kate", "Roma"].some(
  (value) => value === "Roma"
);

console.log(isNameFound); // возвращает булевое значение

//example some() 2

const isNumberFound = [0, 1, 2, 3,4].some(
    (value) => value === "Roma"
  );
  
  if(isNumberFound) {
   console.log('Some post request')
  }
  console.log(isNameFound);


  const numberWithMethodFind = [0, 1, 2, 3,4].find(
    (value) => value === 300
  );
  
  if(numberWithMethodFind === 300) {
    console.log('Some post request')
}
  console.log(numberWithMethodFind);


// ---------------- every() method

const isAllValuesEqualToFive = [5,5,5,5,4].every((value) => value === 5);

console.log(isAllValuesEqualToFive)

//----------- метод includes()

console.log([1,2,3,4,5].includes(1)); // возвращает булеан, включает или нет


// ---------------- method isArray()

//Данные пришли с сервера 
const dataFromServer = '1,2,3,4';

console.log(Array.isArray(dataFromServer));

if(Array.isArray(dataFromServer)) {
    console.log(dataFromServer.includes(1));
}