import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { Player as IPlayer } from '../types';
import Player from './Player';
import { connect } from 'react-redux';
import { RootState } from '../reducers';

interface Props { playerList: IPlayer[] }
interface State {}

class PlayerList extends Component<Props, State> {

  render() {
    return (
      <Grid container spacing={2}>
        { 
          this.props.playerList.map(player => 
            <Grid item xs={6} sm={4} md={2} key={player.id}>
              <Player player={player}></Player>
            </Grid>
          )
        }
      </Grid>
    );
  }
}

function mapStateToProps(state: RootState): Props {
  return { playerList: state.croissant.playerList };
}

export default connect(mapStateToProps)(PlayerList);
