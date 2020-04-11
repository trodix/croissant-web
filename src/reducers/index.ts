import { combineReducers } from 'redux';
import { croissant } from './croissant.reducer';

export const rootReducer = combineReducers({
  croissant
});

export type RootState = ReturnType<typeof rootReducer>;
