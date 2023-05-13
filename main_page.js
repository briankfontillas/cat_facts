// const axios = require('axios');
const URL = 'https://catfact.ninja/fact';

var factBtn = document.getElementById('fact-btn');
var displayFact = document.getElementById('fact');

async function getFact() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.fact);
    displayFact.innerHTML = data.fact;
  } catch (error) {
    console.log(error);
  }
}

factBtn.addEventListener('click', getFact);