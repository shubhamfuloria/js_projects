const ipEl = document.querySelector('input');
const imgEl = document.querySelector('img');

function updateGif() {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=s0lgqLNeQvPBHXGAm3uANqqfQXaVvfJm&s=${ipEl.value}`,

    { mode: "cors" })
    .then(response => response.json())
    .then(response => {
      imgEl.src = response.data.images.original.url;
    })
}


ipEl.onchange = updateGif;

