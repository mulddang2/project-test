import { v4 as uuidv4 } from "uuid";
import * as dayjs from "dayjs";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Memo } from "../types/Memo";
import { RootState } from "../app/store";

export interface MemoListState {
  memoList: Memo[];
}

const initialState: MemoListState = {
  memoList: [],
};

export const memoSlice = createSlice({
  name: "memoList",
  initialState,
  reducers: {
    addMemo: (state, action: PayloadAction<string>) => {
      const newMemo: Memo = {
        id: uuidv4(),
        content: action.payload,
        createdAt: dayjs().toISOString(),
      };

      state.memoList.push(newMemo);
    },
    removeMemoById: (state, action: PayloadAction<string>) => {
      state.memoList = state.memoList.filter(
        (memo) => memo.id !== action.payload
      );
    },
  },
});

export const { addMemo, removeMemoById } = memoSlice.actions;

export const selectMemoList = (state: RootState) =>
  state.memoListReducer.memoList;
  
export default memoSlice.reducer;
