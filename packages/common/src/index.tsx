import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Routes } from './Routes';

declare const global: {HermesInternal: null | {}};

export const App = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Routes />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    backgroundColor: '#F5FCFF',
    width: '100%',
    maxWidth: 425
  }
});
