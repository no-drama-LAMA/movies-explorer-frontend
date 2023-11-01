class MoviesApi {
  constructor(options) {
    this._url = options.baseUrl;
  }

  _checkStatus(res) {return res.ok ? res.json() : Promise.reject}

  getMovies() {
    return fetch(this._url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(this._checkStatus)
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi