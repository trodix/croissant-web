import { FETCH_PLAYERS, INCREMENT_COUNTER, Player } from '../types';
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

const incrementCounter = (userId: number, ruleId: number) => {
  return (dispatch: Function) => {
    croissantService.incrementCounter(userId, ruleId)
      .then((player: Player) => {
        dispatch({ type: INCREMENT_COUNTER, player });
      })
  };
}


export const croissantActions = {
  fetchPlayers,
  incrementCounter
};