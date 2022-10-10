const API_KEY = "7ea6be3209c62292770bb549f6a0eac1";

export async function getMovies(search) {
  const res = await fetch(
    search
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );
  return await res.json();
}

export async function getMovieDetail(id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
  return await res.json();
}
