import React, { Component } from 'react';
import PlayerList from '../components/PlayerList';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <PlayerList></PlayerList>
      </div>
    );
  }
}

export default Home;