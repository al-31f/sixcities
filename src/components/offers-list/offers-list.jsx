import React from 'react';
import PropTypes from 'prop-types';
import Offer from '../offer/offer';

const OffersList = (props) => {
  const {cards} = props;

  return (
    <React.Fragment>
      {cards.map((item) => {
        return (
          <Offer
            key={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
            type={item.type}
            rating={item.rating}
            isPremium={item.isPremium}
          />
        );
      })}
    </React.Fragment>
  );
};

OffersList.propTypes = {

  cards: PropTypes.array.isRequired,

};

export default OffersList;
