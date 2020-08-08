import { Container } from '@material-ui/core';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import Header from './Layout/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import { rootReducer } from './reducers';
import { authenticationService as AuthService } from './services';
import PrivateRoute from './shared/PrivateRoute';
import { AuthenticatedUser } from './types';
import history from './history';

const store = createStore(rootReducer, applyMiddleware(thunk));

const currentUser: AuthenticatedUser = AuthService.getCurrentUser();

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <div className="App">
        <Header></Header>
        <Router history={history}>
          <Container>
            <Switch>
              <PrivateRoute exact path="/">
                <Home></Home>
              </PrivateRoute>
              <Route path="/login">
                { currentUser ? <Redirect to={{ pathname: '/' }}></Redirect> : <Login></Login> }
              </Route>
            </Switch>
          </Container>
        </Router>
      </div>
    </Provider>
  );

};

export default App;
