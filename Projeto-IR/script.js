const salario = document.querySelector(".salario");
const btnCalc = document.querySelector(".calc");
const btnLimpar = document.querySelector(".limpar");
const valor = document.querySelector(".valor");
const salarioLiquido = document.querySelector(".salario-liquido");

const limparIR = () => {
  valor.textContent = "";
  salarioLiquido.textContent = "";
  salario.value = "";
};
const calcularIR = (salario) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL' 
  });
  if (salario <= 1903.98) {
    valor.textContent = "Valor do IR: Isento de IR";
    salarioLiquido.textContent = `Salário líquido: ${formatter.format(salario)}`;
  }
  if (salario >= 1903.99 && salario <= 2826.65) {
    valor.textContent = "Valor do IR: R$142,80";
    salarioLiquido.textContent = `Salário líquido: ${formatter.format(salario - 142.8)}`;
  }
  if (salario >= 2826.66 && salario <= 3751.05) {
    valor.textContent = "Valor do IR: R$354,80";
    salarioLiquido.textContent = `Salário líquido:$${formatter.format(salario- 354.8)}`;
  }
  if (salario >= 3751.06 && salario <= 4664.68) {
    valor.textContent = "Valor do IR: R$636,13";
    salarioLiquido.textContent = `Salário líquido: ${formatter.format(salario - 636.13)}`;
  } 
  if (salario > 4664.68) {
    valor.textContent = "Valor do IR: R$869,96";
    salarioLiquido.textContent = `Salário líquido: ${formatter.format(salario - 869.96)}`;
  }
};

btnCalc.addEventListener("click", () => {
  calcularIR(parseFloat(salario.value));
});
btnLimpar.addEventListener("click", limparIR);
