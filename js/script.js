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
   if(inputNumber.value == '') {
      console.log('Insira um número válido senhor')
   } else {
      if (inputNumber.value == numberSecret) {
         win();
      } else {
         lose();
      }

   }
   inputNumber.value = '';
}

function win() {

   hit();

   numberSecret = raffleNumber();
   chances = 10;
   tentatives.textContent = chances;
}

const h2 = document.querySelector('.title_popup');
const paragraph = document.querySelector('.paragraph_popup');

function hit() {
   h2.textContent = 'You Won';
   paragraph.textContent = "My mental CPU with an IQ of 530 thousand, comes to just one conclusion, you won the machine, Congratulations"
   document.querySelector('.popup').style.display = 'flex'
}

function lose() {

   chances--;
   tentatives.textContent = chances;

   if (chances == 0) {

      endTentatives();
   }
}

function endTentatives() {

      h2.textContent = 'You lost';
      paragraph.textContent = 'We will raffle the secret number again';
      document.querySelector('.popup').style.display = 'flex'

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