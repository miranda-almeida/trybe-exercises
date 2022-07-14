// 3. 🚀 Crie uma página com um contador de cliques.
const button = document.getElementById('btn');
const counter = document.getElementById('counter');

let counterCount = 0;

// clickCount = () => {
//   counterCount += 1;
//   updateCounter();
// }

updateCounter = () => {
  counter.innerHTML = counterCount;
}

button.addEventListener('click', () => {
  counterCount += 1;
  updateCounter();
});