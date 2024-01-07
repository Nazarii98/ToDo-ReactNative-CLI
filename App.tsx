import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import SingInScreen from './scr/screens/SingInScreen';
import GoalsScreen from './scr/screens/GoalsScreen';

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  console.log('initializing', initializing);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(newUser => {
      setUser(newUser);
      if (initializing) {
        setInitializing(false);
      }
    });

    return unsubscribe;
  }, [initializing]);

  StatusBar.setBarStyle('dark-content');
  return user ? <GoalsScreen /> : <SingInScreen />;
}
