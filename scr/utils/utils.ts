import AsyncStorage from '@react-native-async-storage/async-storage';
import {Goal} from '../types/Goal';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const fetchStoredData = async () => {
  try {
    const storedData = await AsyncStorage.getItem('@tasks');
    console.log('---Tasks---', storedData);

    if (storedData) {
      return JSON.parse(storedData);
    }
    return [];
  } catch (error) {
    console.error('Error fetching data from local storage:', error);
    return [];
  }
};

export const saveDataToStorage = async (data: Goal[]) => {
  try {
    await AsyncStorage.setItem('@tasks', JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data to local storage:', error);
  }
};

export const applyFilter = (goals: Goal[], selectedFilter: string) => {
  if (selectedFilter === 'completed') {
    return goals.filter(goal => goal.completed);
  }
  if (selectedFilter === 'incomplete') {
    return goals.filter(goal => !goal.completed);
  }
  return goals;
};

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const userAuth = await auth().signInWithCredential(googleCredential);
    saveUser(userAuth);

    return userAuth;
  } catch (e) {
    console.error(e);
  }
};

const saveUser = async (user: any) => {
  try {
    console.log('userSavedInLocalStorage', user);
    const json = JSON.stringify(user);
    await AsyncStorage.setItem('@user', json);
  } catch (e) {
    console.error(e);
  }
};

export const getUser = async () => {
  try {
    const json = await AsyncStorage.getItem('@user');
    if (json) {
      console.log('---getUserWork---');
      return JSON.parse(json);
    } else {
      console.log('---getUserDontWork---');
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const signOutFromGoogle = async () => {
  try {
    await GoogleSignin.signOut();
    await auth().signOut();
  } catch (error) {
    console.error('Sign Out Error:', error);
  }
};
