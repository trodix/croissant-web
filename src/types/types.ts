export interface Team {
  id: number;
  name: string;
  users?: Player[];
  teamRules?: TeamRule[];
}
export interface TeamRule {
  rule: Rule;
}
export interface Rule {
  id: number;
  name: string;
  description: string;
  coinsCapacity: number;
}
export interface UserRule {
  rule: Rule;
  coinsQuantity: number;
}

export interface Player {
  id: number;
  team?: Team;
  lastname: string;
  firstname: string;
  birthDate: Date;
  userRules?: UserRule[];
}

export interface State {
  playerList: Player[];
}

export const FETCH_PLAYERS = 'FETCH_PLAYERS';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export interface FetchPlayerAction {
  type: typeof FETCH_PLAYERS;
  playerList: Player[];
}

export interface IncrementCounterAction {
  type: typeof INCREMENT_COUNTER;
  player: Player;
}

export type CroissantActionTypes = 
  | FetchPlayerAction
  | IncrementCounterAction;
