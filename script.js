// const textoAnimado = document.getElementById("texto-animado");
// const frases = [
//   "Olá, bem-vindo!",
//   "Me chamo Bruno Rodrigues",
//   "Desenvolvedor Front-End",
// ];
// let indiceFrase = 0;
// let indiceLetra = 0;
// let digitando = true;

// function animar() {
//   const fraseAtual = frases[indiceFrase];

//   textoAnimado.className = "section"
//   textoAnimado.classList = "sobre";
//   textoAnimado.appendChild()

//   if (digitando) {
//     if (indiceLetra < fraseAtual.length) {
//       textoAnimado.textContent += fraseAtual.charAt(indiceLetra);
//       indiceLetra++;
//       setTimeout(animar, 100); // Velocidade de digitação
//     } else {
//       digitando = false;
//       setTimeout(animar, 1500); // Espera antes de apagar
//     }
//   } else {
//     if (indiceLetra > 0) {
//       textoAnimado.textContent = fraseAtual.substring(0, indiceLetra - 1);
//       indiceLetra--;
//       setTimeout(animar, 50); // Velocidade de apagamento
//     } else {
//       digitando = true;
//       indiceFrase = (indiceFrase + 1) % frases.length;
//       setTimeout(animar, 500); // Espera antes de digitar a próxima
//     }
//   }
// }

// document.addEventListener("DOMContentLoaded", animar);
