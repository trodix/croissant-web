import { FETCH_PLAYERS, UPDATE_USER, Player } from '../types';
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
      });
  };
};

const incrementCounter = (userId: number, ruleId: number) => {
  return (dispatch: Function) => {
    croissantService.incrementCounter(userId, ruleId)
      .then((player: Player) => {
        dispatch({ type: UPDATE_USER, player });
      });
  };
}

const updateNextPaymentDate = (user: Player, nextPaymentDate: Date) => {
  return (dispatch: Function) => {
    croissantService.updateNextPaymentDate(user, nextPaymentDate)
      .then((player: Player) => {
        dispatch({ type: UPDATE_USER, player });
      });
  };
}

const resetCounterRules = (user: Player) => {
  return (dispatch: Function) => {
    croissantService.resetCounterRules(user)
      .then((player: Player) => {
        dispatch({ type: UPDATE_USER, player });
      });
  };
}


export const croissantActions = {
  fetchPlayers,
  incrementCounter,
  updateNextPaymentDate,
  resetCounterRules
};