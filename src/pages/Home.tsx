import React, { Component } from 'react';
import PlayerList from '../components/PlayerList';
import { connect } from 'react-redux';
import { croissantActions } from '../actions';

interface Props {
  dispatch: Function;
}

class Home extends Component<Props> {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(croissantActions.fetchPlayers());
  }

  render() {
    return (
      <div>
        <h1>Home page</h1>
        <PlayerList></PlayerList>
      </div>
    );
  }
}

export default connect()(Home);