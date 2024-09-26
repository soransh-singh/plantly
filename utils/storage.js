import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getFromStorage(key) {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function saveToStorage(key, data) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.log(e);
  }
}
