import { Grid } from '@material-ui/core';
import React from 'react';
import { Player as IPlayer } from '../types';
import Player from './Player';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

function PlayerList() {
  const playerList = useSelector<RootState, IPlayer[]>(state => state.croissant.playerList);

  return (
    <Grid container spacing={2}>
      {
        playerList.map((player: IPlayer) =>
          <Grid item xs={6} sm={4} md={2} key={player.id}>
            <Player player={player}></Player>
          </Grid>
        )
      }
    </Grid>
  );
}

export default PlayerList
