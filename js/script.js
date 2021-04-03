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

function showResult(result) {
   p.textContent = result;
   resultDiv.appendChild(p);
}

function validation() {
      if (inputNumber.value == numberSecret) {
         win();
      } else {
         lose();
      }

      inputNumber.value = '';
   }

function win() {
   showResult('Acertou');
   numberSecret = raffleNumber();
   chances = 10;
   tentatives.textContent = chances;

   hit();
}

function hit() {
   
   document.querySelector('.title_popup').textContent = 'You Won';
   document.querySelector('.paragraph_popup').textContent = "My mental CPU with an IQ of 530 thousand, comes to just one conclusion, you won the machine, Congratulations"
   document.querySelector('.popup').style.display = 'block'
}

function lose() {
   showResult('Errou');
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