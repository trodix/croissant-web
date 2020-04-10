import React, { Component } from 'react';
import { Player as IPlayer } from '../types';
import Player from './Player';

interface Props {}
interface State { playerList: IPlayer[]; }

class PlayerList extends Component<Props, State> {

  state: State = { 
    playerList: [
      { name: 'Player 1' },
      { name: 'Player 2' },
      { name: 'Player 3' },
      { name: 'Player 4' },
      { name: 'Player 5' },
      { name: 'Player 6' },
    ]
  }

  render() {
    return (
      <div className="player-list">
        { this.state.playerList.map(player => <Player player={player}></Player>) }
      </div>
    );
  }
}

export default PlayerList;
