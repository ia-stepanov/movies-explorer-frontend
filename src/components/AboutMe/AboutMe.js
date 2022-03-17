import './AboutMe.css';
import avatar from '../../images/avatar.jpg';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="about-me__header">Студент</h2>

      <div className="about-me__container">Please commit your changes or stash them before you switch branches.
Aborting
        <div className="about-me__info">
          <h3 className="about-me__name">Игорь</h3>
          <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">
            Я&nbsp;работал 14&nbsp;лет в&nbsp;сфере графического дизайна, мне нравилось решать сложные задачи связанные
            с&nbsp;разработкой проектов, например, создавать детские альбомы с&nbsp;дополнительной реальностью (AR) или
            новые технологии для вырезки на&nbsp;хромакее. В&nbsp;тот момент я&nbsp;пришёл к&nbsp;пониманию, что для
            полноценной разработки нужны знания языков программирования и&nbsp;решил углубиться в&nbsp;IT
            сферу,&nbsp;&mdash; меня захватывает процесс разработки и&nbsp;возможность создавать удобные и&nbsp;полезные
            продукты.
          </p>

          <ul className="about-me__links">
            <li><a className="about-me__link" href="https://www.linkedin.com/in/ia-stepanov/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="about-me__link" href="https://www.facebook.com/ia.stepanov" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a className="about-me__link" href="https://t.me/ia_stepanov" target="_blank" rel="noreferrer">Telegram</a></li>
            <li><a className="about-me__link" href="https://github.com/ia-stepanov" target="_blank" rel="noreferrer">Github</a></li>

          </ul>
        </div>

        <img src={avatar} alt="about-me" className="about-me__image" />
      </div>
    </section>
  );
};

export default AboutMe;
