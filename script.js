function calculate() {
  var altura = document.getElementById("altura").value;
  var peso = document.getElementById("peso").value;

  var imc = (peso / (altura * altura)).toFixed(2);
  var classificacao = "";

  if (imc < 18.5) {
    classificacao = "abaixo do peso";
  } else if (imc < 25) {
    classificacao = "com peso ideal";
  } else if (imc < 30) {
    classificacao = "acima do peso";
  } else if (imc < 35) {
    classificacao = "Com obesidade grau I";
  } else if (imc < 40) {
    classificacao = "Com obesidade grau II";
  } else if (imc < 40) {
    classificacao = "Com obesidade grau III";
  }

  document.getElementById("resultado").innerHTML = `Seu IMC é ${imc} e você está ${classificacao}`;
}

// outra tipo de linha de codigo para efetuar a mesma função

const calcular = document.getElementById("calcular");

function imc() {
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if ((altura, peso !== "")) {
    const valorIMC = (peso / (altura * altura)).toFixed(2);

    let classificacao = '';

    if (valorIMC < 18.5) {
      classificacao = "abaixo do peso";
    } else if (valorIMC < 25) {
      classificacao = "com peso ideal";
    } else if (valorIMC < 30) {
      classificacao = "acima do peso";
    } else if (valorIMC < 35) {
      classificacao = "Com obesidade grau I";
    } else if (valorIMC < 40) {
      classificacao = "Com obesidade grau II";
    } else if (valorIMC < 40) {
      classificacao = "Com obesidade grau III";
    }

    resultado.textContent = `Seu IMC é ${valorIMC} e você está ${classificacao}`
  } 
  else {
    resultado.textContent = "Preencha os campos"; 
  }
}
calcular.addEventListener("click", imc)
