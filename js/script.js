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

   endTentativesPopUp()
   console.log('Suas chances acabaram, o número agora é outro')
   numberSecret = raffleNumber();
   chances = 10;
   tentatives.textContent = chances;
}

// CREATE POP UP FOR END TENTATIVE.
const div = document.createElement('div');
div.classList.add('pop_up_end_tentatives')
const h1 = document.createElement('h1');
h1.classList.add('title_end_tentatives')

function endTentativesPopUp() {
   document.body.appendChild(div);
   h1.textContent = 'Suas tentativas acabaram, o número será resorteado';
   div.appendChild(h1);
   document.querySelector('.body').style.opacity = .3;
}

btn.addEventListener('click', validation)