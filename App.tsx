import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import theme from './src/global/styles/theme';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <View>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      </ThemeProvider>
    </NavigationContainer>
  );
}