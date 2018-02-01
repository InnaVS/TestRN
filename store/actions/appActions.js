import fetch from 'isomorphic-fetch';

export const RECEIVE_FILMS_LIST = 'RECEIVE_FILMS_LIST';

function loadFilmsList(filmsList) {
  return {type: RECEIVE_FILMS_LIST, filmsList: filmsList}
}

export function loadMovie() {
  return (dispatch) => {
    return fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=fff342491d85e5a3b2f8eccb9e43a714',
      // 'https://api.themoviedb.org/3/movie/550?api_key=fff342491d85e5a3b2f8eccb9e43a714',
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': 'fff342491d85e5a3b2f8eccb9e43a714',
        }
      }
    ).then(resp => {
      return resp.json();
    })
      .then(rest => {
        dispatch(loadFilmsList(rest.results));
      });
  }
}