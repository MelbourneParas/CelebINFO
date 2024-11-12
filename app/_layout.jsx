import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Slot, Stack } from 'expo-router';
import { useFonts } from 'expo-font'; // Correct import here
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const Mainlayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-BlackItalic": require("../assets/fonts/Roboto-BlackItalic.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Mainlayout;

const styles = StyleSheet.create({});