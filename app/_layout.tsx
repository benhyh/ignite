import { Stack } from "expo-router";

export default function RootLayout() {
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
  </Stack>;
}
