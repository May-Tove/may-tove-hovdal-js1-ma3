const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=3480039c24484cd791b4c340d7081efb";

const resultsContainer = document.querySelector(".results");

function displayError(message = "Unknown error") {
  return `<div class="error">${message}</div>`;
}

async function getGames() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const games = results.results;
    resultsContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
      console.log(games[i].text);

      if (i === 8) {
        break;
      }

      resultsContainer.innerHTML += `<div class="container"</div>
      <div> <h2>${games[i].name}</h2></div>
      <div> <p>Rating: ${games[i].rating}</p></div>
      <div> <p>Number of tags: ${games[i].tags.length}</p></div>`;
    }
  } catch (error) {
    resultsContainer.innerHTML = displayError("An error occurred");
  }
}

getGames();
