import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';

import theme from './src/global/styles/theme';
import { Background } from './src/components/Background';
import { AuthProvider } from './src/hooks/auth';
import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Background>
          <StatusBar 
            barStyle='light-content'
            backgroundColor='transparent'
            translucent
          />
          <AuthProvider>
            <Routes/>
          </AuthProvider>
        </Background>
      </ThemeProvider>
    </NavigationContainer>
  );
}