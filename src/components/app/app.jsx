import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import RoomPage from '../room-page/room-page';
import NotFoundPage from '../not-found-page/not-found-page';

const App = (props) => {
  const {sum, cards} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage sum={sum} cards={cards} />
        </Route>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/favorites" exact >
          <FavoritesPage cards={cards}/>
        </Route>
        <Route path="/offer/:id?" exact component={RoomPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  sum: PropTypes.number.isRequired,
  cards: PropTypes.array.isRequired,
};


export default App;
