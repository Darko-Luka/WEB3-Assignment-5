import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IndexedYahtzee } from "@/model/game";

interface OngoingGamesState {
  gameList: IndexedYahtzee[];
}

const initialState: OngoingGamesState = {
  gameList: [],
};

const ongoingGamesSlice = createSlice({
  name: "ongoingGames",
  initialState,
  reducers: {
    updateOnGoingGame: (state, action: PayloadAction<IndexedYahtzee>) => {
      const index = state.gameList.findIndex(
        (game) => game.id === action.payload.id
      );
      if (index > -1) {
        state.gameList[index] = {...action.payload}
      }
    },

    upsertOnGoingGame: (state, action: PayloadAction<IndexedYahtzee>) => {
      if (state.gameList.some((g) => g.id === action.payload.id)) {
        updateOnGoingGame({...action.payload});
      } else {
        state.gameList.push({...action.payload});
      }
    },
  },
});

export const {
  updateOnGoingGame,
  upsertOnGoingGame,
} = ongoingGamesSlice.actions;

export default ongoingGamesSlice.reducer;

export const selectOngoingGames = (state: RootState) =>
  state.ongoingGames.gameList;

export const selectOngoingGameById = (state: RootState, id: number) =>
  state.ongoingGames.gameList.find((game) => game.id === id);
