console.log('Hello wold');
console.log(5+4);

// однострочный комметн
/* как в Java  можно комментировать
в несколько строк
*/

console.log(document.body);
/*
const - константа(переменная не может  быть переопределена)
let - переменная
первые две - блочная область видимости

var - устаревшее значение название переменной - имеет глобальную облать видимости

*/ 

let a = 10;
console.log(a);

a = '15';
console.log(a);

const div1 = document.getElementById('div1');
console.log(div1);

console.log(div1.style.border);

div1.style.border = '1px solid black';

const div1Query = document.querySelector('#div1');
console.log(div1Query);

const pDiv1 = document.querySelectorAll('#div1 > p');
console.log(pDiv1);

for (let i = 0; i < pDiv1.length; i++) {
    pDiv1[i].innerHTML = `<span>new text ${i + 1}</span>`; // "<span>new text " + i + " </span>"
}

const children = div1.children;
console.log(children.length);

for (let i = 0; i < children.length; i++) {
    children[i].style.color = 'red';    
};

const newP = document.createElement('p');
console.log(newP);

const newPText = document.createTextNode('This text was created by special method');

newP.appendChild(newPText);

div1.appendChild(newP); // div1.insertBefore(newP) - в начало



//  HomeWork

setInterval(move, 20) // задаем интервал
let pos = 0;// счетчик
const box = document.getElementById('box'); // какой элемент вызываем

let direction = 1; //  движение вниз вправо
                   // -1 - движение в обратную сторону

function move() {
    //pos++;
    pos = pos + direction;
    
   
    if (pos === 150) {
        // clearInterval(t)
       direction=-1;
      
       
    }else if (pos === 0){
        direction = 1;
        
    }
    box.style.top = pos + 'px'; // назначет новое положение
    box.style.left = pos + 'px';
    
} 

setInterval(move1, 20)
let posX = 0;
let posY = 0;

let directionX = 1;
let directionY = 0;

const box1 = document.getElementById('box1');
function move1(){

    posX +=directionX;
    posY += directionY
    
    if(posX == 150 && posY == 0 ){
      
       directionX = 0;
       directionY = 1
       box1.style.backgroundColor = 'green';
    }
    
    if( posY== 150 && posX == 150){
        directionY = 0;
        directionX = -1;
        box1.style.backgroundColor = 'yellow';

    }
    if( posY== 150 && posX == 0){
        directionY = -1;
        directionX = 0;
        box1.style.backgroundColor = 'red';
       

    }
    if( posY== 0 && posX == 0){
        directionY = 0;
        directionX = 1;
        box1.style.backgroundColor = 'rgb(0, 174, 255)';

    }
    
    box1.style.left = posX + 'px';
    box1.style.top = posY + 'px';



}