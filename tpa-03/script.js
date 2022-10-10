import { getMovies } from "./lib/movies.js";
import { formatDate } from "./utils/formatDate.js";
import { getParams } from "./utils/getParams.js";

const params = getParams();
const movies = await getMovies(params.query);
const main = document.querySelector("main");

movies.results.forEach((movie) => {
  const { id, title, poster_path, release_date, vote_average } = movie;
  const date = formatDate(release_date);
  const score = parseFloat(vote_average).toFixed(1);

  main.innerHTML += /*html*/ `
    <a class="card" href="movies/?id=${id}">
      <img class="thumbnail" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" />
      <div class="container">
        <div class="header">
          <p>${title}</p>
          <p>⭐${score}</p>
        </div>
        <p>${date}</p>
      </div>
    </a>`;
});
