export interface Team {}
export interface Rules {}

export interface Player {
  id: number;
  team?: Team;
  lastname: string;
  firstname: string;
  birthDate: Date;
  rules?: Rules;
}

export interface State {
  playerList: Player[];
}

export const FETCH_PLAYERS = 'FETCH_PLAYERS';

export interface CroissantActionTypes {
  type: typeof FETCH_PLAYERS;
  playerList: Player[];
}
