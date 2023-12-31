import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom/cjs/react-router-dom.min';

const Offer = ({title, img, price, type, rating, isPremium, onMouseEnter, onMouseLeave, item}) => {

  const history = useHistory();

  function handleClick(evt) {
    evt.preventDefault();
    history.push(`/offer/`);
  }

  return (
    <React.Fragment>
      <article className="cities__place-card place-card"
        onMouseEnter={() => {
          onMouseEnter(item);
        }}
        onMouseLeave={() => {
          onMouseLeave();
        }}
      >
        {
          isPremium && (
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
          )
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={`${img}`} width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: rating}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#" onClick={handleClick}>{title}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </React.Fragment>
  );
};

Offer.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default Offer;
