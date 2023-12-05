import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Offer from '../offer/offer';

const OffersList = (props) => {
  const [, setActivOffer] = useState(null);
  const {cards} = props;

  const handleMouseEnter = (item) => {
    setActivOffer(item);
  };
  const handleMouseLeave = () => {
    setActivOffer(null);
  };


  return (
    <React.Fragment>
      <div className="cities__places-list places__list tabs__content">
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
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              item={item}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

OffersList.propTypes = {

  cards: PropTypes.array.isRequired,

};

export default OffersList;
