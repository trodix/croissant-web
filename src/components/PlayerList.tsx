import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { Player as IPlayer } from '../types';
import Player from './Player';
import { connect } from 'react-redux';

interface Props {}
interface State { playerList: IPlayer[]; }

@connect(({ croissant: { playerList } }) => ({ playerList })) // FIXME
class PlayerList extends Component<Props, State> {

  render() {
    return (
      <Grid container spacing={2}>
        { 
          playerList.map(player => 
            <Grid item xs={6} sm={4} md={2}>
              <Player key={player.id} player={player}></Player>
            </Grid>
          )
        }
      </Grid>
    );
  }
}

export default PlayerList;
