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