import { getMovies } from "./lib/movies.js";
import { getParams } from "./utils/getParams.js";

const params = getParams(location.search);

document.getElementById("search").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const query = data.get("query");
  location.search = `?query=${query}`;
});

// Load movies
(async function () {
  const movieList = document.querySelector(".movie-list");
  const movies = await getMovies(params.query);
  movies.results.forEach((movie) => {
    const date = new Date(movie.release_date);

    movieList.innerHTML += /*html*/ `
      <a class="movie-container" href="movies/?id=${movie.id}">
        <img class="movie-thumbnail" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
        <div class="movie-content">
          <p>${movie.title}</p>
          <p>${date.toDateString()}</p>
        </div>
      </a>`;
  });
})();
