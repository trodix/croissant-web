import { FETCH_PLAYERS, Player } from '../types';
import { croissantService } from '../services';

const fetchPlayers = () => {
  return (dispatch: Function) => {
    croissantService.fetchPlayerList()
      .then((playerList: Player[]) => {
        return playerList.map(player => {
          player.birthDate = new Date(player.birthDate);
          return player;
        })
      })
      .then((playerList: Player[]) => {
        dispatch({ type: FETCH_PLAYERS, playerList });
      })
  };
};


export const croissantActions = {
  fetchPlayers
};