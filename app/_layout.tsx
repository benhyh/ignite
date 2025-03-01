import React from "react";
import { Stack, useRouter, useSegments } from 'expo-router';
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

// Protected route component
function ProtectedRouteWrapper({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // Skip protection during initial load
    if (isLoading) return;

    // Check if the current route should be protected
    const inAuthGroup = segments[0] === '(auth)';
    const inTabsGroup = segments[0] === '(tabs)';
    const inSettingsGroup = segments[0] === '(settings)';
    const isIndexRoute = segments.length === 1 && segments[0] === '';
    const isQuestionnaireRoute = segments.length === 1 && segments[0] === 'questionnaire';

    // Handle authentication redirects
    if (!user) {
      // If not logged in and trying to access protected route, redirect to index
      if (inTabsGroup || inSettingsGroup) {
        router.replace('/');
      }
    } else {
      // If logged in and on auth routes, redirect to home
      if (inAuthGroup || isIndexRoute) {
        // Check if user has completed questionnaire (you'd need to add this logic)
        const hasCompletedQuestionnaire = user.user_metadata?.completed_questionnaire;
        
        if (!hasCompletedQuestionnaire && !isQuestionnaireRoute) {
          router.replace('/questionnaire');
        } else if (hasCompletedQuestionnaire || isQuestionnaireRoute) {
          router.replace('/(tabs)/home');
        }
      }
    }
  }, [user, isLoading, segments]);

  return <>{children}</>;
}

function RootLayoutNav() { 
  const { user } = useAuth();

  return (
    <Stack screenOptions={{
      headerStyle: styles.header,
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitle: '',
      headerShadowVisible: false,
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
      <ProtectedRouteWrapper>
        <RootLayoutNav />
      </ProtectedRouteWrapper>
    </AuthProvider>
  );
}
