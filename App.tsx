import React from 'react';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <WebView
      source={{uri: 'https://raapcoder.com/'}}
      style={styles.container}
    />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
