import axios from 'axios';

export default async function fetchMovies(url) {
  // const url =
  //   'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjQ4YWMwZTMwMjg4YTQ2ZDJhZmEzOGI2NzQ1YmYxNCIsInN1YiI6IjY1ZWM5YjJkOTI0Y2U2MDE2NDQxNTg1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O1Nruajc1yvBW-cZUxqN-x_oJnhFBb6F3Tf9nDBJ7cQ',
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.log(error);
  }

  // const response = axios
  //   .get(url, options)
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));

  // return response;
}

//'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
