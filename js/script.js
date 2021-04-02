const inputNumber = document.querySelector('#inputNumber');
const btn = document.querySelector('#btn');
const tentatives = document.querySelector('#tentatives');
let chances = 10;

function raffleNumber() {
   let numberSecret = parseInt(Math.random() * 101);
   console.log(numberSecret);
   return numberSecret;
}
let numberSecret = raffleNumber();

function validation() {
   if (chances > 0) {
      if (inputNumber.value == numberSecret) {

         console.log('acertou');
         raffleNumber();
         chances = 10;
         tentatives.textContent = chances;
      } else {

         console.log('Errou');
         chances--;
         tentatives.textContent = chances;
      }

      inputNumber.value = '';
   } else {

      alert('Suas chances acabaram, o número agora é outro')
      raffleNumber();
      chances = 10;
      tentatives.textContent = chances;
   }
}
btn.addEventListener('click', validation)