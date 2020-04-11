import React from 'react';
import Header from './Layout/Header';
import Home from './pages/Home';
import './App.css';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container>
        <Home></Home>
      </Container>
    </div>
  );
}

export default App;
