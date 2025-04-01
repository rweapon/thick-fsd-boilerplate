import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

import type { IExample } from "./types";

const initialState: IExample = {
  name: "",
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    setExample: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setExample } = exampleSlice.actions;
export default exampleSlice.reducer;
