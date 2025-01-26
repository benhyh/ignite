import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';


export default function SignIn() {
  return (
    <View style={[styles.container]}>
      {/* Apple Button */}
      <TouchableOpacity>
        <View style={[styles.buttonContainer, styles.appleButton]}>
          <Image 
            source={require('../assets/icons/apple.png')} 
            style={[styles.icon]} 
          />
          <Text style={[styles.text]}>Continue with Apple</Text>
        </View>
      </TouchableOpacity>
      {/* Google Button */}
      <TouchableOpacity>
        <View style={[styles.buttonContainer, styles.googleButton]}>
          <Image 
            source={require('../assets/icons/google.png')} 
            style={[styles.icon]} 
          />
          <Text style={[styles.text]}>Continue with Google</Text>
        </View>
      </TouchableOpacity>
      {/* Facebook Button */}
      <TouchableOpacity>
        <View style={[styles.buttonContainer, styles.facebookButton]}>
          <Image 
            source={require('../assets/icons/facebook.png')} 
            style={[styles.icon]} 
          />
          <Text style={[styles.text]}>Continue with Facebook</Text>
        </View>
      </TouchableOpacity>
      {/* Email Button */}
      <TouchableOpacity
        onPress={() => router.push("/email-login")}  
      >
        <View style={[styles.buttonContainer, styles.emailButton]}>
          <Image 
            source={require('../assets/icons/email.png')} 
            style={[styles.icon]} 
          />
          <Text style={[styles.text]}>Continue with Email</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E2E2E',
    gap: 16,
  },
  buttonContainer: {
    width: 307,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  iconPlaceholder: {
    width: 20,
    height: 20,
    marginRight: 12,
    backgroundColor: 'transparent',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
  },
  appleButton: {
    backgroundColor: '#000000',
  },
  googleButton: {
    backgroundColor: '#4689E5',
  },
  facebookButton: {
    backgroundColor: '#1877F2',
  },
  emailButton: {
    backgroundColor: '#6AB9FF',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
});