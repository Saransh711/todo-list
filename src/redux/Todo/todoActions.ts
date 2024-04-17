import {createAsyncThunk} from '@reduxjs/toolkit';
import {addTodo, deleteTodo, editTodo, setInitialData} from './TodoSlice';
import {FormDataWithDate} from './Types';
import {
  getStoreData,
  initializeData,
  setStoreData,
} from '../../service/StorageHelper';

export const addList = createAsyncThunk(
  'todo/add',
  async (addList: FormDataWithDate, thunkAPI) => {
    try {
      const existingList = await getStoreData('todoList');
      let newList = [];
      if (existingList) {
        newList = JSON.parse(existingList);
      }
      newList.push(addList);
      await setStoreData('todoList', JSON.stringify(newList));
      thunkAPI.dispatch(addTodo(addList));
    } catch (error) {
      console.log(error);
    }
  },
);
export const deleteList = createAsyncThunk(
  'todo/delete',
  async (index: number, thunkAPI) => {
    try {
      const existingListString = await getStoreData('todoList');
      if (!existingListString) {
        return;
      }

      const existingList = JSON.parse(existingListString);

      if (index < 0 || index >= existingList.length) {
        console.log('Invalid index');
        return;
      }

      existingList.splice(index, 1);

      await setStoreData('todoList', JSON.stringify(existingList));

      thunkAPI.dispatch(deleteTodo(index));
    } catch (error) {
      console.log('Error deleting item: ', error);
    }
  },
);
export const editList = createAsyncThunk(
  'todo/edit',
  async ({index, todo}: {index: number; todo: FormDataWithDate}, thunkAPI) => {
    try {
      const existingListString = await getStoreData('todoList');
      if (!existingListString) {
        return;
      }

      const existingList = JSON.parse(existingListString);

      if (index < 0 || index >= existingList.length) {
        console.log('Invalid index');
        return;
      }

      existingList[index] = todo;

      await setStoreData('todoList', JSON.stringify(existingList));

      thunkAPI.dispatch(editTodo({index, todo}));
    } catch (error) {
      console.log('Error editing item: ', error);
    }
  },
);
export const initializeApp = createAsyncThunk(
  'app/initialize',
  async (_, thunkAPI) => {
    try {
      const initialData = await initializeData();

      thunkAPI.dispatch(setInitialData(initialData));
    } catch (error) {
      console.log('Error initializing app: ', error);
    }
  },
);
