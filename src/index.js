import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import cards from './mock-data';

const Setting = {
  sum: 0
};

ReactDOM.render(
    <App
      sum={Setting.sum}
      cards={cards}
    />,
    document.querySelector(`#root`)
);
