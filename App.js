import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Router from './src/Router';

const App = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <Router />
    </SafeAreaView>
  );
};

export default App;