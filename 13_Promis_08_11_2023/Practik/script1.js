// setTimeout()
// 1 пример: создать функцию, которая выводит сообщение "Прошло 3 секунды"
// через 3 секунды после вызова с использованием setTimeout()

const showMessage = () => {
    // создаем setTimeout, c задержкой 3 сек
    setTimeout(() => console.log("Прошло 3 секунды"), 3000);
  };
  
  showMessage();
  
  console.log("Hello World");
  
  // 2 пример: такой же как первый, но с передачей аргумента
  
  const showMessageWithArgs = () => {
    const sayTime = (message) => console.log(message);
    // создаем setTimeout, c задержкой 3 сек
    setTimeout(sayTime, 3000, "Прошло 3 секунды");
  };
  
  showMessageWithArgs();
  
  console.log("Hello World2");
  
  // 3 Задача: сделать подсчет до 10 с выводом в консоль каждую секунду
  
  const countToTen = () => {
    // обьявем переменную count === 1
    let count = 1;
  
    function increment() {
      console.log(count);
  
      // если count<10, то вызываем функцию setTimeout, которая вызывает рекурсионно функцию increment
      // и увеличиваем счетчик на 1
      if (count < 10) {
        count++;
        setTimeout(increment, 1000); // увеличивает счетчик каждую секунду
      }
    }
  
    increment();
  };
  
  // вызов функции countToTen
  countToTen();