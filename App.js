import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import config from './src/aws-exports';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

import { withAuthenticator } from 'aws-amplify-react-native';

function App() {
  const SignOut = async () => {
    try {
      await Auth.signOut();
    } catch {
      console.log('Error signing out: ', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Welcome to the app 👋.</Text>
      <Button title="Sign Out" color="red" onPress={SignOut} />
      <StatusBar style="auto" />
    </View>
  );
}

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
