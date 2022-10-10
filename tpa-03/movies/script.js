import { getMovieDetail } from "../lib/movies.js";
import { formatDate } from "../utils/formatDate.js";
import { getParams } from "../utils/getParams.js";

const params = getParams();
const { title, overview, poster_path, release_date } = await getMovieDetail(params.id);
const date = formatDate(release_date);

document.querySelector("main").innerHTML = /*html*/ `
  <img class="poster" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" />
  <div>
    <h1>${title}</h1>
    <p>${overview}</p>
    <p>Release date: ${date}</p>
  </div>`;

document.getElementById("search").addEventListener("submit", (event) => {
  event.preventDefault();
  location.href = `/?query=${event.target.query.value}`;
});
