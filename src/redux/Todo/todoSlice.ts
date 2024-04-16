import {createSlice} from '@reduxjs/toolkit';
// import {removeStoredData} from '../../services/storageHelper';
import {User} from './types';
interface initialAuthStateProps {
  user: User | null;
  isLoading: boolean;
  isFetchingData: boolean;
  error: null;
  otp: string[];
  accessToken: '';
  email: '';
}
const initialAuthState: initialAuthStateProps = {
  user: null,
  isLoading: true,
  isFetchingData: false,
  error: null,
  otp: ['', '', '', '', '', ''],
  accessToken: '',
  email: '',
};
export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isFetchingData = false;
    },
    setShowSplash: state => {
      state.isLoading = false;
    },
    setIsFetchingData: (state, action) => {
      state.isFetchingData = action.payload;
    },
    setOTP: (state, action) => {
      state.otp = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      state.isFetchingData = false;
      state.isLoading = false;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    removeToken: state => {
      // removeStoredData('access_token');
      state.accessToken = '';
    },
  },
});

export const {
  setUser,
  setOTP,
  setAccessToken,
  removeToken,
  setEmail,
  setShowSplash,
  setIsFetchingData,
} = authSlice.actions;
export default authSlice.reducer;
