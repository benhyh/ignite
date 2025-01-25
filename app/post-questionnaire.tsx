import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function PostQuestionnaire() {
  const [isCompleted, setIsCompleted] = useState(false);

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCompleted(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Crafting the perfect program for you...
      </Text>
      <View style={styles.iconContainer}>
        {/* Replace these Text components with your actual icons */}
        <Text style={styles.icon}>
          {isCompleted ? '✅' : '⏳'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E2E2E',
    padding: 20,
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 32,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    width: 200,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 64,
  },
});
