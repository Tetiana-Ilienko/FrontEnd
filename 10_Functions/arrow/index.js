// Arrow function
const sum = (a, b) => a + b;
const res = sum(8, 9);

const sumVer2 = (a, b) => {
  return a + b;
};
console.log(sumVer2(2, 2));

const print = () => {
  console.log("Example");
};

// Как передавать функции в качестве параметров?

function calculate(a, b, operation){
  return operation(a, b);
}
// Пример с заранее созданной функцией sum - см строку №2
const res1 = calculate(9, 10, sum);
console.log(res1);
// Пример с передачей стрелки в вызов функции
const res2 = calculate(20, 5, (a, b) => a - b);
console.log(res2);
// Пример с передачей анонимной функции в качестве параметра
const res3 = calculate(
  20, 
  5, 
  function(a, b){
   return a - b;
  }
);

// 
// создайте функцию cook, которая принимает три параметра:
// 1. ингридиент1
// 2. ингридиент2
// 3. функция - которая описывает метод приготовления 
// - должна просто выводить в консоль

// Пример
// cook("яйцо", "лук", recipe)
// "Жарим яйцо и добавляем лук, вуаля, кушать подано"

function cook(ingredient1, ingredient2, recipe){
  recipe(ingredient1, ingredient2);
}

const casseroleRecipe =  (ingredient1, ingredient2) => {
  console.log(`
  Почистите ${ingredient1}. 
  Разогрейте духовку до 200 градусов.
  Положите ${ingredient1} и ${ingredient2} в форму и положите в духовку.
  Запекайте пока не поймете JS
  `);
};
cook('картофель', "мясо", casseroleRecipe);
cook('патат', "рыба", casseroleRecipe);

// Некоторые тонкости использвоания this
const cat = {
  name: "Murka",
  meow(){
    console.log(`Myay-maya, ${this.name}`);
  }
}
cat.meow(); // Myay-maya, Murka

const cat1 = {
  name: "Murka",
  meow: function(){
    console.log(`Myay-maya, ${this.name}`);
  }
}
cat1.meow(); // Myay-maya, Murka

const cat2 = {
  name: "Murka",
  meow: () => {
    console.log(`Myay-maya, ${this.name}`);
  }
};
cat2.meow(); // Myay-maya, undefined