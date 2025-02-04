import React from "react";
import { Stack } from "expo-router";
import { useFonts, Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { AuthProvider, useAuth } from '../lib/context/auth';
import { StyleSheet } from 'react-native';

SplashScreen.preventAutoHideAsync();

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2E2E2E',
    borderBottomWidth: 0,
    elevation: 0, // for Android
    shadowOpacity: 0, // for iOS
  },
});

function RootLayoutNav() {
  const { user } = useAuth();

  return (
    <Stack screenOptions={{
      headerStyle: styles.header,
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitle: '',
    }}>
      {user ? (
        // Authenticated routes
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      ) : (
        // Public routes
        <>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          
          <Stack.Screen
            name="(auth)"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="sign-up"
            options={{
              headerBackTitle: '',
            }}
          />

          <Stack.Screen
            name="sign-in"
            options={{
              headerTitle: "Log in",
              headerBackTitle: '',
            }}
          />

          <Stack.Screen
            name="questionnaire"
            options={{
              headerBackTitle: '',
            }}
          />
        </>
      )}
    </Stack>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': Poppins_700Bold,
    'Poppins': Poppins_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
