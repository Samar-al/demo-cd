console.log("oui ça marche !");
const button = document.getElementById('myButton');
const output = document.getElementById('output');

if (button && output) {
  button.addEventListener('click', () => {
    output.textContent = 'Tu as cliqué !';
  });
}

console.log("oui ça marche !");

