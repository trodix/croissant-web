import { CroissantActionTypes, FETCH_PLAYERS, INCREMENT_COUNTER, Player, State } from '../types';

const initialState: State = {
  playerList: []
};

export const croissant = (state = initialState, action: CroissantActionTypes): State => {
  switch (action.type) {
    case FETCH_PLAYERS:
      return {
        ...state,
        playerList: action.playerList.sort((a: Player, b: Player) => a.lastname <= b.lastname ? -1 : 1)
      };

    case INCREMENT_COUNTER:
      return {
        ...state,
        playerList: [
          ...state.playerList.filter((p: Player) => p.id !== action.player.id),
          action.player
        ].sort((a: Player, b: Player) => a.lastname <= b.lastname ? -1 : 1)
      }
  }
  return state;
};