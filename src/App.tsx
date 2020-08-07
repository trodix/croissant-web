import { Container } from '@material-ui/core';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import Header from './Layout/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import { rootReducer } from './reducers';
import { authenticationService as AuthService } from './services';
import PrivateRoute from './shared/PrivateRoute';

const store = createStore(rootReducer, applyMiddleware(thunk));

const currentUser = AuthService.getCurrentUser();

const App: React.FC = () => {
  return (

    <Provider store={store}>
      <div className="App">
        <Header></Header>
        <Router>
          <Container>
            <Switch>
              <PrivateRoute exact path="/">
                <Home></Home>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
            </Switch>
          </Container>
        </Router>
      </div>
    </Provider>

  );
};

export default App;
