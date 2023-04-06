import { PayloadAction, createSlice, Draft } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

export interface AttributeState {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  points: {
    current: number;
    max: number;
  };
}

const initialState: AttributeState = {
  dexterity: 1,
  strength: 1,
  constitution: 1,
  intelligence: 1,
  wisdom: 1,
  charisma: 1,
  points: {
    current: 20,
    max: 20,
  },
};

export const attributeSlice = createSlice({
  initialState,
  name: "attributes",
  reducers: {
    increaseDex: (state: Draft<AttributeState>, action: PayloadAction<number>) => {
      // const keys = Object.keys(state) as (keyof AttributeState)[];
      // const key = keys[action.payload];
      // state[key] as number;

      state.dexterity += 1;
      state.points.current--;
    },
    decreaseDex: (state: Draft<AttributeState>, action: PayloadAction<number>) => {
      // const keys = Object.keys(state) as (keyof AttributeState)[];
      // const key = keys[action.payload];
      // (state[key] as number)--;
      state.dexterity -= 1;
      state.points.current++;
    },

    increaseStr: (state, action) => {
      state.strength += 1;
      state.points.current -= 1;
    },
    decreaseStr: (state, action) => {
      state.strength -= 1;
      state.points.current += 1;
    },
    increaseChar: (state, action) => {
      state.charisma += 1;
      state.points.current -= 1;
    },
    decreaseChar: (state, action) => {
      state.charisma -= 1;
      state.points.current += 1;
    },
    increaseConst: (state, action) => {
      state.constitution += 1;
      state.points.current -= 1;
    },
    decreaseConst: (state, action) => {
      state.constitution -= 1;
      state.points.current += 1;
    },
    increaseWis: (state, action) => {
      state.wisdom += 1;
      state.points.current -= 1;
    },
    decreaseWis: (state, action) => {
      state.wisdom -= 1;
      state.points.current += 1;
    },

    increaseInt: (state, action) => {
      state.intelligence += 1;
      state.points.current -= 1;
    },
    decreaseInt: (state, action) => {
      state.intelligence -= 1;
      state.points.current += 1;
    },
  },
});

export const {
  increaseDex,
  increaseStr,
  increaseChar,
  increaseConst,
  increaseInt,
  increaseWis,
  decreaseDex,
  decreaseStr,
  decreaseChar,
  decreaseConst,
  decreaseInt,
  decreaseWis,
} = attributeSlice.actions;

export const selectAttribute = (state: RootState) => state.attributes;

export default attributeSlice.reducer;
