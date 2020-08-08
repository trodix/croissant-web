export interface Team {
  id: number;
  name: string;
  users?: Player[];
  teamRules?: TeamRule[];
}

export interface AuthenticatedUser {
  id: number,
  firstName: String,
  lastName: String,
  username: String,
  jwtToken: String,
  refreshToken: String
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
  nextPaymentDate?: Date;
  userRules?: UserRule[];
}

export interface NextPaymentDate {
  nextPaymentDate: Date;
}

export interface State {
  playerList: Player[];
}

export const FETCH_PLAYERS = 'FETCH_PLAYERS';

export const UPDATE_USER = 'UPDATE_USER';

export interface FetchPlayerAction {
  type: typeof FETCH_PLAYERS;
  playerList: Player[];
}

export interface IncrementCounterAction {
  type: typeof UPDATE_USER;
  player: Player;
}

export interface PaydayAction {
  type: typeof UPDATE_USER;
  player: Player;
}

export type CroissantActionTypes = 
  | FetchPlayerAction
  | IncrementCounterAction
  | PaydayAction;
