const stock = {
    items:[], 
    totalCost: 0,
    addItem(item){
        const existingItem = this.items.find(e => e.name === item.name)// наличие товара на складе
        if (existingItem){ // проверяем, есть ли на склае такой товар
            existingItem.quantity += item.quantity; // увеличиваем коичество
            existingItem.price = 
                existingItem.price < item.price ? item.price : existingItem.price; // если цена за новую партию меньше
                // новой, оставляем старую, иначе весь товар продается по новой цене

        } else {
            this.items.push(item); //  если товара нет, принимаем его
        } ;
         this.updateTotalCost();
    },
    removeItem(itemName, count) {
        // находим индекс искомого элемента в массиве
        const index = this.items.findIndex(e => e.name === itemName);
        // если элемент в массиве есть - удаляем его методом splice()
        if(index !== -1 && count<= this.items[index].quantity){ 
            count ===  this.items[index].quantity ? this.items.splice(index,1): this.items[index].quantity -= count;
            this.updateTotalCost();
        } else{
            console.log('Товара не достаточно на складе для списания, либо такого товара нет');
        }


    },
    updateTotalCost(){
        //  для того, чтобы посчитать общую сумму на складе
        this.totalCost = this.items.reduce((acc,item) => acc + item.price * item.quantity, 0);
        console.log(this.totalCost);
    }
}

add.onclick = addHandler;

 function addHandler(){
    const name = productName.value.trim();
    const price = +productPrice.value;
    const quantity = +productQuantity.value;

    if(name && price && quantity){
        stock.addItem({name, price, quantity});
    };
    productsList.innerHTML = ''; //  обнуляем список

    stock.items.forEach(e => {
        const li = document.createElement('li');
        li.textContent = `
        Product name: ${e.name},
        Product price: ${e.price},
        Product quantity: ${e.quantity}
        `;
        productsList.appendChild(li);
    })



 }

 stats.onclick = function(){
    // Кол-во позиций
    // Итоговая стоимость всех продуктов
    // Итоговое кол-во всех продуктов
    // Максимальная цена
    // Минимальная цена
    // Средняя цена
    if(stock.items.length){
        const itemsQuantity = stock.items.length // количество позиций или длинна массива
        const totalCost = stock.totalCost;
        const totalQuantity = stock.items.reduce((acc, item) => acc + item.quantity, 0);
       // 1 способ
       const maxPrice =  Math.max(...stock.items.map(e => e.price));

      // 2 способ
      const minPrice =  stock.items.reduce((min, item) => item.price < min ? item.price : min, Number.MAX_VALUE);
      

      const avgPrice = totalCost/totalQuantity;

      
        statsList.innerHTML = `
        <li>
        <p>Number ot items: ${itemsQuantity}</p>
        <p>Total cost: ${totalCost}</p>
        <p>Total Quantity: ${totalQuantity}</p>
        <p>Min price: ${minPrice}</p>
        <p>Max price: ${maxPrice}</p>
        <p>Avg price: ${avgPrice}</p>
        </i>
        `

        
      }
    }
 






//проверка в консоли
// stock.addItem({name: 'milk', price: 7,  quantity: 100})
// stock.updateTotalCost();
// console.log(stock.items);


// stock.addItem({name: 'milk', price: 7, quantity: 38})
// stock.updateTotalCost();
// console.log(stock.items);


// stock.addItem({ name: 'milk', price: 8,quantity: 38})
// stock.updateTotalCost();
// console.log(stock.items);


// stock.removeItem('milk', 76);
// stock.updateTotalCost();
// console.log(stock.items);

// stock.addItem({ name: 'bread', price: 7, quantity: 50})
// stock.updateTotalCost();
// console.log(stock.items);
