import AsyncStorage from 'react-native-encrypted-storage';

export const setStoreData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('AsyncStorage set error: ');
  }
};
export const initializeData = async () => {
  try {
    const initialDataString = await getStoreData('todoList');
    if (initialDataString) {
      const initialData = JSON.parse(initialDataString);
      return initialData;
    } else {
      return [];
    }
  } catch (error) {
    console.log('Error initializing data: ', error);
    return [];
  }
};

export const getStoreData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
    return null;
  } catch (error) {
    console.log('AsyncStorage get error: ');
    return null;
  }
};

export const removeStoredData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('AsyncStorage remove error: ');
  }
};
