import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { HomePage } from './src/pages';

function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <HomePage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
