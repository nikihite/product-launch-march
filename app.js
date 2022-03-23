console.log('hello world from app.js');

let dog = `Bear`;

console.log(`My dog's name is ${dog}`);
console.log(`${dog} is very cute.`);

const button = document.getElementById('button');

button.addEventListener('click', ()=>{ 
    console.log('i am clicking the button');

const inputs = document.getElementById('email-inputs');

inputs.classList.toggle('hide');

const thankYou = document.getElementById('thank-you');

thankYou.classList.toggle('hide');
});