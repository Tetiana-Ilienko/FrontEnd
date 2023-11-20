const library = [];

let inputDate = prompt('Enter book data separate by ";"' ) // пользователь вводит в окно информацию
// '123456789;Gold Fish;A.S. Pushkin;1820'
//console.log('isbn;title;author;year'.split(';'));

//console.log(inputDate);


while(inputDate){
    const bookData = inputDate.split(';') //  из введенной строки получили массив
    const [isbn, title, author, year] = bookData //  дестриктуризация
    
    
    if(
        bookData.length === 4 
        // при деструктиразации мы можем обращаться к названию(ключу)
        && bookData[0] // isbn 
        && bookData[1] // title
        && bookData[2] // author
        && bookData[3] // year 
        && findBook(bookData[0]) === -1 ){

    }
    library.push({
        isbn: bookData[0],   // isbn -  если ключ и значение совпадают пишем
        // один раз название ключа
        title: bookData[1],  // title
        author: bookData[2], // author
        year: bookData[3]    // year

    })

    inputDate = prompt('Enter book data separate by ";"' ) 
}


function printLibrary(){
    for (let index = 0; index < library.length; index++) {
       console.log(library[i]);
        
    }

}

printLibrary();

function findBook(isbn){ // return index of this book or -1 if book not exist
    for (let i = 0; i < library.length; i++) {
        if(isbn === library[i].isbn){
            return i;
        } else {
            return -1;
        }
        
    }                      

}