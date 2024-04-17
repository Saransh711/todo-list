import {configureStore} from '@reduxjs/toolkit';
import todoSlice from '../redux/Todo/TodoSlice';
export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
