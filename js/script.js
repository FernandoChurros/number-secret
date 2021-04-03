const inputNumber = document.querySelector('#inputNumber');
const btn = document.querySelector('#btn');
const tentatives = document.querySelector('#tentatives');
const resultDiv = document.querySelector('#resultDiv');
const p = document.createElement('p');
let chances = 10;

function raffleNumber() {
   let numberSecret = parseInt(Math.random() * 101);
   console.log(numberSecret);
   return numberSecret;
}
let numberSecret = raffleNumber();  

function validation() {
      if (inputNumber.value == numberSecret) {
         win();
      } else {
         lose();
      }

      inputNumber.value = '';
   }

function win() {

   numberSecret = raffleNumber();
   chances = 10;
   tentatives.textContent = chances;

   hit();
}

function hit() {
   const h1 = document.querySelector('.title_popup');
   h1.textContent = 'You Won';
   const p = document.querySelector('.paragraph_popup');
   p.textContent = "My mental CPU with an IQ of 530 thousand, comes to just one conclusion, you won the machine, Congratulations"
   document.querySelector('.popup').style.display = 'block'
}

function lose() {

   chances--;
   tentatives.textContent = chances;

   if (chances == 0) {
      document.querySelector('.popup').style.display = 'block'
      endTentatives();
   }
}

function endTentatives() {

      numberSecret = raffleNumber();
      chances = 10;
      tentatives.textContent = chances;
}

const btnClose = document.querySelector('.btn_close');
function closePopUp() {
   document.querySelector('.popup').style.display = 'none';
}
btnClose.addEventListener('click', closePopUp);
btn.addEventListener('click', validation);