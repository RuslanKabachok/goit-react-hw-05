function MovieList({ data }) {
  return data.map((movie) => {
    return <li key={movie.id}>{movie.title}</li>;
  });
}

export default MovieList;
