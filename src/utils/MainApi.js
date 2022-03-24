class MainApi {
  constructor(config) {
    this._address = config.address;
    this._headers = config.headers;
  }

  _handleRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  registerUser({ name, email, password }) {
    return fetch(`${this._address}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    }).then(this._handleRes);
  }

  loginUser({ email, password }) {
    return fetch(`${this._address}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then(this._handleRes);
  }

  getToken(token) {
    return fetch(`${this._address}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(this._handleRes);
  }

  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._handleRes);
  }

  updateUserInfo(data) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._handleRes);
  }

  getMovies() {
    return fetch(`${this._address}/movies`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._handleRes);
  }

  addMovies(data) {
    return fetch(`${this._address}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleRes);
  }

  deleteMovies(movieId) {
    return fetch(`${this._address}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._handleRes);
  }

  updateToken() {
    this._headers.Authorization = `Bearer ${localStorage.getItem('jwt')}`;
  }
}

const mainApi = new MainApi({
  address: 'https://a.ia-stepanov.nomoredomains.work',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  },
});

export default mainApi;
