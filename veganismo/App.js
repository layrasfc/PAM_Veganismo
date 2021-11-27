import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Inicial from './src/views/Inicial/Inicial';
import Sobre from './src/views/Sobre/Sobre';
import Detalhes from './src/views/Detalhes/Detalhes';

export default function App() {
  return (
    <View style={styles.container}>
      <Inicial /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
