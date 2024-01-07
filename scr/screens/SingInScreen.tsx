import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {signInWithGoogle} from '../utils/utils';

const SingInScreen = () => {
  const singInHandler = () => {
    signInWithGoogle();
  };
  return (
    <View style={styles.container}>
      <Text>Please login</Text>
      <Button title="Log In with Google" onPress={singInHandler} />
    </View>
  );
};

export default SingInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
