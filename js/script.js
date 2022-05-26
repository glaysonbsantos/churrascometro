let inputAdulto = document.getElementById('adulto');
let inputCrianca = document.getElementById('crianca');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular() {
  let adulto = inputAdulto.value;
  let crianca = inputCrianca.value;
  let duracao = inputDuracao.value;

  let qtdTotalCarne = carnePP(duracao) * adulto + (carnePP(duracao) / 2 * crianca);
  let qtdTotalCerveja = cervejaPP(duracao) * adulto;
  let qtdTotalBebida = bebidaPP(duracao) * adulto + (bebidaPP(duracao) / 2 * crianca);

  resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 350)} Latas de Cerveja</p>`
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida / 1000)} L de Bebidas (refri e/ou água)</p>`
}

function carnePP (duracao) {
  if (duracao <= 2) {
    return 500
  } else if (duracao > 2 && duracao <= 4) {
    return 1250
  } else {
    return 1800
  }
}

function cervejaPP (duracao) {
  if (duracao <= 2) {
    return 1400
  } else if (duracao > 2 && duracao <= 4) {
    return 2100
  } else {
    return 3500
  }
}

function bebidaPP (duracao) {
  if (duracao <= 2) {
    return 1000
  } else if (duracao > 2 && duracao <= 4) {
    return 1500
  } else {
    return 2000
  }
}