import {createSlice} from '@reduxjs/toolkit';
import {FormDataWithDate} from './Types';

interface initialAuthStateProps {
  user: FormDataWithDate[];
}
const initialAuthState: initialAuthStateProps = {
  user: [],
};
export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    addTodo: (state, action: {type: string; payload: FormDataWithDate}) => {
      state.user = [...state.user, action.payload];
    },
    deleteTodo: (state, action: {type: string; payload: number}) => {
      state.user = state.user.filter((_, index) => index !== action.payload);
    },
    editTodo: (
      state,
      action: {type: string; payload: {index: number; todo: FormDataWithDate}},
    ) => {
      const {index, todo} = action.payload;
      state.user[index] = todo;
    },

    setInitialData: (
      state,
      action: {type: string; payload: FormDataWithDate[]},
    ) => {
      state.user = action.payload;
    },
  },
});

export const {addTodo, deleteTodo, editTodo, setInitialData} =
  authSlice.actions;
export default authSlice.reducer;
