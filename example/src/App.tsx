import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import CrashTester from 'react-native-crash-tester';

export default function App() {
  return (
    <View style={styles.container}>
      <Button onPress={() => CrashTester.nativeCrash()} title="Native crash" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
