// Carne - 400g por pessoa. + de 6h = 650g
// Cerveja - 1200ml por pessoa. + de 6h = 2000ml
// Refrigerante/água - 1000ml por pessoa. + de 6h = 1500ml
// Criança vale 0,5 adulto.

function qtdPessoas() {
  let adultos = document.getElementById("adulto");
  let numAdultos = parseInt(adultos.value);
  let criancas = document.getElementById("crianca");
  let numCriancas = parseInt(criancas.value);

  isNaN(numAdultos) ? (numAdultos = 0) : numAdultos;
  isNaN(numCriancas) ? (numCriancas = 0) : numCriancas;

  let qtdTotal = numAdultos + numCriancas / 2;
  return qtdTotal;
}

function calculo() {
  let myDiv = document.getElementsByTagName("div")[0];
  let duracao = document.getElementById("duracao");
  let valorDuracao = duracao.value;

  isNaN(valorDuracao) ? (valorDuracao = 0) : valorDuracao;

  let qtdCarne = 0.4;
  let qtdCerveja = 1.2;
  let qtdBebida = 1;

  if (valorDuracao <= 4) {
    let qtdCarneTotal = qtdCarne * qtdPessoas();
    let qtdCervejaTotal = qtdCerveja * qtdPessoas();
    let qtdBebidaTotal = qtdBebida * qtdPessoas();

    let textCarne = document.createElement("p");
    textCarne.innerHTML = qtdCarneTotal.toFixed(1) + " Kg de Carne";
    myDiv.appendChild(textCarne);

    let textCerveja = document.createElement("p");
    textCerveja.innerHTML = qtdCervejaTotal.toFixed(1) + " L de Cerveja";
    myDiv.appendChild(textCerveja);

    let textBebida = document.createElement("p");
    textBebida.innerHTML = qtdBebidaTotal.toFixed(1) + " L de Bebida";
    myDiv.appendChild(textBebida);
  } else {
    qtdCarne = 0.65;
    qtdCerveja = 2;
    qtdBebida = 1.5;

    qtdCarneTotal = qtdCarne * qtdPessoas();
    qtdCervejaTotal = qtdCerveja * qtdPessoas();
    qtdBebidaTotal = qtdBebida * qtdPessoas();

    let textCarne = document.createElement("p");
    textCarne.innerHTML = qtdCarneTotal.toFixed(1) + " Kg de Carne";
    myDiv.appendChild(textCarne);

    let textCerveja = document.createElement("p");
    textCerveja.innerHTML = qtdCervejaTotal.toFixed(1) + " L de Cerveja";
    myDiv.appendChild(textCerveja);

    let textBebida = document.createElement("p");
    textBebida.innerHTML = qtdBebidaTotal.toFixed(1) + " L de Bebida";
    myDiv.appendChild(textBebida);
  }
}
