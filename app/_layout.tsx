import { Stack } from "expo-router";
import { useFonts, Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

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

  return <Stack>
    {/* Initial Load */}
    <Stack.Screen
      name="index"
      options={{ headerShown: false }}  
    />
    {/* Sign Up Page */}
    <Stack.Screen
      name="sign-up"
      options={{
        title: "",
        headerStyle: {
          backgroundColor: '#2E2E2E',
          borderBottomWidth: 0,
        },
        headerTintColor: '#fff',
      }}  
    />
    {/* Sign In Page */}
    <Stack.Screen
      name="sign-in"
      options={{ 
        title: "Log in",
        headerStyle: {
          backgroundColor: '#2E2E2E',
          borderBottomWidth: 0, 
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center', 
      }}
    />
    {/* Questionnaire Page */}
    <Stack.Screen
      name="questionnaire"
      options={{ 
        title: "",
        headerStyle: {
          backgroundColor: '#2E2E2E',
          borderBottomWidth: 0, 
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center', 
      }}
    />
    {/* Email Page */}
    <Stack.Screen
      name="email-login"
      options={{ 
        title: "Continue with Email",
        headerStyle: {
          backgroundColor: '#2E2E2E',
          borderBottomWidth: 0, 
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center', 
      }}
    />
  </Stack>;
}
