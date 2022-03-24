/* eslint-disable eqeqeq */
import './MoviesCard.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ film, savedMoviesToggle, filmsSaved }) => {
  const { pathname } = useLocation();
  const [favorite, setFavorite] = useState(false);

  function handleFavoriteToogle() {
    const newFavorite = !favorite;
    const savedFilm = filmsSaved.filter((obj) => {
      return obj.movieId == film.id;
    });
    savedMoviesToggle({ ...film, _id: savedFilm.length > 0 ? savedFilm[0]._id : null }, newFavorite);
  }

  function handleFavoriteDelete() {
    savedMoviesToggle(film, false);
  }

  function getMovieDuration(mins) {
    return `${Math.floor(mins / 60)}ч ${mins % 60}м`;
  }

  useEffect(() => {
    if (pathname !== '/saved-movies') {
      const savedFilm = filmsSaved.filter((obj) => {
        return obj.movieId == film.id;
      });

      if (savedFilm.length > 0) {
        setFavorite(true);
      } else {
        setFavorite(false);
      }
    }
  }, [pathname, filmsSaved, film.id]);

  return (
    <li className="card">
      <a className="card__image-content" href={pathname === '/saved-movies' ? film.trailer : film.trailerLink} target="_blank"  rel="noreferrer">
        <img className="card__image" src={pathname === '/saved-movies' ? `${film.image}` : `https://api.nomoreparties.co${film.image.url}`} alt={film.nameRU}></img>
      </a>
      <div className="card__element">
        <p className="card__title">{film.nameRU}</p>
        <div className="card__buttons">

          {pathname === '/saved-movies' ? (
            <button type="button" className="card__button card__button_delete" onClick={handleFavoriteDelete} />
          ) : (
            <button type="button" className={`card__button card__button${favorite ? '_active' : '_inactive'}`} onClick={handleFavoriteToogle} />
          )}
          
        </div>
      </div>
      <p className="card__duration">{getMovieDuration(film.duration)}</p>
    </li>
  );
};

export default MoviesCard;
