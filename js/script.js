const inputNumber = document.querySelector('#inputNumber');
const btn = document.querySelector('#btn');
const btnTip = document.querySelector('#tip');
const tentatives = document.querySelector('#tentatives');
const popup = document.querySelector('.popup');
let chances = 10;

const h2 = document.querySelector('.title_popup');
const paragraph = document.querySelector('.paragraph_popup');
const btnClose = document.querySelector('.btn_close');

function raffleNumber() {
   let numberSecret = parseInt(Math.random() * 101);
   console.log(numberSecret);
   return numberSecret;
}

let numberSecret = raffleNumber();  

function validation() {
   if(inputNumber.value == '') {
      invalid();
   } else {
      if (inputNumber.value == numberSecret) {
         win();
      } else {
         lose();
      }

   }
   inputNumber.value = '';
}

function invalid() {

   console.log('Insira um número válido senhor');
   h2.textContent = 'WARNING!';
   paragraph.textContent = 'The machine does not recognize what you are typing';
   popup.style.display = 'flex';
}

function win() {

   hit();

   numberSecret = raffleNumber();
   chances = 10;
   tentatives.textContent = chances;
}

function hit() {
   h2.textContent = 'You Won';
   paragraph.textContent = "My mental CPU with an IQ of 530 thousand, comes to just one conclusion, you won the machine, Congratulations"
   popup.style.display = 'flex'
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
      popup.style.display = 'flex'

      numberSecret = raffleNumber();
      chances = 10;
      tentatives.textContent = chances;
}

function closePopUp() {

   document.querySelector('.popup').style.display = 'none';
}

const divResult = document.createElement('div');
divResult.classList.add('none');
divResult.setAttribute('id', 'tipResult');
const p = document.createElement('p');
p.classList.add('tip_paragraph')
const helpGame = document.querySelector('.help_game');

function tip() {

   helpGame.appendChild(divResult);
   document.querySelector('#tipResult').classList.toggle('tip_result');

   let divisor = 0;
   for (let i = 1; i <= numberSecret; i++) {
      if (numberSecret % i == 0)
         divisor++
   }

   if (divisor == 2 && numberSecret < 42) {

      p.textContent = 'É o filho mais novo do seu tio!';
      divResult.appendChild(p);
   } else if (divisor == 2) {

      p.textContent = 'Não é um filho mais velho do seu tio!';
      divResult.appendChild(p);
   }else if (numberSecret >= 42) {

      p.textContent = 'Seu tio não teve nenhum filho mais velho!';
      divResult.appendChild(p);
   } else {

      p.textContent = 'Seu tio não teve nenhum filho mais novo!';
      divResult.appendChild(p);
   }
}

btnTip.addEventListener('click', tip);
btnClose.addEventListener('click', closePopUp);
btn.addEventListener('click', validation);