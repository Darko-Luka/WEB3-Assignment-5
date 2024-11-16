import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface IndexedYahtzee {
  id: number;
  [key: string]: any;
}

interface OngoingGamesState {
  gameList: IndexedYahtzee[];
}

const initialState: OngoingGamesState = {
  gameList: [],
};

const ongoingGamesSlice = createSlice({
  name: 'ongoingGames',
  initialState,
  reducers: {
    updateGame: (state, action: PayloadAction<IndexedYahtzee>) => {
      const index = state.gameList.findIndex(game => game.id === action.payload.id);
      if (index > -1) {
        state.gameList[index] = action.payload;
      }
    },

    upsertGame: (state, action: PayloadAction<IndexedYahtzee>) => {
      const index = state.gameList.findIndex(game => game.id === action.payload.id);
      if (index > -1) {
        state.gameList[index] = action.payload;
      } else {
        state.gameList.push(action.payload);
      }
    },
  },
});

export const { updateGame, upsertGame } = ongoingGamesSlice.actions;

export default ongoingGamesSlice.reducer;

export const selectOngoingGames = (state: RootState) => state.ongoingGames.gameList;

export const selectOngoingGameById = (state: RootState, id: number) =>
  state.ongoingGames.gameList.find(game => game.id === id);
