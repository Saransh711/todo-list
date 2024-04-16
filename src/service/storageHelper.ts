import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStoreData = async (key: string, value: string) => {
  return await AsyncStorage.setItem(key, value);
};

export const getStoreData = async (key: string) => {
  return await AsyncStorage.getItem(key);
};
export const removeStoredData = async (name: string) => {
  try {
    await AsyncStorage.removeItem(name);
  } catch (error: any) {
    console.log('AsyncStorage remove error: ' + error.message);
  }
};
export const isSignedIn = () =>
  new Promise((resolve, reject) => {
    AsyncStorage.getItem('access_token')
      .then((res: unknown) => {
        if (res !== null) {
          resolve(res);
        } else {
          resolve(false);
        }
      })
      .catch((err: any) => reject(err));
  });
