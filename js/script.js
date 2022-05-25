// Carne - 400g por pessoa. + de 6h = 650g
// Cerveja - 1200ml por pessoa. + de 6h = 2000ml
// Refrigerante/água - 1000ml por pessoa. + de 6h = 1500ml
// Criança vale 0,5 adulto.

let inputAdulto = document.getElementById('adulto');
let inputCrianca = document.getElementById('crianca');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular() {
  let adulto = inputAdulto.value;
  let crianca = inputCrianca.value;
  let duracao = inputDuracao.value;

  let qtdTotalCarne = carnePP(duracao) * adulto + (400 / 2 * crianca);
  let qtdTotalCerveja = carnePP(duracao) * adulto;
  let qtdTotalBebida = carnePP(duracao) * adulto + (400 / 2 * crianca);

  resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 350)} Latas de Cerveja</p>`
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida / 2000)} Garrafas de 2L de Bebidas</p>`
}

function carnePP (duracao) {
  if (duracao >=6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPP (duracao) {
  if (duracao >=6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidaPP (duracao) {
  if (duracao >=6) {
    return 1500;
  } else {
    return 1000;
  }
}