class MainApi {
  constructor(options) {
    this._url = options.baseUrl;
  }

  _checkStatus(res) {
    return res.ok ? res.json() : Promise.reject(res.status)
  }

  registration(username, email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: username,
        email: email,
        password: password
      })
    })
    .then(this._checkStatus)
  }

  authorization(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(this._checkStatus)
  }

  getUserInfo(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(this._checkStatus)
  }


  setUserInfo(username, email, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify({
        name: username,
        email: email,
      })
    })
    .then(this._checkStatus)
  }

  getInitialMovies(token) {
    return fetch(`${this._url}/movies`, {
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(this._checkStatus)
  }

  createMovie(data, token) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        description: data.description,
        year: data.year,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
      })
    })
    .then(this._checkStatus)
  }

  deleteMovie(movieId, token) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(this._checkStatus)
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.movies.explorer.nomoredomainsrocks.ru',
});

export default mainApi;