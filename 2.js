numeroCerto = Math.ceil(Math.random() * 10);
let tentativas = 3;
for (let t = 1; t <= tentativas; t++) {
  let chute = parseInt(prompt(`Tentativa ${t}: Adivinhe o número (1 a 10):`));
  if (!isNaN(chute)) {
    if (chute === numeroCerto) {
      alert(`Você acertou! O número certo era ${numeroCerto}.`);
      break;
    } else if (t === tentativas) {
      alert(`Suas chances acabaram! O número certo era ${numeroCerto}.`);
    } else {
      alert(`Tente novamente! Dica: O número certo é ${chute < numeroCerto ? 'maior' : 'menor'} que ${chute}.`);
    }
  } else {
    alert("Insira um numero valido!");
    break;
  }
}