import { View, Text, StyleSheet } from 'react-native';

export default function Today() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Poppins',
  },
}); 