import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = (props) => {
  const {sum, cards} = props;

  return (
    <MainPage sum={sum}
      cards={cards}/>
  );
};

App.propTypes = {
  sum: PropTypes.number.isRequired,
  cards: PropTypes.array.isRequired,
};


export default App;
