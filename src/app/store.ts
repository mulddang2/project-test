import { configureStore } from '@reduxjs/toolkit';
import memoListReducer from '../redux/MemoSlice'

export const store = configureStore({
  reducer: {
    // NOTE: :의 왼쪽은 변수이름(상태변수)이다. :오른쪽은 상태 구조를 설계한 것이다.
    memoListReducer: memoListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
