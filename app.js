const quotes = [
  "La France FR nous a souvent volé nos richesses 💎💰 ... vous allez aussi nous voler nos footballeurs 🏃‍♀️ ?",
  "L'oiseau 🐦 sur le baobab ne doit pas oublier qu'il a porté des lunettes 🕶️!",
  "On a pas besoin d'eau 💦 potable pour éteindre un incendie 🔥.",
  "Le crocodile 🐊 n'attend pas que le gorille 🦍 accouche",
];

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const getQuote = document.getElementById("get-quote");
const quote = document.querySelector(".quote");

let currentQuotes = quotes[random(0, quotes.length - 1)];
quote.textContent = currentQuotes;

getQuote.addEventListener("click", () => {
  const filteredQuotes = quotes.filter(q => q !== currentQuotes);
  currentQuotes = filteredQuotes[random(0, quotes.length - 1)];
  quote.textContent = currentQuotes;
});