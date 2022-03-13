import './AboutMe.css';
import avatar from '../../images/avatar.jpg';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="about-me__header">Студент</h2>

      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">
            Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена
            и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года
            работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по веб&#8209;разработке, начал
            заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>

          <ul className="about-me__links">
            <li><a className="about-me__link" href="https://www.facebook.com/ia.stepanov" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a className="about-me__link" href="https://github.com/ia-stepanov" target="_blank" rel="noreferrer">Github</a></li>
          </ul>
        </div>

        <img src={avatar} alt="about-me" className="about-me__image" />
      </div>
    </section>
  );
};

export default AboutMe;
