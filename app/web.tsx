import { View } from 'react-native';
import { Stack } from 'expo-router';

export default function Web() {
  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2E2E2E',
          },
          headerTintColor: '#fff',
        }}
      />
    </View>
  );
} 