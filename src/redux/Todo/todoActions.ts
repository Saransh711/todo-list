import {createAsyncThunk} from '@reduxjs/toolkit';

export const loginUserAction = createAsyncThunk(
  'user/login',
  async (loginInfo: any, thunkAPI) => {
    // try {
    //   thunkAPI.dispatch(setIsFetchingData(true));
    //   const {data} = await RequestService.post('auth/login', loginInfo);
    //   await setStoreData('access_token', data.token);
    //   await setStoreData('user_data', JSON.stringify(data.user_data));
    //   thunkAPI.dispatch(setIsFetchingData(false));
    //   thunkAPI.dispatch(setUser(data.user_data));
    //   thunkAPI.dispatch(setAccessToken(data.token));
    //   return data.user_data;
    // } catch (error) {
    //   thunkAPI.dispatch(setIsFetchingData(false));
    //   if (axios.isAxiosError(error)) {
    //     if (error.code === 'ERR_NETWORK') {
    //       return thunkAPI.rejectWithValue(error.message);
    //     }
    //     return thunkAPI.rejectWithValue(error.response?.data.message);
    //   } else {
    //     console.log(error);
    //     return 'Something went wrong';
    //   }
    // }
  },
);

// export const getRefreshToken = createAsyncThunk(
//   'auth/refreshToken',
//   async (token: string, thunkAPI) => {
//     try {
//       const response = await RequestService.get('auth/refreshToken', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       await setStoreData('access_token', response.data.token);
//       await setStoreData('user_data', JSON.stringify(response.data.user_data));
//       thunkAPI.dispatch(setShowSplash());
//       thunkAPI.dispatch(setIsFetchingData(false));
//       thunkAPI.dispatch(setUser(response.data.user_data));
//       thunkAPI.dispatch(setAccessToken(response.data.token));
//       return response.data;
//     } catch (error: any) {
//       thunkAPI.dispatch(setShowSplash());
//       thunkAPI.dispatch(setIsFetchingData(false));
//       if (axios.isAxiosError(error)) {
//         return thunkAPI.rejectWithValue(error.response?.data.message);
//       }
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );

// export const resetPassword = createAsyncThunk(
//   'auth/resetPassword',
//   async (data: ResetPasswordApiData, thunkAPI) => {
//     try {
//       thunkAPI.dispatch(setIsFetchingData(true));
//       const response = await RequestService.post('auth/reset-password', data);
//       thunkAPI.dispatch(setIsFetchingData(false));
//       return response.data;
//     } catch (error: any) {
//       thunkAPI.dispatch(setShowSplash());
//       thunkAPI.rejectWithValue(error.message);
//       thunkAPI.dispatch(setIsFetchingData(false));
//     }
//   },
// );

// export const asyncChangePassword = createAsyncThunk(
//   'user/change-password',
//   async (data: ChangePasswordFormData, thunkAPI) => {
//     try {
//       thunkAPI.dispatch(setIsFetchingData(true));
//       const response = await RequestService.post('user/change-password', data);
//       thunkAPI.dispatch(setIsFetchingData(false));
//       thunkAPI.dispatch(removeToken());
//       return response.data;
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         thunkAPI.dispatch(setIsFetchingData(false));
//         return thunkAPI.rejectWithValue(error.response?.data.message);
//       } else {
//         thunkAPI.dispatch(setShowSplash());
//         return thunkAPI.rejectWithValue(error);
//       }
//     }
//   },
// );

// export const sendOtp = createAsyncThunk(
//   'auth/sendOtp',
//   async (data: ForgotPasswordFormData, thunkAPI) => {
//     try {
//       thunkAPI.dispatch(setIsFetchingData(true));
//       const response = await RequestService.post('auth/sendOtp', data);
//       thunkAPI.dispatch(setEmail(data.email));
//       thunkAPI.dispatch(setIsFetchingData(false));
//       return response.data.message;
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         thunkAPI.dispatch(setIsFetchingData(false));
//         return thunkAPI.rejectWithValue(error.response?.data.message);
//       } else {
//         return thunkAPI.rejectWithValue(error);
//       }
//     }
//   },
// );
// export const verifyOtp = createAsyncThunk(
//   'auth/verifyOtp',
//   async (data: FormDataString, thunkAPI) => {
//     try {
//       thunkAPI.dispatch(setIsFetchingData(true));
//       const response = await RequestService.post('auth/verifyOtp', data);
//       thunkAPI.dispatch(setIsFetchingData(false));
//       return response.data.message;
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         thunkAPI.dispatch(setIsFetchingData(false));
//         return thunkAPI.rejectWithValue(error.response?.data.message);
//       } else {
//         return thunkAPI.rejectWithValue(error);
//       }
//     }
//   },
// );
