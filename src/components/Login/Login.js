import '../Form/Form.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import isEmail from 'validator/es/lib/isEmail';

function Login({ onLogin }) {
  const [inputValues, setInputValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;

    if (name === 'email') {
      if (!isEmail(value)) {
        target.setCustomValidity('Некорректый адрес почты');
      } else {
        target.setCustomValidity('');
      }
    }

    setInputValues({ ...inputValues, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onLogin(inputValues);
  };

  return (
    <section className="form">
      <div className="form__container">
        <Link to="/" className="form__link">
          <img className="form__logo" src={logo} alt="Логотип Movies Explorer"></img>
        </Link>
        <h2 className="form__title">Рады видеть!</h2>
        <form className="form__inputs" onSubmit={handleSubmit}>
          <div className="form__items">
            <label className="form__item">
              <p className="form__item-text">E-mail</p>
              <input
                className={`form__field ${errors.email ? 'form__field_color-error' : ''}`}
                name="email"
                type="email"
                placeholder="Введите почту"
                value={inputValues.email || ''}
                onChange={handleInputChange}
                required
              />
              <p className={`form__error ${errors.email ? 'form__error-display' : ''}`}>{errors.email}</p>
            </label>

            <label className="form__item">
              <p className="form__item-text">Пароль</p>
              <input
                className={`form__field ${errors.password ? 'form__field_color-error' : ''}`}
                name="password"
                type="password"
                minLength="6"
                placeholder="Введите пароль"
                value={inputValues.password || ''}
                onChange={handleInputChange}
                required
              />
              <p className={`form__error ${errors.password ? 'form__error-display' : ''}`}>{errors.password}</p>
            </label>
          </div>
          <button className={`form__button ${isValid ? "" : "form__button_disabled"}`} type="submit" disabled={!isValid ? true : ''}>Войти</button>
        </form>
        <p className="form__text">
          Ещё не зарегистрированы?
          <Link to="/signup" className="form__link">Регистрация</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
