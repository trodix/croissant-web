import { Grid } from '@material-ui/core';
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
      { name: 'Player 7' },
      { name: 'Player 8' },
      { name: 'Player 9' },
      { name: 'Player 10' },
      { name: 'Player 11' },
      { name: 'Player 12' },
    ]
  }

  render() {
    return (
      <Grid container spacing={2}>
        { 
          this.state.playerList.map(player => 
            <Grid item xs={6} sm={4} md={2}>
              <Player key={player.name} player={player}></Player>
            </Grid>
          )
        }
      </Grid>
    );
  }
}

export default PlayerList;
