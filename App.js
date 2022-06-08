/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const App = () => {
  const checkCamera = () => {
    check(PERMISSIONS.ANDROID.CAMERA)
      .then(result => {
        if (result === RESULTS.DENIED) {
          request(PERMISSIONS.ANDROID.CAMERA, 'LET ME SEE YOU').then(result => {
            console.log(result);
          });
        } else if (result === RESULTS.GRANTED) {
          console.log('I can see!');
        } else {
          console.log(result);
        }
      })
      .catch(error => {
        console.warn(error);
      });
  };

  return (
    <View style={styles.mainContent}>
      <Text>Hello!</Text>
      <Button title="Try Me!" onPress={checkCamera} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
