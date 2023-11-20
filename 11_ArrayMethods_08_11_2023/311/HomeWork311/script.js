

const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];
// 1 задача (Lesson 11  (31.1))
const carsNew = cars.map( car => {
    return {
        brand: car.brand,
        isDiesel: car.isDiesel
    }
});
console.log(carsNew);
// 1 вариант
const newArrayCassel = cars.map((value) => {
    const {price, ...rest} = value; // Вытаскиваем свойство price из объекта value и все остальные свойства помещаем в объект rest. 
                                    //Этот оператор называется "spread operator" и создает новый объект, содержащий все свойства, кроме указанных.
    return {...rest};
})

// 2 способ c методом forEach(), и rest оператором

const newArrayCase2 = [];

cars.forEach((value) => {
  const { price, ...rest } = value;

  newArrayCase2.push(rest);
});

console.log(cars);
console.log(newArrayCase2);

// Как работает rest и spread

const newArrayWithRest = cars.map((value) => {
    // Порядок деструктуризации не важен, первым может быть и brand
    //   const { price, isDiesel, brand } = value;
    const { price, ...rest } = value;
  
    console.log(price);
    console.log(rest);
  
    // const newPrice = value.price;
    // const isDiesel = value.isDiesel;
  
    return rest;
  });
  
  console.log(newArrayWithRest);

  // 3 вариант решения задачи - с использованием метода delete и map()

const newArrayCase3 = cars.map((values) => {
    // клонируем обьект
    const { ...rest } = values;
    // удаляем св-во price из нового обьекта
    delete rest.price;
  
    // возвращаем новые обьекты
    return { ...rest };
  });
  
  console.log(newArrayCase3);
  




const carsBensin = cars.filter((car) => car.isDiesel === false);
console.log(carsBensin);



const carsDisel = cars.filter((car) => car.isDiesel === true);
console.log(carsDisel);

// Задача 4 
const sum = carsBensin.reduce((akk, car) => akk + car.price, 0 );
console.log(sum);

// Правильный вариант

const newArrayWithReduce = cars
  // отфильтровали массив cars c машинами у которых isDiesel === false
  .filter((values) => !values.isDiesel)
  // сумма всех price
  .reduce((accumulator, currentValue) => {
    
    
    // неправильный вариант решения , т.к мы пытаемся вызвать price так 22000.price
    // console.log(accumulator.price);
    // console.log(currentValue.price); // 22000.price
    // return accumulator.price + currentValue.price;
   
   
    console.log("acc =", accumulator);
    console.log("currentValue =", currentValue.price);
    return accumulator + currentValue.price;
  }, 0);

console.log(newArrayWithReduce);


// Задача 5
const carsNew1 =cars.map((car) => {
    return car.price * 1.2
} );
console.log(carsNew1);




const newCarsTesla = cars.map((car) => {
    if (car.isDiesel === true){
       return { brand: "Tesla",
         price: 25000, 
         isDiesel: false }
    } else 
    return car;
});
console.log(newCarsTesla);


let name1 = 'education'

function converter(name){
    const arr = name.split('');
    return (arr.reverse()).join('');
}

const res = converter(name1)
console.log(res);