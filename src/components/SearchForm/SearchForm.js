import './SearchForm.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchForm = ({ handleGetMovies, filmsTumbler, filmsInputSearch, handleGetMoviesTumbler }) => {
  const { pathname } = useLocation();

  const [inputSearch, setInputSearch] = useState('');
  const [tumbler, setTumbler] = useState(false);

  function handleInputChange(evt) {
    setInputSearch(evt.target.value);
  }

  function handleTumblerChange(evt) {
    const newTumbler = !tumbler;
    setTumbler(newTumbler);
    handleGetMoviesTumbler(newTumbler);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleGetMovies(inputSearch);
  }

  useEffect(() => {
    setTumbler(filmsTumbler);
    setInputSearch(filmsInputSearch);
  }, [filmsTumbler, filmsInputSearch]);

  return (
    <form className="search">
      <div className="search__container">
        <input className="search__input" placeholder="Фильм" type="text" value={inputSearch || ''} onChange={handleInputChange} required />
        <button type="submit" className="search__button" onClick={handleSubmit}>Найти</button>
      </div>
      <div className="search__toggle">
        <p className="search__films">Короткометражки</p>
        <label className="search__tumbler">
          <input className="search__checkbox" type="checkbox" value={tumbler} checked={tumbler} onChange={handleTumblerChange} disabled={`${pathname !== '/saved-movies' ? '' : 'disabled'}`} />
          <span className={`search__slider ${pathname !== '/saved-movies' ? "" : "search__slider_disabled"}`} />
        </label>
      </div>
    </form>
  );
};

export default SearchForm;
