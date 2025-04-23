let inicio = parseInt(prompt("Primeiro valor:"));
let fim = parseInt(prompt("Último valor:"));

if (!isNaN(inicio) && !isNaN(fim)) {
  if (fim < inicio) {
    //Caso user coloque o fim maior que o inicio
    [inicio, fim] = [fim, inicio]; 
  }
  for (let n = inicio; n <= fim; n++) {
    if (n % 2 === 0) {
      console.log(n);
    }
  }
} else {
  console.log("Por favor, insira números válidos.");
}