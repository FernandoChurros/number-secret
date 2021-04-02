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
   if (chances > 0) {
      if (inputNumber.value == numberSecret) {
         win();
      } else {
         lose();
      }

      inputNumber.value = '';
   } else {
      endTentatives(); 
   }
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
}

function endTentatives() {

   alert('Suas chances acabaram, o número agora é outro')
   numberSecret = raffleNumber();
   chances = 10;
   tentatives.textContent = chances;
}

btn.addEventListener('click', validation)