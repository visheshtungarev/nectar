/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
const TIMEOUT = 1500;
const Splash = (props) => {
  useEffect(() => {
    const {
      navigation: {replace},
    } = props;
    setTimeout(() => {
      replace('Home');
    }, TIMEOUT);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Splash Screen</Text>
      <Text>Vishesh Tungare</Text>
    </View>
  );
};

export default Splash;
