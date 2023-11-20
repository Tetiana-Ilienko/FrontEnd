// Promises

// 1 пример: Создаем промис и успешно его завершаем через 1 сек

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success"), 1000);
  });
  
  console.log(promise);
  
  // // 2 пример: Создаем промис и завершаем его через 1 сек с ошибкой
  
  let errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Some error")), 1000);
  });
  
  console.log(errorPromise);
  
  // 3 пример: вызов и resolve и reject
  
  let promiseWithResAndReject = new Promise((resolve, reject) => {
    // Promise вызывает только первую само быстро выполненную ф-ю resolve или
    // reject, остальное он игнорирует!!!
    setTimeout(() => resolve("Success"), 1000);
    reject(new Error("Some Error"));
  });
  
  console.log(promiseWithResAndReject);
  
  // 4 пример: метод then(), catch(), finally()
  
  let promiseWithThenCatchFinally = new Promise((resolve, reject) => {
    // Promise вызывает только первую само быстро выполненную ф-ю resolve или
    // reject, остальное он игнорирует!!!
  
    // пример работы и имтации закгрузки данных по сети
    //   const data = post(url);
  
    //   if (data.status === 200) {
    //     resolve(data);
    //   }
  
    //   if (data.status === 400) {
    //     reject(data.error);
    //   }
    reject(new Error("Some Error"));
    resolve({ name: "Kirill", age: 28 });
  });
  
  promiseWithThenCatchFinally
    .then(
      (result) => {
        console.log(result);
      },
      // В данном случае ошибка обработается в then, а не в catch()
      (error) => {
        console.log("Error in then", error);
      }
    )
    .catch((error) => {
      console.log("Error in catch", error);
    })
    // finally выполниться в любом случае
    .finally(() => {
      console.log("Выключаем спиннер");
    });
  
  console.log(promiseWithThenCatchFinally);
  
  // 5 пример: Имитация работы по сети
  
  // 1 шаг: создаем promise для выполнения асинхронной задачи
  const promiseWithApiImitation = new Promise((resolve, reject) => {
    //эмулировать загрузку данных по сети, мы хотим получить данные пользователя
    console.log("Включаем спиннер");
  
    setTimeout(() => {
      const success = true; //задача выполненна успешно или нет
  
      if (success) {
        resolve({ name: "Kirill", age: 28 });
      } else {
        reject(new Error("Internal Server Error"));
      }
    }, 3000);
  });
  
  promiseWithApiImitation
    .then((result) => {
      console.log(result);
      console.log("Мы получили данные по сети успешно");
      console.log("Запуск Success модалки");
    })
    .catch((error) => {
      console.log(error);
      console.log("Мы получили ошибку");
      console.log("Запуск Error модалки");
    })
    .finally(() => {
      console.log("Выключение спиннера");
    });
  
  const number = 1;
  console.log(number);