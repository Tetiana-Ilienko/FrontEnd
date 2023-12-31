

## Метод fetch()
 - это современный API для выполнения сетевых запросов в JavaScript.
   Он предоставляет простой и гибкий интерфейс для взаимодействия с ресурсами (например, с серверами)
   по сети.


## Метод json() 
   - это метод объекта Response в JavaScript, который читает тело ответа в формате JSON. Этот метод возвращает Promise, который разрешается с JavaScript-объектом, представляющим разобранный JSON.

   Деструктуризация в JavaScript - это особенность синтаксиса, которая позволяет извлекать значения из объектов или массивов и присваивать их переменным с использованием более компактного синтаксиса. Давайте рассмотрим примеры для объектов и массивов:

## Деструктуризация объектов:
  

-  Деструктуризация объекта
const { name, age, city } = person;
  // Объект
const person = { name: 'John', age: 30, city: 'New York' };

 - Использование переменных
console.log(name); // 'John'
console.log(age);  // 30
console.log(city); // 'New York'


 - Деструктуризация массивов:

// Массив
const colors = ['red', 'green', 'blue'];

// Деструктуризация массива
const [firstColor, secondColor, thirdColor] = colors;

// Использование переменных
console.log(firstColor);  // 'red'
console.log(secondColor); // 'green'
console.log(thirdColor);  // 'blue'


-Деструктуризация может быть полезной, когда вам нужны только определенные свойства объекта или элементы массива. Она также улучшает читаемость кода и сокращает объем кода.





