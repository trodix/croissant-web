import { State, CroissantActionTypes, FETCH_PLAYERS } from '../types';

const initialState: State = {
  playerList: []
};

export const croissant = (state = initialState, action: CroissantActionTypes): State => {
  switch (action.type) {
    case FETCH_PLAYERS:
      return {
        ...state,
        playerList: action.playerList
      };
  }
  return state;
};