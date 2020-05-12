/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

declare const global: {HermesInternal: null | {}};

export const App = () => {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Counter</Text>
        <Text style={styles.sectionDescription}>{count}</Text>
        <Button title="increment" onPress={() => setCount(count + 1)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});
