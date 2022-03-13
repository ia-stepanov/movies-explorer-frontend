import './Form.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Form(props) {
  const { header, children, submit, question, path, link } = props;

  return (
    <section className="form">
      <div className="form__container">
        <Link to="/" className="form__link">
          <img className="form__logo" src={logo} alt="Логотип Movies Explorer"></img>
        </Link>
        <h2 className="form__title">{header}</h2>
        <form className="form__inputs">
          <div className="form__items"> {children} </div>
          <button type="submit" className="form__button" disabled>
            {submit}
          </button>
        </form>
        <p className="form__text">
          {question}
          <Link to={path} className="form__link">
            {link}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Form;
