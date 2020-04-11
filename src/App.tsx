import React from 'react';
import Header from './Layout/Header';
import Home from './pages/Home';
import './App.css';
import { Container } from '@material-ui/core';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header></Header>
        <Container>
          <Home></Home>
        </Container>
      </div>
    </Provider>
  );
};

export default App;
