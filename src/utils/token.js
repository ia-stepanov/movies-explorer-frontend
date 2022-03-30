class Token {
  constructor() {
    this.key = 'jwt';
  }

  getToken() {
    return localStorage.getItem(this.key);
  }

  saveToken(token) {
    localStorage.setItem(this.key, token);
  }

  removeToken() {
    localStorage.removeItem(this.key);
  }
}

const token = new Token();

export default token;
