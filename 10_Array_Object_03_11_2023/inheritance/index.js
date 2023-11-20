// Наследование
class Animal {
    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        
    }

    hello(){
        console.log("Mein name " + this.name);
    }
}
// ---------------------------------------
const whale = new Animal ("Zig", 200, 8_000);
whale.hello();

console.log(whale.name)// отдельно обратились к полю

class Snail extends Animal{
    constructor(name, age, weight, speed){
        super(name, age, weight);
        this.speed = speed;

    }

    rich(){
        console.log ("Ich laufe mit "  + this.speed)
    }
}

const speedy = new Snail ("Speedy", 1, 0.1, 0.001);
speedy.rush();

// ---------------------------------------------
class Alcohol{
    constructor(title, strength, volume){
        this.title = title;
        this.strength = strength;
        this.volume = volume;

    }
    info(){
        console.log(`Ни дня без ${this.title}`)
    }
}

class Brendy extends Alcohol{
    constructor(title, strength, volume,age, country){
        super(title, strength, volume);
        this.age = age;
        this.country = country;
    }
}

class Liquere extends Alcohol{
    constructor(title, strength, volume, sugarAmount){
        super(title, strength, volume);
        this.sugarAmount = sugarAmount;
    }
}
    

const brendy = new Brendy ("Cognac", 40, 0.5, 12, "Frankrich");
brendy.info();

// getters setters 
// приватные поля с решеточки
class Rectangle {
    #sideA;
    #sideB;
    constructor(sideA, sideB){
      this.#sideA = sideA;
      this.#sideB = sideB;
    }
    get sideA(){
      return this.#sideA;
    }
    set sideA(sideA){
      this.#sideA = sideA;
    }
  }
  
  const rect = new Rectangle(10, 5);
  console.log(rect.sideA); // использовали геттер
  rect.sideA = 12; // изменили - это возможно благодаря сетеру
  console.log(rect.sideA);
  // для sideB мы не написали - поэтому не сможем изменить или получить
  
  console.log();


  /*Задание 1
Создайте классы: Plant, Rose.
Роза должна наследовать Растение. Пусть у растения будут поля:

рост,
возраст.
И метод grow, который увеличивает его рост на 10 см.

У розы должно быть поле - количество бутонов (numberOfFlowers). Создайте объект класса розы, вызовите метод.
   */

class Plant{
    constructor(hight, age){
        this.hight = hight;
        this.age = age;
    }

    grow(){
        this.hight = this.hight + 10; // this.hight += 10;
    }
}
class Rose extends Plant{
    constructor(hight, age, numberOfFlowers){
        super(hight, age);
        this.numberOfFlowers = numberOfFlowers;
    }
}

const rose = new Rose(50, 2, 8);
rose.grow();

// создание объекта literal
const x = {hight:200, age: 2 } //  распространенный метод