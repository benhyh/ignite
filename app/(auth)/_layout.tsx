import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function AuthLayout() {
  return (
    <Stack 
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: '#fff',
        headerTitleStyle: styles.headerTitle,
        headerBackTitle: '',
        headerShadowVisible: false,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="sign-in"
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="email-login"
        options={{
          title: "",
          headerShown: false,
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2E2E2E',
    borderBottomWidth: 0,
    elevation: 0, // for Android
    shadowOpacity: 0, // for iOS
  },
  headerTitle: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#FFFFFF',
  },
}); 