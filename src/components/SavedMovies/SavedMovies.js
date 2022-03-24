import './SavedMovies.css';
import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import mainApi from '../../utils/MainApi.js';

const SavedMovies = ({ openPopup }) => {
  const [films, setFilms] = useState(null);
  const [preloader, setPreloader] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [filmsTumbler, setFilmsTumbler] = useState(false);
  const [filmsInputSearch, setFilmsInputSearch] = useState('');
  const [filmsShowed, setFilmsShowed] = useState([]);

  async function handleGetMovies(inputSearch, tumbler) {
    setErrorText('');
    setPreloader(true);

    try {
      const data = films;
      let filterData = data.filter(({ nameRU }) => nameRU.toLowerCase().includes(inputSearch.toLowerCase()));

      if (tumbler) filterData = filterData.filter(({ duration }) => duration <= 40);

      setFilmsShowed(filterData);

      if (inputSearch) {
        localStorage.setItem('savedFilms', JSON.stringify(filterData));
        localStorage.setItem('savedFilmsTumbler', tumbler);
        localStorage.setItem('savedFilmsInputSearch', inputSearch);
      } else {
        localStorage.removeItem('savedFilms');
        localStorage.removeItem('savedFilmsTumbler');
        localStorage.removeItem('savedFilmsInputSearch');
      }
    } catch (err) {
      setErrorText(
        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
      );

      setFilms([]);
      localStorage.removeItem('savedFilms');
      localStorage.removeItem('savedFilmsTumbler');
      localStorage.removeItem('savedFilmsInputSearch');
    } finally {
      setPreloader(false);
    }
  }

  async function savedMoviesToggle(film, favorite) {
    if (!favorite) {
      try {
        await mainApi.deleteMovies(film._id);
        const newFilms = await mainApi.getMovies();
        setFilmsShowed(newFilms);
        setFilms(newFilms);
      } catch (err) {
        openPopup('Во время удаления фильма произошла ошибка.');
      }
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const localStorageFilms = localStorage.getItem('savedFilms');
    if (localStorageFilms) {
      setFilms(JSON.parse(localStorageFilms));
      const localStorageFilmsTumbler = localStorage.getItem('savedFilmsTumbler');
      const localStorageFilmsInputSearch = localStorage.getItem('savedFilmsInputSearch');

      if (localStorageFilmsTumbler) {
        setFilmsTumbler(localStorageFilmsTumbler === 'true');
      }
      if (localStorageFilmsInputSearch) {
        setFilmsInputSearch(localStorageFilmsInputSearch);
      }
    } else {
      try {
        const data = await mainApi.getMovies();
        setFilms(data);
        setFilmsShowed(data);
      } catch (err) {
        openPopup(`Ошибка сервера ${err}`);
      }
    }
  }, [openPopup]);

  return (
    <div className="saved-movies">
      <SearchForm handleGetMovies={handleGetMovies} filmsTumbler={filmsTumbler} filmsInputSearch={filmsInputSearch} />
      {preloader && <Preloader />}
      {errorText && <div className="saved-movies__text-error">{errorText}</div>}
      {!preloader && !errorText && films !== null && (
        <MoviesCardList filmsRemains={[]} savedMoviesToggle={savedMoviesToggle} films={filmsShowed} />
      )}
    </div>
  );
};

export default SavedMovies;
