/ setInterval()

// задание: создать счетчик, который будет вызываться каждую секунду и увеличиваться

const simpleCounter = () => {
  let count = 1;

  // Возвращаем timerID
  const timerID = setInterval(() => {
    console.log(count);
    count++;

    // Отменяем действие setInterval передав timerID в clearInterval через 5 тиков
    if (count > 5) {
      clearInterval(timerID);
    }
  }, 1000);
};

simpleCounter();