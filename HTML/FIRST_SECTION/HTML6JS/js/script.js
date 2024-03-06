// for(let i = 0 ; i < 3; i++){
// 	console.log(i);
// }

// function divideNumber(x,y){
// 	console.log(x / y);
// }
// divideNumber(5,5)

// function loopfirsst( name , surname) {
// 	console.log(`My name is ${name} and my surname is ${surname}`);
// }

// loopfirsst( 23 , 34 )

// const tableFirst = [1,2,3,4,5,6]
// for (let index = 0; index < tableFirst.length; index++) {
// 	console.log(tableFirst[index]);

// }
// function addNumbers( x , y , z) {
// 	console.log( x + y * z);
// }
// addNumbers(1 , 2 , 3 )
// if (tableFirst.length > 5) {
// 	console.log(`true`);
// } else {
// 	console.log(`false`);
// }

// console.log(`tablica z cyframi ma ${tableFirst.length} elementow`);

// const p = document.querySelector('.test')
// const s = document.querySelectorAll('li')
// const allP = document.querySelectorAll('p')

// const btn1 = document.querySelector('#btn1')
// const btn2 = document.querySelector('.btn2')

// console.log(btn1 , btn2);

// function handleClick() {
// 	console.log(`kliknieto przycisk`);
// }
// function addNumbers() {
// 	console.log(1+1);
// }

// btn1.addEventListener('click' , handleClick)
// btn2.addEventListener('click' , addNumbers)

const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('.btn2')
const square = document.querySelector('.color')
const removeColor = document.querySelector('.remove-color')
const btn3 = document.querySelector('.btn3')

function redColor() {
	// square.classList.add('red')
	// square.classList.remove('blue')
	square.classList.toggle('red')
}
function blueColor() {
	square.classList.add('blue')
	square.classList.remove('red')
}
function removeColors() {
	square.classList.remove('red')
	square.classList.remove('blue')
}
function addAnimation() {
	square.classList.add('animation')
}

btn1.addEventListener('click', redColor)
btn2.addEventListener('click', blueColor)
removeColor.addEventListener('click', removeColors)
btn3.addEventListener('click', addAnimation)
