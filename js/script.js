// ==========================================
// PORTFÓLIO - LUCAS LIMA NASCIMENTO
// Arquivo de JavaScript
// ==========================================


// ---------- 1. MENU DO CELULAR ----------
const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");

  // troca o texto do botão
  if (menu.classList.contains("aberto")) {
    botaoMenu.textContent = "Fechar";
  } else {
    botaoMenu.textContent = "Menu";
  }
});

// fecha o menu quando a pessoa clica em um link
const linksMenu = document.querySelectorAll(".menu a");

for (let i = 0; i < linksMenu.length; i++) {
  linksMenu[i].addEventListener("click", function () {
    menu.classList.remove("aberto");
    botaoMenu.textContent = "Menu";
  });
}


// ---------- 2. TEXTO SENDO DIGITADO ----------
// frases que aparecem no início, uma depois da outra
const frases = [
  "estudante de Sistemas de Informação",
  "criador de automações com n8n",
  "curioso por Inteligência Artificial",
  "desenvolvedor em formação"
];

const textoDigitando = document.getElementById("texto-digitando");

let fraseAtual = 0;     // qual frase está aparecendo
let letraAtual = 0;     // quantas letras já foram escritas
let apagando = false;   // se está escrevendo ou apagando

function digitar() {
  const frase = frases[fraseAtual];

  if (apagando == false) {
    // escreve mais uma letra
    letraAtual++;
    textoDigitando.textContent = frase.substring(0, letraAtual);

    // terminou a frase: espera um pouco e começa a apagar
    if (letraAtual == frase.length) {
      apagando = true;
      setTimeout(digitar, 1800);
      return;
    }

    setTimeout(digitar, 70);
  } else {
    // apaga uma letra
    letraAtual--;
    textoDigitando.textContent = frase.substring(0, letraAtual);

    // apagou tudo: passa para a próxima frase
    if (letraAtual == 0) {
      apagando = false;
      fraseAtual++;

      // depois da última frase, volta para a primeira
      if (fraseAtual == frases.length) {
        fraseAtual = 0;
      }
    }

    setTimeout(digitar, 35);
  }
}

digitar();


// ---------- 3. FILTRO DOS PROJETOS ----------
const botoesFiltro = document.querySelectorAll(".filtro");
const cardsProjeto = document.querySelectorAll(".card-projeto");

for (let i = 0; i < botoesFiltro.length; i++) {
  botoesFiltro[i].addEventListener("click", function () {
    const categoria = this.getAttribute("data-categoria");

    // tira o destaque de todos os botões e coloca só no clicado
    for (let j = 0; j < botoesFiltro.length; j++) {
      botoesFiltro[j].classList.remove("ativo");
    }
    this.classList.add("ativo");

    // mostra só os cards da categoria escolhida
    for (let k = 0; k < cardsProjeto.length; k++) {
      const categoriaCard = cardsProjeto[k].getAttribute("data-categoria");

      if (categoria == "todos" || categoria == categoriaCard) {
        cardsProjeto[k].classList.remove("escondido");
      } else {
        cardsProjeto[k].classList.add("escondido");
      }
    }
  });
}


// ---------- 4. BARRA DE PROGRESSO DA ROLAGEM ----------
const barraProgresso = document.getElementById("barra-progresso");

window.addEventListener("scroll", function () {
  // quanto a página pode rolar no total
  const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;

  // porcentagem que já foi rolada
  const porcentagem = (window.scrollY / alturaTotal) * 100;

  barraProgresso.style.width = porcentagem + "%";
});


// ---------- 5. ANO ATUAL NO RODAPÉ ----------
document.getElementById("ano").textContent = new Date().getFullYear();
