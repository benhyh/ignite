import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { router } from 'expo-router';
import { signInWithOAuth } from '../../lib/supabase/client';
import { useAuth } from '../../lib/context/auth';
import { useEffect } from 'react';
import { AuthErrorWithMessage } from '../../types/auth';

export default function SignIn() {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.replace('/(tabs)/home');
    }
  }, [user]);

  const handleOAuthSignIn = async (provider: 'apple' | 'google' | 'facebook') => {
    try {
      const { error } = await signInWithOAuth(provider);
      if (error) throw error;
    } catch (error) {
      const authError = error as AuthErrorWithMessage;
      Alert.alert('Error', authError?.message || 'An error occurred during sign in');
    }
  };

  // If user is logged in, render nothing while redirecting
  if (user) return null;

  return (
    <View style={[styles.container]}>
      {/* Apple Button */}
      <TouchableOpacity onPress={() => handleOAuthSignIn('apple')}>
        <View style={[styles.buttonContainer, styles.appleButton]}>
          <Image 
            source={require('../../assets/icons/apple.png')} 
            style={[styles.icon]} 
          />
          <Text style={[styles.text]}>Continue with Apple</Text>
        </View>
      </TouchableOpacity>
      {/* Google Button */}
      <TouchableOpacity onPress={() => handleOAuthSignIn('google')}>
        <View style={[styles.buttonContainer, styles.googleButton]}>
          <Image 
            source={require('../../assets/icons/google.png')} 
            style={[styles.icon]} 
          />
          <Text style={[styles.text]}>Continue with Google</Text>
        </View>
      </TouchableOpacity>
      {/* Facebook Button */}
      <TouchableOpacity onPress={() => handleOAuthSignIn('facebook')}>
        <View style={[styles.buttonContainer, styles.facebookButton]}>
          <Image 
            source={require('../../assets/icons/facebook.png')} 
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
            source={require('../../assets/icons/email.png')} 
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