import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Image, View, Animated, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { router } from 'expo-router';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': Poppins_700Bold,
  })
  const fadeAnim = new Animated.Value(1); 

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000, // 1 second fade out
        useNativeDriver: true,
      }).start(() => {
        setIsLoading(false);  // Change state after animation completes
      });
    }, 2000);  // Show logo for 2 seconds

    return () => clearTimeout(timer);  // Cleanup
  }, []);

  if (!fontsLoaded) return null;

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#2E2E2E"
        }}
      >
        <Animated.View style={{ opacity: fadeAnim }}>
          <Image source={require('@/assets/images/logo.png')} />
        </Animated.View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#2E2E2E", justifyContent: "center", alignItems: "center" }}>
      <Image source={require('@/assets/images/logo-2.png')} style={{ width: 200, height: 200}} />
      <TouchableOpacity 
        style={[
          styles.button,
          styles.primaryButton,
          { marginBottom: 16 }
        ]}
          onPress={() => router.push('/sign-up')}>
        <Text style={[styles.buttonText, styles.primaryButtonText]}>
          Get started
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          styles.secondaryButton
        ]}
          onPress={() => router.push('/sign-in')}>
        <Text style={[styles.buttonText, styles.secondaryButtonText]}>
          Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 307,
    height: 72,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
  },
  primaryButton: {
    backgroundColor: '#D9D9D9',
  },
  primaryButtonText: {
    color: '#2E2E2E',
  },
  secondaryButton: {
    backgroundColor: '#2E2E2E',
    borderWidth: 2,
    borderColor: '#D9D9D9',
  },
  secondaryButtonText: {
    color: '#FFFFFF',
  },
});
