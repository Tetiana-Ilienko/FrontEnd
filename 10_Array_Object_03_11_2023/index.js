// Методы обьектов

// 1. Object.keys()

const person = {
    name: "Kate",
    age: 28,
    job: "QA",
    privet: true,
    status: "blocked",
  };
  
  console.log(person["age"]);
  
  const personKeysArray = Object.keys(person);
  console.log(personKeysArray);
  
  console.log(
    personKeysArray.some((values) => {
      if (values === "age") {
        return person[values] === 28;
      }
    })
  );
  
  // 2. Object.values()
  
  const person2 = {
    name: "Kate",
    age: 28,
    job: "QA",
    privet: true,
    status: "blocked",
  };
  
  const personValuesArray = Object.values(person2);
  console.log(personValuesArray);
  
  //3. delete method
  
  const employee = {
    name: "Kate",
    age: 28,
    job: "QA",
    privet: true,
    status: "blocked",
    props: {
      name:'Sergey',
      props: {
          
      }
    }
  };
  
  const employeeClone = {...employee};
  
  console.log(employee);
  
  delete employee.status;
  
  console.log(employee);
  console.log(employeeClone);