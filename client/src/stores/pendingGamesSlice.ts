import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface IndexedYahtzeeSpecs {
  id: number;
  [key: string]: any;
}

interface PendingGamesState {
  gameList: IndexedYahtzeeSpecs[];
}

const initialState: PendingGamesState = {
  gameList: [],
};

const pendingGamesSlice = createSlice({
  name: "pendingGames",
  initialState,
  reducers: {
    updateGame: (state, action: PayloadAction<IndexedYahtzeeSpecs>) => {
      const index = state.gameList.findIndex(
        (game) => game.id === action.payload.id
      );
      if (index > -1) {
        state.gameList[index] = action.payload;
      }
    },

    upsertGame: (state, action: PayloadAction<IndexedYahtzeeSpecs>) => {
      const index = state.gameList.findIndex(
        (game) => game.id === action.payload.id
      );
      if (index > -1) {
        state.gameList[index] = action.payload;
      } else {
        state.gameList.push(action.payload);
      }
    },

    removeGame: (state, action: PayloadAction<number>) => {
      state.gameList = state.gameList.filter(
        (game) => game.id !== action.payload
      );
    },
  },
});

export const { updateGame, upsertGame, removeGame } = pendingGamesSlice.actions;
export default pendingGamesSlice.reducer;

export const selectGameById = (state: RootState, id: number) =>
  state.pendingGames.gameList.find((game) => game.id === id);
