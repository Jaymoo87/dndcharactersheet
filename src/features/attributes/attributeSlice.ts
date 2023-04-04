import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "../counter/counterAPI";
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
  strength: 1,
  dexterity: 1,
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
    increase: (state, action: PayloadAction<number>) => {
      const keys = Object.keys(state) as (keyof AttributeState)[];
      const key = keys[action.payload];
      (state[key] as number)++;
      state.points.current--;
    },
    decrease: (state, action) => {
      const keys = Object.keys(state) as (keyof AttributeState)[];
      const key = keys[action.payload];
      (state[key] as number)--;
      state.points.current++;
    },
  },
});

export const { increase, decrease } = attributeSlice.actions;

export const selectAttribute = (state: RootState) => state.attributes;

export default attributeSlice.reducer;
