import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
      name="index"
      options={{ headerShown: false }}  
    />
    <Stack.Screen
      name="sign-up"
      options={{
        title: "",
        headerStyle: {
          backgroundColor: '#2E2E2E',
        },
        headerTintColor: '#fff',
      }}  
    />
    <Stack.Screen
      name="sign-in"
      options={{
        title: "",
        headerStyle: {
          backgroundColor: '#2E2E2E',
        },
        headerTintColor: '#fff',
      }}
    />
  </Stack>;
}
